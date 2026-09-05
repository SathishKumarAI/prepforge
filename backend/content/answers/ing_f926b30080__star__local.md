---
qid: ing_f926b30080__star__local
question: 'Explain: Distributed Rate limiter implementation for an API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 343
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:52-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new public REST API that was suddenly hit with traffic spikes during product launches. The rate‑limit config in our single‑node Nginx setup caused legitimate requests to be throttled, driving up support tickets and SLA breaches.

**Task:**  
Design a distributed, fault‑tolerant rate limiter that could enforce per‑client quotas (e.g., 10 000 req/hr) across all API gateways without becoming a bottleneck or single point of failure.

**Action:**  
I chose Redis as the shared state store because it offers low‑latency atomic operations and key expiration. Each gateway instance performed an `INCRBY` on a per‑client key with an expiry of one hour, then checked the counter against the quota. To avoid “thundering herd” during key creation I used Lua scripting to atomically initialize the counter if it didn’t exist. For high availability I deployed Redis in a 3‑node cluster with replication and enabled Sentinel for automatic failover. I also added a circuit‑breaker layer: if Redis was unreachable, requests were temporarily queued in an in‑memory buffer with back‑off, ensuring graceful degradation.

**Result:**  
After rollout we saw a 60 % drop in rate‑limit errors, SLA compliance improved from 92 % to 99.7 %, and the system handled a peak of 150 k requests per minute without any latency impact. I learned that coupling atomic counter logic with robust failover and graceful degradation is key for production‑grade distributed throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
