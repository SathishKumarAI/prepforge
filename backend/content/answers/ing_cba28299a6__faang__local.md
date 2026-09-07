---
qid: ing_cba28299a6__faang__local
question: Design an example store for dynamic few-shot selection. What do you get,
  and what does it cost you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 507
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:32:37-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *dynamic few‑shot selector*—a system that, given a new query, retrieves a handful of high‑quality exemplars (few‑shots) from a large repository for prompt tuning or retrieval‑augmented generation. Assume we have:  

- A fixed pool of pre‑computed embeddings for all candidates.  
- Real‑time latency constraints (< 50 ms per request).  
- Storage cost and query throughput are the key trade‑offs.

**Approach**  
1. **Indexing** – build an IVF (inverted file) + PQ (product quantization) index on the embeddings, enabling sub‑linear search.  
2. **Dynamic filtering** – maintain a lightweight metadata layer (e.g., recent popularity or recency scores).  
3. **Scoring** – compute a combined similarity score = α·cosine(embedding) + β·metadata_weight.  
4. **Retrieval pipeline** – query the index, then re‑rank the top‑k candidates using the full scoring function.

**Depth**  
- *Complexity*: Index construction O(N log N), search O(k + M) where M is number of IVF cells examined.  
- *Space*: Each embedding (384 d float32) ≈ 1.5 KB; with PQ compression we reduce to ~200 B per vector.  
- *Cost*: For a million items, index ≈ 200 MB + metadata overhead (~50 MB). Compute cost is dominated by GPU/CPU for similarity ops (≈0.01 USD per query at scale).

**Edge Cases**  
- Embedding drift: periodically re‑embed to avoid stale vectors.  
- Cold start: fallback to a global “best‑of‑all” pool if metadata insufficient.  
- Skewed queries: guard against over‑fetching similar items by enforcing diversity constraints.

**Optimize & Communicate**  
To reduce latency, we can cache the top‑k results for frequent queries and use approximate nearest neighbor (ANN) libraries like FAISS or Annoy with multi‑threading. For cost, we batch queries and leverage spot instances. I’d explain this trade‑off chain—index size vs. query time—and how each component directly impacts engineering budgets and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
