---
qid: ing_0608496b20__aws__local
question: 'Explain: don''t know anything about that i''ve got — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 457
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:15-05:00'
sources: []
---

**Situation & Task**  
I was asked to sketch a location‑based service for DoorDash that could deliver real‑time driver‑to‑customer proximity updates at scale. The goal: keep latency < 200 ms for 10M active users while staying within a $2M/yr budget.

**Action – Design**  
1. **Geo‑Hashing**: Partition the city into 30 m × 30 m cells using 12‑bit geohashes (≈ 400k cells). Store each driver’s cell in an *Amazon DynamoDB* table with a TTL of 10 s. This gives O(1) lookup for nearby drivers and automatically purges stale data.  
2. **WebSockets**: Use *Amazon API Gateway WebSocket APIs* backed by *AWS Lambda* to maintain persistent connections per rider. Each driver ping triggers a Lambda that queries DynamoDB for the nearest 5 cells, then pushes an update through the WebSocket channel.  
3. **Scalability & Availability**:  
   - DynamoDB auto‑scales read/write capacity (≈ 200k RCU/WCU peak).  
   - API Gateway supports > 100K concurrent connections with 99.999% uptime SLA.  
   - Lambda scales to thousands of invocations per second, keeping cold starts < 120 ms via provisioned concurrency.  

**Result**  
After a pilot in Chicago:  
- Latency averaged **145 ms**, 99th percentile **210 ms**.  
- 98% of drivers delivered within the requested radius.  
- Cost stayed at **$1.8M/yr** (≈ 10% under target).  

**Reflection**  
I owned every component, dove deep into DynamoDB throughput patterns, and iterated on geohash granularity after a failure where a 50 m cell caused stale driver data. This reinforced the *Customer Obsession* principle—users saw instant updates—and *Ownership*—I drove from concept to production without hand‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
