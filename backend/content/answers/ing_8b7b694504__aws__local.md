---
qid: ing_8b7b694504__aws__local
question: 'Explain: customer as opposed to you know having — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 457
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:20-05:00'
sources: []
---

**Situation / Task** – I was tasked to redesign DoorDash’s real‑time rider–customer matching pipeline so that drivers could see nearby orders within 2 s and customers received instant updates on driver ETA. The goal was a 30 % reduction in “first‑look” latency while keeping costs < 15 % of the legacy system.

**Action – Design**  
1. **Geo‑hashing**: Partition the service area into 100 m² tiles using H3. Store `order_id → geo_hash` in DynamoDB (partition key = tile).  
2. **WebSockets** – Use API Gateway + Lambda Authorizer to hand out secure JWTs; each driver’s app opens a persistent WebSocket that receives push messages for orders whose hash falls within the driver’s current tile and its 8 neighbors.  
3. **Event‑driven updates** – Order creation triggers an EventBridge rule → Kinesis Data Streams → Lambda that writes to DynamoDB and pushes a message to the relevant drivers via API Gateway’s `PostToConnection`.  

**Result** – Latency dropped from 1.4 s to 0.7 s (45 % improvement). Driver‑to‑order matches increased by 22 %, leading to a 12 % lift in completed rides. Cost fell from $120k/month to $98k/month due to the serverless, pay‑per‑message model.

**Learning & Ownership** – I owned the entire feature loop: from spec to monitoring with CloudWatch metrics and A/B testing. When a spike in “ghost” orders appeared, I traced back to an incorrect tile boundary; after adjusting H3 resolution, we eliminated false positives. This reinforced that *Ownership* + *Dive Deep* drive sustainable product gains.

**Leadership Principles Anchored**  
- **Customer Obsession** – Faster ETA updates improved rider satisfaction scores by 18 %.  
- **Deliver Results** – Quantified latency and cost reductions delivered measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
