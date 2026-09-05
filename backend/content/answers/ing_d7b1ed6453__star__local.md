---
qid: ing_d7b1ed6453__star__local
question: 'Explain: it was like one example was just — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 358
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:07-05:00'
sources: []
---

**Situation** – In a mock Amazon Systems Design interview, I was asked to build a scalable parking‑garage reservation platform for a city with 10 000 daily drivers and peak traffic of 15 000 vehicles. The client needed real‑time availability, dynamic pricing, and mobile checkout.

**Task** – My goal was to design an architecture that supports at least 5× the peak load, guarantees 99.9% uptime, and keeps latency under 200 ms for reservation requests.

**Action** – I started by decomposing the system into services: Gateway API (AWS API Gateway + Lambda), Reservation Service, Pricing Engine, Inventory Service, and Mobile SDK.  
For inventory, I used a sharded DynamoDB table keyed on lot‑ID + time slot, with conditional writes to avoid double booking. The pricing engine ran as an AWS Fargate container that recalculated rates every 5 minutes using a simple demand‑elasticity model (price = base × (1 + load/threshold)). I added a Redis cache in front of DynamoDB for hot slots and implemented optimistic locking via version numbers to handle race conditions. Finally, I set up CloudWatch alarms and an auto‑scaling policy that spun up additional Lambda instances when queue depth exceeded 100 ms.

**Result** – The prototype handled 25 000 concurrent requests with <180 ms latency, hit a 99.95% success rate in load testing, and reduced booking errors by 97%. I learned the importance of separating concerns, using conditional writes for consistency, and designing for elasticity from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
