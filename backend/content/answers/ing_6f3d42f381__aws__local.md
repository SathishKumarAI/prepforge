---
qid: ing_6f3d42f381__aws__local
question: 'Explain: wonder you''re working thanks i gotta i — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 489
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:36:56-05:00'
sources: []
---

**Situation & Task**  
At DoorDash I was asked to build a real‑time rider‑matching service that could scale to 10 M concurrent users in the US while keeping latency under 300 ms. The core challenge: deliver accurate, low‑latency location data to drivers and customers over WebSockets.

**Action**  
I designed a **geo‑hashing + WebSocket** architecture:

| Component | AWS Service | Reason |
|-----------|-------------|--------|
| Geospatial indexing | DynamoDB with Geo Library (sharding on 0.01° cells) | Fast read/write, auto‑scaling |
| Real‑time updates | API Gateway + Lambda + Amazon MQ (STOMP over WebSocket) | Serverless scaling, low cost |
| Event stream | Kinesis Data Streams → Lambda → DynamoDB | Guarantees ordering, replay for failure recovery |
| Edge caching | CloudFront | Reduces RTT to 50 ms globally |

*Dive deep*: I profiled the Lambda payload and discovered that serializing the entire rider object added 15 % latency. Switching to a binary protocol (Protocol Buffers) cut serialization time from 4 ms to 0.8 ms, improving overall latency by 30 %.

**Result**  
The system handled 12 M concurrent WebSocket connections during peak hours with 99.97 % availability and an average end‑to‑end latency of **210 ms**. Cost per active user dropped from $0.15 to $0.09/month (≈40 % savings).  

**Learnings & Ownership**  
I owned the entire stack, iterated on metrics, and documented a fallback path using SQS for degraded mode. The bar‑raiser looked for my ownership of failure modes, deep dive into serialization bottlenecks, quantified impact, and how I turned a single latency issue into a 30 % system‑wide improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
