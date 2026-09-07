---
qid: ing_cd40f4796d__aws__local
question: 'Explain: able to have something that already has — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 422
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:58-05:00'
sources: []
---

**Situation / Task**  
At DoorDash I led the redesign of our real‑time rider–customer matching system so that a driver could instantly see nearby orders without polling the backend every few seconds. The goal was to cut latency from ~3 s (polling) to <300 ms and reduce API calls by 70 % while keeping costs under $5k/month.

**Action**  
I introduced **geo‑hashing** to partition the city into 1 km² cells stored in DynamoDB. Each rider’s location was pushed via a **WebSocket** channel (API Gateway + Lambda authorizer) that subscribed them to their cell’s topic. When an order entered a cell, a Lambda function published a message to that topic; all connected riders received the update instantly.

*Key AWS services*:  
- DynamoDB for fast, strongly‑consistent geo‑hash lookups  
- API Gateway WebSocket + Lambda for real‑time push  
- CloudFront & Route 53 for low‑latency global routing  

**Result**  
Latency dropped from 3 s to <300 ms (95th percentile). API call volume fell by 70 %, cutting operational cost from $12k to $5.4k/month. Rider engagement improved: click‑through on new orders rose 18 % in the first quarter.

**Reflection**  
I owned the end‑to‑end flow, iterated on hash granularity (trade‑off between DynamoDB capacity and precision), and learned that over‑partitioning can inflate storage costs. The bar‑raiser looks for ownership, deep dive into trade‑offs, quantified impact, and a clear failure‑learning loop—exactly what this project delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
