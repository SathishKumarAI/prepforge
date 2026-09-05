---
qid: ing_d912769d02__star__local
question: 'Explain: Approach 2: Global Counter (Non-Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:50-05:00'
sources: []
---

**Situation**  
At my previous startup we were training a recommendation engine on a cluster of Spark workers. The model had to process millions of user interactions each hour, and the pipeline was scheduled to run every 10 minutes.

**Task**  
We needed a fast way to keep track of how many events had been processed so that downstream jobs could fetch only new data. A deterministic counter would introduce heavy coordination overhead, slowing down the whole job.

**Action**  
I proposed a global non‑deterministic counter: each executor maintained its own local count and periodically flushed it to an in‑memory Redis store with `INCRBY`. We added a small consistency window (± 5 % error) by sampling the Redis value at the start of each job. The counter was updated asynchronously, so workers never blocked on network I/O. We also instrumented a simple HTTP endpoint that returned the current count for monitoring.

**Result**  
The pipeline throughput increased from 12 k events/second to 18 k events/second— a 50 % boost— while keeping latency under 2 seconds per batch. The trade‑off of occasional double counting was acceptable given our SLA, and we learned that relaxed consistency can dramatically improve performance in high‑volume ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
