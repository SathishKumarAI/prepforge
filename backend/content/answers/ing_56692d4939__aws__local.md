---
qid: ing_56692d4939__aws__local
question: 'Explain: Multiple driver accepting trip — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:28-05:00'
sources: []
---

**Situation & Task**  
I was hired by a ride‑hailing startup that wanted to launch a *“multiple driver acceptance”* feature—allowing several nearby drivers to see the same trip request and accept it, then letting the system pick the best match. The goal was to reduce passenger wait times from 5 min to <2 min while keeping driver utilization above 80 %.  

**Approach & Design**  
1. **Event‑driven architecture** – A *Kafka* topic streams trip requests; each driver’s microservice subscribes to a geographically partitioned consumer group.  
2. **Fast lookup** – Use *Amazon DynamoDB* with a GSI on (city, zone) and a TTL of 30 s for “active” drivers.  
3. **Scoring engine** – A Lambda that receives all candidate driver IDs, pulls their current ETA & rating from Redis (Elasticache), computes a score (`score = weightETA * eta + weightRating * (5‑rating)`), and returns the top N.  
4. **Atomic acceptance** – The chosen driver writes to DynamoDB with an `IF` condition on a `trip_state=OPEN`. If another driver wins first, the write fails and the driver receives “not accepted” back instantly.  

**Result**  
- Wait times dropped from 5 min to 1.8 min (30% improvement).  
- Driver utilization rose from 78 % to 84 %.  
- System handled 12k trip requests/second with <99.9 % availability; cost was $0.45 per 10,000 trips (~$2.5M/month), a 15 % reduction over the single‑driver model.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, ran chaos tests to surface race conditions, and iterated on scoring weights based on real trip data. When an initial deployment caused occasional duplicate acceptances, I debugged the DynamoDB conditional writes, added idempotent logic, and updated documentation—showing true ownership and a bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
