---
qid: ing_c52b313312__star__local
question: 'Explain: Sync vs Async Processing — 10 System Design Tradeoffs You Cannot
  Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 357
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:11-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the recommendation engine for a streaming platform that served millions of users per day. The existing pipeline was synchronous; every user request had to wait for heavy feature‑engineering and model inference before returning results, causing 2–3 second latency spikes during peak hours.

**Task:**  
I needed to cut response time below one second while still delivering accurate recommendations, without blowing up infrastructure costs or compromising data freshness.

**Action:**  
I shifted the pipeline to an asynchronous architecture. First, I introduced a Kafka queue to decouple request ingestion from processing. For feature computation, I built micro‑services that ran on spot EC2 instances and cached results in Redis for 10 minutes. Model inference was moved to a GPU‑enabled Lambda layer that processed batches asynchronously, writing predictions back to DynamoDB. To keep data fresh, I scheduled nightly Spark jobs that refreshed the embedding tables, while edge caches served stale but still relevant recommendations during the interim. Finally, I added a circuit breaker that fell back to a lightweight rule‑based model when the async pipeline exceeded 95th‑percentile latency.

**Result:**  
Latency dropped from an average of 2.5 seconds to under 0.8 seconds for 90 % of requests. Throughput increased by 35 %, and infrastructure cost fell 20 % thanks to spot instances and reduced Lambda invocations. I learned that the trade‑offs between consistency, latency, and cost can be balanced with careful async design, but only if you instrument each component for observability and have a graceful fallback strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
