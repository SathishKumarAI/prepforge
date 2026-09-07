---
qid: ing_936defd7da__aws__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 535
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:16-05:00'
sources: []
---

**Situation –** I was leading a search‑engine team that needed to move from a legacy ANN index (IVF) to a next‑gen system for real‑time product recommendation.  
**Task –** Evaluate three candidate algorithms—HNSW, IVF, and Product Quantization (PQ)—and decide which would give the best recall/latency/memory balance for our 50 M‑item catalog under a 10 ms latency SLA.

| Algorithm | Recall @k (top‑20) | Latency per query | Memory footprint | Notes |
|-----------|--------------------|-------------------|------------------|-------|
| **IVF** (flat + PQ) | 0.82 | ~4 ms | 1× raw vectors (≈2 GB for 50M @128‑dim) | Simple, good throughput; recall drops sharply when inverted list count is low. |
| **PQ** (product quantization only) | 0.78 | ~3 ms | 0.25× raw (≈500 MB) | Strong compression, but high false‑positive rate → lower recall unless re‑ranked. |
| **HNSW** | 0.93 | ~6–8 ms | 1.2× raw (≈2.4 GB) | Near‑perfect recall; latency grows with graph depth; highly parallelizable on GPU. |

**Action –** I prototyped each in a staging cluster, instrumenting query traces and memory monitors. The key trade‑offs emerged:

* **Recall vs Latency:** HNSW outperformed IVF/PQ by ~10 % recall for only a 2–3 ms latency penalty.  
* **Memory:** PQ saved the most RAM but required an extra re‑ranking pass, adding CPU load.  
* **Scalability:** HNSW’s graph construction cost is O(N log N) and scales linearly; IVF’s index rebuild is cheaper but less accurate.

**Result –** We adopted a hybrid: HNSW for cold starts (high recall) and PQ for hot slots (fast, compressed). Post‑launch metrics showed a 12 % lift in conversion rate while staying under the 10 ms SLA. The decision was driven by **Ownership**—taking end‑to‑end responsibility—and **Dive Deep**, quantifying each algorithm’s impact before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
