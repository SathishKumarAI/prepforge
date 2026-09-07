---
qid: ing_cc600860b0__aws__local
question: 'Explain: Read Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:57-05:00'
sources: []
---

**Read‑Path – System Design Cheat Sheet**

> *Customer Obsession | Ownership | Dive Deep*

### Situation  
I led a feature to deliver real‑time product recommendations for an e‑commerce platform with 5 M active users and 200 k requests/sec.

### Task  
Design the read path so that each request returns a personalized list within **100 ms** while keeping cost under $0.05 per thousand requests.

### Action (Architecture)  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| API Gateway + Lambda@Edge | Low‑latency front door, auto‑scales to 1 M RPS | Edge caching reduces origin load |
| GlobalCache (Redis‑Cluster on ElastiCache) | Stores pre‑computed user vectors and top‑N items | Sub‑10 ms lookup; sharded by `user_id` |
| DynamoDB (partition key = `user_id`) | Persist raw interaction logs for incremental learning | Single‑write throughput 200 k WPS, TTL auto‑purge |
| SageMaker Endpoint (Batch Transform) | Generates per‑user embeddings every 12 h | Batch reduces inference cost vs. real‑time |
| CloudWatch + X-Ray | Continuous monitoring & tracing | Enables rapid root‑cause analysis |

**Scalability & Availability** – GlobalCache spans 3 AZs; DynamoDB auto‑scales and offers 99.999% durability. Failover to a read replica is <5 ms.

**Cost** – 200 k RPS × $0.00005 = ~$10/day for Lambda + ~30 $/day for ElastiCache cluster. Batch inference amortizes SageMaker cost to <$1/day.

### Result  
Latency dropped from 350 ms to **82 ms** (75% reduction). Throughput increased by 4×, and cost per request fell to $0.03, beating the target by 40%.  

*Learning*: Early reliance on a single Redis shard caused hotspots; shifting to key‑hashing solved it. This iteration taught me to validate sharding strategy under load before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
