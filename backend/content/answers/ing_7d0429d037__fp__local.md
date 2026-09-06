---
qid: ing_7d0429d037__fp__local
question: What caching strategies apply to RAG systems, and what are the invalidation
  traps?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 646
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:31:36-05:00'
sources: []
---

**Caching in RAG – why it must work that way**

A RAG system splits the problem into *retrieval* (find relevant context) and *generation* (produce an answer).  
The retrieval step is expensive because it typically scans a large document corpus or queries an external vector store.  
If we treat every request as “cold,” we pay \(O(N)\) cost per query, where \(N\) is the number of stored embeddings.  
To make RAG tractable, we cache *the intermediate results* that are reusable across many generations:

| Strategy | What it caches | Why it speeds up |
|----------|----------------|------------------|
| **Vector‑embedding cache** | Pre‑computed document vectors (or top‑k neighbor lists) | Avoids re‑encoding the same text on each request. |
| **Chunk‑to‑source cache** | Mapping from retrieved chunks to their original documents | Prevents repeated I/O when the same chunk appears in multiple queries. |
| **Query‑similarity cache** | Fingerprints of recent queries → top‑k results | Exploits locality: many natural‑language questions differ by only a few tokens. |
| **Generation‑state cache** | Partial decoder states for incremental generation | Enables resume or beam re‑use across similar prompts. |

The fundamental principle is *caching the most expensive, least‑changing operation*: encoding and similarity search.  

**Invalidation traps**

1. **Stale corpus** – If a document changes after its vector was cached, subsequent queries will retrieve outdated content.  
   *Fix:* tie cache entries to a hash of the source text or use a TTL that reflects update frequency.

2. **Model drift** – Updating the encoder model changes similarity metrics; old vectors become mis‑aligned.  
   *Fix:* maintain versioned caches and invalidate when the encoder checkpoint changes.

3. **Query drift** – A cache keyed on raw text may miss semantically similar queries, wasting the benefit of the cache.  
   *Fix:* normalize queries (lemmatization, stop‑word removal) or use semantic fingerprints (e.g., MinHash) as keys.

4. **Memory pressure** – Aggressive caching can exhaust RAM and trigger LRU evictions that remove useful entries prematurely.  
   *Fix:* monitor hit ratios and adjust cache size dynamically; consider hierarchical caching (in‑memory + disk).

**Non‑obvious insight**

Many practitioners treat the cache as a flat key–value store, but RAG’s retrieval is inherently *metric*. A smarter strategy is to maintain an **approximate nearest‑neighbour index in memory** that can be updated incrementally. This turns cache invalidation into “update‑the‑index” rather than “evict‑and‑rebuild,” preserving both speed and freshness without a hard TTL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
