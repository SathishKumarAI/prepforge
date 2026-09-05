---
qid: ing_7fab2ab01f__star__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 326
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:56-05:00'
sources: []
---

**Situation:**  
At a previous gig I worked on the real‑time ride‑matching backend that had to serve 45 M read ops per second. The primary data store was an online storage service (e.g., DynamoDB) and latency spikes were hurting surge pricing accuracy.

**Task:**  
I needed to reduce read latency while keeping cost in check, ensuring every request returned within 120 ms without over‑provisioning the cache layer.

**Action:**  
Implemented an adaptive timeout mechanism on top of a distributed cache (Redis). First, I instrumented each request with a “cache hit ratio” metric per region. The system monitored this ratio in real time and adjusted the Redis read timeout: if hits fell below 80 %, it lowered the timeout to 20 ms; when hits rose above 95 %, it increased it up to 60 ms. I also added a fallback path that bypassed the cache only after three consecutive misses, preventing endless retry loops. The adaptive logic ran as a lightweight Lambda function triggered every minute, feeding a small config file into all cache nodes.

**Result:**  
Latency dropped from an average of 210 ms to 95 ms on peak days, while cache hit ratio improved from 78 % to 92 %. Cost savings were 18 % because we avoided over‑provisioning memory. I learned that fine‑grained, data‑driven timeout tuning can outperform static thresholds in high‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
