---
qid: ing_f1f8d33392__aws__local
question: 'Explain: let''s say uh onboarding users uh or — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 519
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:08-05:00'
sources: []
---

**Situation (S)**  
When I joined DoorDash’s Growth team, we were tasked with improving the *on‑boarding flow* for new riders: they needed real‑time location feedback and a fast “next‑step” recommendation while their device pinged every 5 seconds.

**Task (T)**  
Design a system that (1) maps each rider to the nearest restaurant in sub‑100 ms latency, (2) scales to 10M concurrent users during peak hours, and (3) keeps operational costs under $200k/month.

**Action (A)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Geo‑hash index | **Amazon DynamoDB Global Tables** + **Geo Library** | Multi‑region replication for low read latency; hash key gives O(1) lookup. |
| Real‑time updates | **AWS IoT Core + MQTT** (WebSocket endpoint) | Built‑in WebSocket support, auto‑scaling, 1 ms handshake. |
| Matching engine | **Lambda@Edge** (CloudFront) + **ElastiCache Redis** | Edge functions reduce round‑trip; Redis holds hot proximity lists for 5 % of active users. |
| Analytics & retries | **Amazon Kinesis Data Streams** → **Glue** → **Redshift** | Capture event stream, batch transform, and query for SLA monitoring. |

**Result (R)**  
- Latency dropped from 350 ms to 95 ms (average) during a 3‑hour test window.  
- 99.9% of users received their first recommendation within 2 seconds.  
- Monthly cost was $185k, 8% below budget.  

**Reflection**  
I *owned* the trade‑off between DynamoDB read capacity and Redis cache hit rate; a mis‑estimated hot spot would have caused throttling. I *dived deep* into MQTT QoS levels to balance reliability vs latency. The key lesson: always expose a “fail‑fast” path (direct DynamoDB read) so that if the WebSocket layer goes down, users still see a fallback recommendation. This mindset aligns with **Customer Obsession** and **Ownership**, and it’s what bar‑raisers look for in an architect—deep technical choices coupled with measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
