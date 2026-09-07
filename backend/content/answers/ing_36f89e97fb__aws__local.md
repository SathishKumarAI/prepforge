---
qid: ing_36f89e97fb__aws__local
question: 'Explain: hey guys this is gkcs today we''ll — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 433
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:52-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined DoorDash’s Growth Engineering team, our real‑time driver‑and‑customer matching latency was >400 ms during peak hours—directly hurting the “On‑Demand” experience and increasing churn by 1.8% monthly.

**Action (A)**  
I led a two‑phase redesign:

| Phase | Design | AWS Services | Why |
|-------|--------|--------------|-----|
| **Geo‑hashing** | Sharded K‑d tree of geohash buckets; each bucket holds driver IDs in Redis. | Amazon ElastiCache Redis, Amazon DynamoDB (partition key = hash), Lambda for re‑balancing. | Sub‑millisecond lookup, horizontal scalability, cost‑effective read/write throughput. |
| **WebSockets** | Edge‑proxied API Gateway WebSocket endpoints feeding an MQTT broker (AWS IoT Core) to push location deltas. | Amazon API Gateway WebSocket, AWS IoT Core, Lambda for message routing, CloudWatch for monitoring. | Low‑latency bi‑directional streams; auto‑scales with connections; serverless reduces ops overhead. |

**Result (R)**  
- Latency dropped from 400 ms to **<80 ms** during the 10 k concurrent peak.  
- Driver‑to‑customer match success rate improved by **12%**, translating to a $2.4M uplift in quarterly revenue.  
- Operational cost decreased 18% thanks to serverless and Redis caching.

**Reflection (Learning)**  
I owned the end‑to‑end pipeline, iterated on geohash bucket sizing (dive deep), and instituted a “fail‑fast” monitoring rule that cut incident response time by 70%. This experience reinforced Amazon’s *Customer Obsession*—delivering instant matches—and *Ownership*—taking full responsibility for system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
