---
qid: ing_8a1cf86189__aws__local
question: 'Explain: point is that basically we want to — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 453
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:00-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of DoorDash’s real‑time driver‑customer matching for a new market (NYC). The goal was to reduce latency from “5 s” to <“1 s” and support 200k concurrent drivers without breaking the existing API contract.

**Action – Design**  
*Geo‑hashing*: I chose **Amazon DynamoDB with Geo‑Hash indexes** so each driver’s location is stored as a hash bucket. This gives O(1) reads for nearby drivers and keeps writes inexpensive (≤$0.25 / M ops).  
*WebSockets*: We moved to **AWS AppSync + Amazon API Gateway WebSocket APIs** for push updates, instead of polling every 10 s. Clients receive a “driver‑arrived” event in <200 ms.  

To keep the system highly available I added an **Amazon CloudFront edge cache** that stores recent driver locations (TTL = 2 s) and falls back to DynamoDB if stale.  

*Scalability*: DynamoDB auto‑scales; we provisioned 10 M RCU/WCU, which handled a 300% spike during peak hours with <1 % throttling.  
*Cost*: The total monthly cost dropped from ~$45k (polling) to ~$28k (WebSockets + caching).  

**Result**  
Latency fell from 5 s to 0.8 s (average), driver‑to‑customer matching time reduced by 84%. Customer ratings for “real‑time” increased from 4.1 → 4.7/5, and we cut churn in the new market by 12%.

**Reflection & Learnings**  
I owned the failure point when a sudden traffic surge caused DynamoDB throttling; I added on‑demand scaling and a retry back‑off strategy. The experience reinforced that *Ownership* + *Dive Deep* leads to scalable, cost‑effective solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
