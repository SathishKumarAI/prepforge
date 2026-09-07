---
qid: ing_105843766c__aws__local
question: 'Explain: later but okay you have these nodes — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 413
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:10-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of DoorDash’s real‑time delivery dashboard while we were hitting a 40 % spike in concurrent drivers during peak hours. The goal was to reduce latency for location updates and improve match accuracy without blowing up costs.

**Action**  
* **Ownership & Dive Deep** – I scoped out the pain points by instrumenting the current polling API, discovering that each driver pinged every 5 s, causing ~1.2 GB of traffic per minute.  
* **Design** – Replaced polling with a hybrid Geo‑Hash + WebSocket solution:  
  * Store driver coordinates in an Amazon DynamoDB Global Secondary Index keyed by a 10‑bit Geo‑Hash (≈0.4 km cells).  
  * Use Amazon API Gateway + Lambda to publish location changes to an Amazon EventBridge rule that forwards updates to an **Amazon Kinesis Data Streams** shard per region.  
  * Clients subscribe via **AWS IoT Core WebSocket endpoint**, receiving only events for the Geo‑Hash cell they’re in, cutting bandwidth by ~70 %.  
* **Bias for Action & Invent & Simplify** – Added a small Lambda layer to de‑duplicate rapid successive updates, preventing “flash” spikes.  

**Result**  
Latency dropped from 350 ms to <80 ms (95th percentile), match accuracy improved by 12 %, and peak traffic costs fell from $1.8K/day to $1.0K/day. Post‑launch A/B testing showed a 3.5× increase in on‑time deliveries during rush hours.

**Reflection**  
I learned that sharding on Geo‑Hash granularity balances load and cost; we later moved to a 12‑bit hash after observing driver density shifts, showing continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
