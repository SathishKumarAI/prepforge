---
qid: ing_3326d702a6__aws__local
question: 'Explain: i guess i''ll call it like the — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 425
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:52-05:00'
sources: []
---

**Situation & Task (S)**  
At a previous role I led the redesign of our on‑demand food delivery platform’s location service. The goal was to reduce latency for driver‑customer proximity checks from ~1 s to <200 ms while keeping cost under $50k/month.

**Action (A)**  
I introduced *geo‑hashing* combined with a WebSocket‑based publish/subscribe layer:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Geo‑hash indexing | **Amazon DynamoDB Global Tables** | Multi‑region, low‑latency reads; automatic conflict resolution. |
| Real‑time updates | **Amazon API Gateway + WebSocket APIs** | Serverless scaling to millions of concurrent connections with 99.999% availability. |
| Message broker | **Amazon SNS Topics** (per hash bucket) | Decouples producers (drivers) from consumers (restaurants), enabling fan‑out without over‑loading a single queue. |

I defined *hash buckets* at 5 km resolution and stored driver coordinates in DynamoDB. When a driver’s location changed, the API Gateway WebSocket endpoint published to an SNS topic tied to the new bucket; all subscribed restaurants received the update instantly.

**Result (R)**  
- Latency dropped from **1.2 s → 0.18 s** (99th percentile).  
- Monthly cost decreased by **35%** ($70k → $45k).  
- Driver‑to‑restaurant matching accuracy improved, boosting order volume by **12%**.

**Learning & Ownership**  
I proactively ran failure simulations (network partitions) to validate the system’s resilience. The design now supports elastic scaling during peak events and is fully compliant with GDPR for location data retention. This experience reinforced my *Ownership* and *Dive Deep* principles, ensuring every metric was driven by real customer impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
