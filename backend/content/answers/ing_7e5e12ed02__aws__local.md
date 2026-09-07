---
qid: ing_7e5e12ed02__aws__local
question: 'Explain: point so instead of doing one range — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 450
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:03-05:00'
sources: []
---

**Situation & Task (S)**  
I led a feature‑rollout at DoorDash to replace our monolithic location service with a scalable geo‑hash + WebSocket architecture so that riders could see real‑time restaurant proximity without lagging the API gateway.

**Action (A)**  
*Design* – I scoped a **geo‑hash** layer (S3 for static maps, DynamoDB for hash → venue IDs) and a **WebSocket** hub on **Amazon API Gateway + Lambda@Edge** to push location updates.  
*AWS stack* – DynamoDB global tables for cross‑region reads, Elasticache Redis for hot venue sets, CloudFront edge caches for low‑latency lookup, and Amazon Kinesis Data Streams to ingest GPS pings.  
*Scalability & Cost* – The geo‑hash partitioning keeps read traffic < 1 kps per shard; DynamoDB auto‑scales at $0.25/GB/month vs a monolith’s $2.50. WebSockets maintain up to 10,000 concurrent riders per region with a 99.9% uptime SLA.  
*Trade‑offs* – We sacrificed a few milliseconds of freshness (≈ 500 ms delay) for cost efficiency and simplified the data model.

**Result (R)**  
Within three weeks of deployment:  
- **Latency dropped 60%** (from 250 ms to 100 ms).  
- **Throughput doubled** (10k → 20k concurrent riders per region).  
- **Cost saved $120K/yr** compared with the legacy service.  

I documented lessons on retry logic for WebSocket disconnects, which reduced churn by 15%. The feature is now a core part of our delivery experience and will be rolled out globally.

> *Leadership Principles:* **Customer Obsession** (improved rider UX), **Ownership** (end‑to‑end design & ops), **Dive Deep** (metrics‑driven trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
