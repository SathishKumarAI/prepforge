---
qid: ing_9f5c5c7b78__aws__local
question: 'Explain: Q70: Explain provider-level prompt caching and how you would architect
  a system to maximize cache hit rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 578
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:08-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an on‑prem AI inference platform for a fintech client. The model’s latency was 350 ms per prompt and the cost of repeated token generation hit $0.08 per 1k tokens, exceeding budget by 30 %. We needed to cache provider‑level prompts (the “context” portion) so that identical or near‑identical prompts would be served from a fast store instead of re‑invoking the LLM.

**Action**  
I designed a **two‑tier cache** using AWS services:

1. **Edge Layer – Amazon CloudFront + Lambda@Edge**  
   *Key:* Store prompt fingerprints (SHA‑256) in a global key‑value map backed by **Amazon DynamoDB Global Tables** for cross‑region consistency.  
   *Why:* 99.95 % availability and sub‑10 ms lookup.

2. **Near‑Real‑Time Layer – Amazon ElastiCache for Redis**  
   *Key:* In‑memory LRU cache of the last 5 M prompt embeddings, keyed by a composite hash of prompt text + user ID.  
   *Why:* 0.3 µs read latency and automatic sharding across nodes.

To maximize hit rate I implemented **semantic deduplication**: every incoming prompt is vector‑encoded (using Sentence‑Transformers) and compared to the nearest neighbor in Redis using a pre‑computed ANN index. If similarity > 0.92, we redirect to the cached answer; otherwise, we invoke the LLM and write back the result.

I also introduced **adaptive eviction**: cache size scales with observed traffic patterns (auto‑scaling based on CloudWatch metrics) and a “cool‑down” period for stale entries.

**Result**  
After deployment:

- Cache hit rate rose from 12 % to **68 %** within two weeks.  
- Latency dropped by **47 %** (average 190 ms).  
- Cost per inference fell by **$0.05 per 1k tokens**, saving $12K/month.

**Learnings**  
I discovered that naïve key‑based caching underestimates semantic similarity; integrating vector search unlocks higher hit rates. I also learned to monitor cache churn with DynamoDB Streams and adjust LRU thresholds dynamically—an insight that informed our next generation of multi‑tenant prompt caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
