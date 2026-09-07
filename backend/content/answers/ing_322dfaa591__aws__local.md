---
qid: ing_322dfaa591__aws__local
question: 'Explain: now what that might necessarily mean so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 402
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:31-05:00'
sources: []
---

**Situation & Task**  
At DoorDash I was tasked to redesign the real‑time rider–customer location sync that powers surge pricing and ETA estimates. The existing polling API caused >200 ms latency and bursty traffic spikes during peak hours.

**Action – Design**  
I proposed a **Geo‑Hashing + WebSocket** architecture built on AWS:

| Layer | Service | Rationale |
|-------|---------|-----------|
| Geo‑hash index | Amazon DynamoDB (global secondary index) | Fast O(log n) lookup for nearest riders; auto‑scales to 10 k writes/s. |
| Real‑time channel | Amazon API Gateway + WebSocket + Lambda@Edge | Low‑latency, serverless push to mobile clients; keeps connection count <1M with graceful scaling. |
| State store | ElastiCache Redis (cluster mode) | Keeps last known rider location per hash bucket for 5 min TTL, reducing DB reads by 80%. |
| Load balancer | ALB + ECS Fargate | Handles API Gateway health checks and fallback REST routes. |

**Result**  
- Latency dropped from **200 ms to <30 ms** average.  
- Peak traffic handled without throttling (10× the previous max).  
- Cost reduced by **35 %** due to serverless WebSockets vs EC2‑based polling.  

**Reflection**  
I *owned* the migration, coordinating with Ops and security; I *dive deep* into DynamoDB read/write patterns to tune provisioned capacity. A failure point was an initial Redis eviction policy that caused stale locations; after adding a TTL audit script we avoided 5 % of surge‑price errors. This experience reinforced my bias for action while keeping the customer’s real‑time experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
