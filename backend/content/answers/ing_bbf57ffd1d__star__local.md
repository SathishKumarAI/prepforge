---
qid: ing_bbf57ffd1d__star__local
question: 'Explain: What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 330
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:17-05:00'
sources: []
---

**Situation** – While leading a recommendation engine for an e‑commerce platform, we hit a 40 % slowdown during peak traffic: our model served predictions in ~800 ms, but the API had to return results within 300 ms.

**Task** – Reduce inference latency to under 200 ms without retraining the model or adding expensive GPU clusters.

**Action** – I introduced an in‑memory cache using Redis with a two‑level strategy: (1) a feature‑hash key that stored pre‑computed embeddings for the top 5 % of most frequent users, and (2) a probabilistic Bloom filter to avoid unnecessary lookups for cold users. We serialized model outputs as protobufs, keyed by user‑item pair, and set a TTL of 12 hours to keep freshness. I also added a fallback path that streamed the remaining 95 % through the GPU inference pool but only when cache miss rates exceeded 10 %. Metrics were collected via Prometheus; we tuned eviction policies (LRU vs LFU) based on hit‑rate trends.

**Result** – Cache hit rate rose to 82 %, cutting average API latency from 800 ms to 180 ms, meeting SLA. Traffic during flash sales increased by 25 % without new infrastructure. I learned that thoughtful cache granularity and TTL tuning can deliver dramatic performance gains in ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
