---
qid: ing_54b56d5003__star__local
question: 'Explain: Caching Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 304
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:24-05:00'
sources: []
---

**Situation**  
In my last role I was leading a recommendation engine for an e‑commerce platform that served millions of product views per day. The model inference latency had crept up to 350 ms, pushing the page load time over our SLA and causing cart abandonment.

**Task**  
I needed to reduce inference latency to under 150 ms while keeping the system cost‑effective and ensuring the recommendation freshness stayed within a one‑hour window.

**Action**  
First I profiled the pipeline: the heavy part was loading the last‑updated embedding matrix from disk. I introduced an LRU cache in Redis that held the top 200K embeddings, refreshing it every hour via a background Spark job. For cold starts I added a tiered cache—an in‑memory local cache for the most frequent 10 k items and a fallback to Redis. I also swapped the serialization format from Pickle to MessagePack, cutting deserialization time by ~30%. Finally, I instrumented Prometheus alerts to monitor hit ratios and auto‑scale the cache nodes.

**Result**  
Latency dropped to an average of 110 ms, boosting page load times by 35% and reducing cart abandonment by 12 %. The caching strategy also cut our GPU usage cost by 22%, and I documented best practices that were later adopted across other ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
