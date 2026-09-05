---
qid: ing_6e8ce03e71__star__local
question: 'Explain: Cache Everything — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:29-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine that served personalized content to 1.2 million daily users. The inference pipeline, running on a cluster of GPU instances, had to process user embeddings and item vectors in real time. Each request triggered a full matrix multiplication against the latest model weights, leading to an average latency of 350 ms and a CPU‑GPU queue that hit its limits during peak hours.

**Task:**  
I was tasked with reducing per‑request latency below 80 ms while keeping GPU utilization under 70% so we could handle a 30% traffic spike without adding hardware.

**Action:**  
I introduced a two‑tier cache strategy:  
1. **Feature Cache (Redis):** We precomputed user and item embeddings for the top 10k users and items, storing them in Redis with a TTL of 15 minutes. Each request now pulls vectors from memory instead of recomputing them on the GPU.  
2. **Model Output Cache (Memcached):** For frequent query pairs we cached the final recommendation list, keyed by user‑item hash, refreshing only when model weights changed or cache expired after 5 minutes.

We also added a fallback to compute on GPU if both caches missed, but that was <1% of traffic. The caching layer was instrumented with Prometheus metrics to monitor hit rates and TTL evictions.

**Result:**  
Latency dropped from 350 ms to an average of 45 ms, GPU utilization fell to 55%, and we avoided a 30% cost increase in cloud spend. The cache hit rate stabilized at 92%. I learned that fine‑tuning TTLs and monitoring eviction patterns are as critical as the caching mechanism itself, especially when model updates occur frequently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
