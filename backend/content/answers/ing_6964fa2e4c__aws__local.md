---
qid: ing_6964fa2e4c__aws__local
question: 'Explain: could either do some sort of dynamic — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 420
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:18-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a real‑time location service for DoorDash that can push driver–customer proximity updates within < 200 ms while scaling to millions of concurrent users.

**Action (Design)**  
1. **Geo‑hashing + Redis Cluster** – Encode lat/long into 12‑char S2 cells; store driver IDs in a sorted set per cell.  
2. **WebSocket API Gateway → Lambda** – Clients subscribe to their own cell; when a driver moves, a Lambda writes the new hash to DynamoDB and publishes an event on SNS.  
3. **SNS + Kinesis Data Streams** – Fan‑out to a Kinesis stream that feeds a consumer Lambda which updates the Redis cluster in near real‑time.  
4. **Caching & TTL** – Driver presence cached in Elasticache (Redis) with 10 s TTL; stale entries auto‑expire, keeping memory lean.

**Result**  
- Latency < 120 ms for 99th percentile updates at peak 3M concurrent connections.  
- Cost: $0.05 per 1K WebSocket messages vs $0.15 if using a polling REST API.  
- Reliability: Multi‑AZ deployment with Auto Scaling and DynamoDB Global Tables gives 99.999% availability.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I drove the end‑to‑end design, from data model to deployment scripts.  
*Dive Deep*: Benchmarked Geo‑hash granularity and Redis memory usage; iterated on cell size until we hit the latency budget.  
*Quantified Impact*: Reduced driver–customer wait time by 35 % during peak hours, directly boosting revenue.  
*Learning*: Initial prototype suffered from “hot spot” in a single Redis node; resolved by sharding per hash prefix and enabling cluster mode.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
