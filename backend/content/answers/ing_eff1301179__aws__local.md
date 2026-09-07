---
qid: ing_eff1301179__aws__local
question: 'Explain: a mile and uh in that time — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 421
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:34-05:00'
sources: []
---

**Situation / Task**  
When DoorDash expanded into a new city, the mobile app needed near‑real‑time rider/driver location updates while keeping bandwidth low and cost under control. I led the redesign of our geo‑hashing + WebSocket pipeline.

**Action – Technical Design**  
1. **Geo‑Hash Partitioning** – Split the city into 0.5 km² cells using H3 hexagons; each cell maps to an SQS queue.  
2. **Lambda “Locator”** – Every location ping triggers a Lambda that writes the point to DynamoDB (partition key = driver ID, sort key = timestamp) and pushes the hashed cell to its queue.  
3. **WebSocket API Gateway + Kinesis Data Streams** – Clients subscribe per city; when a queue receives a new ping, a consumer stream records it in Kinesis, which triggers an AWS IoT Core rule that forwards updates via WebSockets only to subscribers whose last known cell differs.  
4. **Cost/Scale** – 10 k drivers × 5 updates/min → ~3 M messages/day; DynamoDB writes cost <$200/month; WebSocket connections scale elastically through API Gateway.

**Result**  
Latency from ping to user update dropped from 2.8 s to <400 ms (95th percentile). Driver‑to‑customer match time fell by **32%**, boosting order throughput by 18% in the first quarter post‑launch.

**Reflection – Bar‑Raiser Lens**  
I owned the entire flow, diving deep into latency profiles and cost curves. The trade‑off of an extra Lambda step was justified by the 2× reduction in websocket traffic. After a brief spike in out‑of‑band messages, I added deduplication logic—learning that “bias for action” must be coupled with iterative safety nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
