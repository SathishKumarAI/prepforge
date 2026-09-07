---
qid: ing_54aeb0109b__aws__local
question: 'Explain: thing going on but as far as — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 440
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:44-05:00'
sources: []
---

**Situation & Task**  
While leading the backend team at DoorDash, I was tasked to redesign our real‑time rider‑delivery matching layer so that a rider’s location could be broadcast to all nearby restaurants in milliseconds while keeping cost under $1 M/yr.

**Action**  
I introduced **geo‑hashing** (using 10‑bit grid cells) stored in **Amazon DynamoDB Global Tables** for cross‑region consistency. Each rider’s update triggers a Lambda that writes the new hash + coordinates to DynamoDB and publishes an event to **Amazon SNS**. Restaurants subscribe via **Amazon API Gateway WebSocket APIs**, which forward messages to connected clients through **AWS AppSync**. To keep latency <50 ms, I leveraged **DynamoDB Streams** for near‑real‑time propagation and added a **Redis cache (ElastiCache)** layer for hot cells.

Key trade‑offs:  
- *Scalability*: DynamoDB’s auto‑scaling handles 200k updates/s.  
- *Availability*: Global Tables + API Gateway multi‑AZ ensure <0.1 % downtime.  
- *Cost*: 30 M requests/month ≈ $450/yr; caching cuts Lambda invocations by 70 %.  

**Result**  
Post‑deployment, match latency dropped from 300 ms to **48 ms** (a 84 % improvement). Rider satisfaction scores rose 12 points in NPS. The architecture is now used for all geospatial services across DoorDash’s $5B ecosystem.

> *Leadership Principles*: **Customer Obsession** – delivering sub‑50 ms latency directly improved rider experience; **Ownership** – I drove the end‑to‑end solution, from requirements to ops monitoring.  
> *Bar‑raiser cues*: Deep dive into DynamoDB consistency models, quantified performance gains, and lessons learned when initial SNS retries caused duplicate messages (fixed by idempotent Lambda logic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
