# Scaling PrepForge to 100M+ questions (and doing it token-cheap)

A data-engineering design for taking the current local-first prototype to hundreds of millions of
questions sourced from PDFs, Markdown, HTML, and YouTube — while keeping LLM token spend low.

## Where the current design breaks

| Component | Now | Breaks at |
|---|---|---|
| `main._load_questions()` | reads **all** JSON into memory every request | ~50k questions |
| Answer cache | one `.md` file per (question × lens) → 100M×8 = **800M files** | filesystem dies (~10^6 files) |
| `/vault/read` | re-parses the PDF on every open | slow, repeated CPU |
| Search | `Fuse.js` over the full set in the browser | ~10k questions |
| Dedup | in-memory dict per ingest run | one machine's RAM |

The prototype's instinct is right — **parse once, generate once, serve from a file** — it just needs
real storage, indexing, and a batch pipeline behind it.

## Target architecture — a medallion lakehouse (fits the Databricks theme)

```
Sources (PDF / MD / HTML / YouTube)
        │  content-hash, idempotent
        ▼
[ Queue: Kafka/SQS ] ──▶ extract workers ──▶ BRONZE (raw docs + extracted markdown in S3)
                                                   │  chunk, normalize, embed
                                                   ▼
                                           SILVER (deduped questions + sources + embeddings, Delta Lake)
                                                   │  lazy generate-and-cache
                                                   ▼
                                           GOLD (cached answers per lens, Delta / object store)
                                                   │
                          FastAPI serving  ◀───────┘   (query by id/topic/vector; CDN static markdown)
```

- **Object store (S3/GCS)** holds raw docs + the **parse-once extracted markdown/HTML** — served static via CDN, never re-parsed.
- **Delta Lake / Parquet** tables (columnar, partitioned by topic/source): `questions`, `sources`, `answers`, `edges`. Query by key; never load-all.
- **Spark / Databricks jobs** do batch ingest, dedup, and embedding at scale; a stream job handles new sources.

## Ingestion at scale (PDF / HTML / YouTube)

- **Decouple from request time** — ingestion is a batch/stream job, not a click.
- **Idempotent + incremental** — content-hash each source; skip unchanged; process only deltas. Store the extracted markdown **once**; downstream reads that, not the PDF.
- **YouTube** — pull the transcript via API **once**, store it; never re-fetch. Chunk transcript by timestamp.
- **Chunking** — split docs into ~500-token chunks with overlap; carry `source`, `offset`, `topic` metadata for citation.

## Dedup at 100M (never duplicate a question)

1. **Exact** — normalized-text SHA (current approach) behind a hash index (Postgres unique / Bloom pre-filter). O(1) per candidate.
2. **Near-duplicate** — embed each question, **ANN search** (pgvector / FAISS / a vector DB); cluster semantically-equal questions → one **canonical** question + variants pointing to it. This same graph powers the "remember one question via another" concept map.

## Serving + search

- **Server-side search** — Postgres FTS or OpenSearch for keyword; **vector search** for semantic ("questions like this"). Always paginate; never ship the corpus to the browser.
- **Serve answers by key** — API reads the GOLD row/file for `(qid, lens)`; static markdown behind a CDN.

## Token efficiency — the crux (this is where the money is)

The cache-first design is already the core win: **generate an answer once, store it, serve it free forever.** At 100M scale, layer these:

1. **Never pre-generate everything.** 100M × 8 lenses = 800M LLM calls = absurd. **Generate lazily on first request, then cache.** Only the questions people actually open get generated. The long tail costs nothing until touched.
2. **Dedup before you generate.** Near-dup questions share **one canonical answer**; variants map to it. If 100M questions dedup to 5M canonical, you generate for 5M, not 100M — a 20× cut.
3. **RAG, not whole-doc prompts.** For grounded answers, retrieve the top-k relevant **chunks** (embeddings) and send only those as context — not the entire PDF. Input tokens drop by orders of magnitude.
4. **Tiered generation.** Cheap/local model (Haiku or Ollama) for the bulk and first pass; escalate to a frontier model only for flagged-hard or high-traffic questions.
5. **Batch API for offline pre-warm.** Pre-generate only the **top-N popular** questions with the Batch API (~50% cost) during off-peak; everything else stays lazy.
6. **Parse/summarize once.** A PDF is extracted → structured into cards **once**; the raw PDF never goes to the LLM again. Reading a source serves the stored markdown (0 tokens).
7. **Embeddings are cheap; generation is expensive.** Spend on embeddings (dedup + retrieval + graph) to *avoid* generation. That's the trade that scales.

## Migration path from the prototype (incremental, no big-bang)

1. Move answer cache from loose `.md` files → a keyed store (SQLite → Postgres → Delta) — same cache-first logic, just addressable at scale.
2. Add an `embeddings` table + pgvector; wire near-dup dedup + semantic search.
3. Move ingestion to a queue + worker; store extracted markdown in object storage.
4. Swap client Fuse → server search endpoint (keyword + vector).
5. Add RAG to the grounded-answer generator (retrieve chunks, not whole docs).
6. Only then: Spark/Databricks batch jobs when a single Postgres node isn't enough.

**Bottom line:** the token bill is controlled by **dedup + lazy generation + RAG + tiering**, and the
serving cost by **parse-once + columnar storage + server-side/vector search + CDN**. Generation is
the expensive thing — every design choice above exists to generate *less*.
