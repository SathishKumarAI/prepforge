---
qid: ing_061ab8f54d__aws__local
question: 'Explain: same server and then from then on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 460
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:40-05:00'
sources: []
---

**Situation (S)**  
I was tasked with redesigning DoorDash’s real‑time rider‑customer matching layer so that a single server could handle 200k concurrent location streams without latency spikes.  

**Task (T)**  
Implement geo‑hashing to partition the city into tiles and use WebSockets for instant bidirectional updates, while keeping cost ≤ $5K/month and uptime ≥ 99.9%.

**Action (A)**  
1. **Geo‑hashing**: Adopted a 14‑bit quad‑key scheme (≈ 50 m² cells) stored in **Amazon DynamoDB Global Tables** for low‑latency reads across regions.  
2. **WebSockets**: Deployed **API Gateway WebSocket APIs** backed by **AWS Lambda@Edge** to route rider & customer events to the nearest edge location, reducing RTT < 20 ms.  
3. **Back‑pressure**: Implemented a sharded **Redis (ElastiCache)** queue per geo‑tile to buffer bursts; Lambda workers poll at 5 Hz.  
4. **Observability**: Integrated **CloudWatch Metrics & X-Ray** for end‑to‑end latency, triggering auto‑scaling of Lambda concurrency based on real‑time traffic.

**Result (R)**  
- Latency dropped from 350 ms to < 30 ms (90% reduction).  
- Throughput increased from 50k to 200k concurrent streams.  
- Monthly cost stayed at $4,800, 15% below budget.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Immediate, accurate rider‑customer matches improve delivery ETA by 12%.  
*Ownership & Dive Deep*: I drove the end‑to‑end solution, iterated on geo‑hash granularity, and tuned Lambda concurrency based on telemetry.

**Bar‑raiser takeaway**  
I owned every layer—from data model to observability—validated with hard metrics, and learned that over‑granular geo‑tiles can hurt scalability, so I chose the sweet spot empirically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
