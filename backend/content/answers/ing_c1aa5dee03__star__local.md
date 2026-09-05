---
qid: ing_c1aa5dee03__star__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 333
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:13-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine that served personalized product suggestions to 12 million daily active users. The inference latency hit 250 ms on average, which caused a 4% drop in click‑through rate during peak hours.

**Task:**  
I was tasked with reducing the end‑to‑end latency below 120 ms without increasing GPU capacity or compromising model accuracy.

**Action:**  
First I profiled the pipeline: data loading (40 ms), feature extraction (70 ms), model inference (80 ms), and post‑processing (20 ms). The biggest bottleneck was feature extraction, which recomputed millions of sparse embeddings per request. I introduced a two‑level cache strategy:

1. **Feature Cache** – an in‑memory LRU store (Redis) holding the last 5 million user‑item embedding vectors, refreshed every hour.
2. **Model Artifact Cache** – a disk‑based cache for the frozen TensorFlow graph so we avoided reloading it on each request.

I also added a fallback to compute embeddings only when a cache miss occurred and scheduled asynchronous batch updates during off‑peak hours.

**Result:**  
Latency dropped from 250 ms to 95 ms, boosting click‑through by 3.2% and reducing server costs by 18%. I learned that profiling the pipeline first reveals which layer truly benefits from caching, and that a hybrid in‑memory/disk strategy can balance speed with memory constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
