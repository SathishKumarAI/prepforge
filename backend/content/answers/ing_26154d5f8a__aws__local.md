---
qid: ing_26154d5f8a__aws__local
question: 'Explain: you refresh um yeah i don''t know — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 524
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:27-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked with redesigning the real‑time rider–restaurant matching system for a food‑delivery startup that had just hit 2 M daily active users. The existing polling API caused >300 ms latency and frequent over‑subscriptions, driving user churn.

**Task (T)**  
Deliver an end‑to‑end architecture that:  
1) Keeps rider locations accurate within <10 m in real time,  
2) Scales to 5 M concurrent WebSocket connections,  
3) Reduces infrastructure cost by ≥30 %.

**Action (A)**  
- **Geo‑hashing**: I chose *S2 Geometry* to partition the Earth into hierarchical cells. Rider updates are published to an Amazon Kinesis Data Streams shard per cell; this reduces cross‑cell traffic and keeps each stream <1 GB/s.  
- **WebSockets**: Leveraged Amazon API Gateway WebSocket APIs with a Lambda authorizer for authentication, routing messages to AWS IoT Core MQTT topics that mirror the S2 cells. Subscribers receive only relevant updates.  
- **Caching & Backpressure**: Integrated Amazon ElastiCache Redis (cluster mode) as an in‑memory store of the last known rider position per cell; Lambda functions first query Redis before hitting Kinesis, cutting read latency to ~5 ms.  
- **Scalability & Availability**: Deployed across three AZs with auto‑scaling for Lambda and API Gateway. S3 static assets served via CloudFront for 99.999% availability.  
- **Cost Optimization**: By batching Kinesis records (max 1 MB) and using provisioned concurrency on Lambda, we cut compute spend by 32 % compared to the polling baseline.

**Result (R)**  
- Latency dropped from 350 ms to 45 ms; rider‑to‑restaurant match time improved by 70 %.  
- User churn fell 18 % within two weeks of launch.  
- Monthly ops cost decreased from $250k to $165k, a 34 % saving.

**Reflection**  
I owned the failure point where high‑frequency updates caused throttling; after adding Redis caching and adjusting shard count we eliminated backpressure. This experience reinforced my belief in *Dive Deep* and *Ownership*: obsess over metrics, iterate fast, and own every layer of the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
