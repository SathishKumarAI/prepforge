---
qid: ing_d86a7e613b__fp__local
question: 'Explain: The Interview Question — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 394
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:34-05:00'
sources: []
---

**Real‑time search** is the problem of answering a query as soon as it arrives, while continuously updating the underlying index with new documents or changes.  
The *fundamental* requirement is **latency ≤ L** (often < 1 s) and **accuracy ≈ offline retrieval**. To satisfy both, we must break the traditional two‑phase pipeline—indexing then querying—into a *streaming* pipeline.

1. **Streaming index updates**: We maintain an in‑memory inverted index that accepts insert/delete streams. Each update increments counters on posting lists; no re‑ranking is needed because relevance scores are recomputed lazily during query time.

2. **Online scoring**: The score function (e.g., BM25) can be expressed as a *linear combination* of term frequencies and document statistics. Since all statistics are kept in the index, we can compute the score on‑the‑fly without disk I/O.

3. **Approximate pruning**: To keep latency low, we use *beam search* over posting lists: only top‑k terms per query are expanded, and a heap keeps the current best candidates. This is essentially a greedy optimization of the objective “maximize relevance under time budget”.

4. **Consistency guarantees**: Because updates are applied immediately, the system offers *exactly‑once* semantics: each document contributes to scores at most once per timestamp.

> **Non‑obvious insight:** The bottleneck is not I/O but *cache locality*. By packing posting lists contiguously and using a two‑level cache (in‑memory + SSD), we achieve sub‑millisecond query times even with millions of updates. This architectural choice turns an asymptotically linear problem into an effectively constant‑time operation for practical workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
