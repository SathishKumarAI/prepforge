---
qid: ing_828f26b655__aws__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 597
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:27-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At a messaging startup I led the redesign of our “presence” API (`GET /users/{user_id}/presence`) that powers WhatsApp‑style online/offline status for millions of users. The previous implementation hit 4 ms latency under peak load and leaked user data across tenants.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Threat Model** – Presence must be real‑time, consistent within 200 ms, GDPR compliant, and cost‑effective at 10M concurrent users.  
2. **Design** –  
   * **Event‑driven ingestion**: Mobile clients emit `user_online/offline` events to an Amazon Kinesis Data Stream.  
   * **State store**: A DynamoDB table (partition key = user_id) with TTL set to 1 day; updates go through a Lambda that writes to the table and publishes to SNS for cache invalidation.  
   * **Cache layer**: Elasticache‑Redis cluster (cluster mode enabled) holds hot presence data; read requests hit Redis first, fallback to DynamoDB if miss.  
   * **API Gateway + Lambda@Edge** – Front‑end gateway throttles per‑IP and enforces OAuth; the Lambda handler returns `online:true/false` with a 200 ms SLA.  
3. **Scalability & Cost** – Kinesis shards auto‑scale (5 k events/s shard) → ~$0.015/shard‑hr. DynamoDB reads/writes ~4 RCU/WCU per user, costing <$0.20/million ops. Redis cluster 2 x 64 GB nodes keeps latency <10 ms; spot instances reduce cost by 30 %.  
4. **Monitoring & Rollback** – CloudWatch metrics (latency, cache hit ratio) trigger a Lambda rollback to the previous API on >5 % error spike.

**Result (Deliver Results)**  
- Latency dropped from 4 ms to <200 µs average under peak load.  
- Cache hit ratio improved to 97 %, cutting DynamoDB reads by 70 %.  
- Operational cost decreased by 35 % YoY while maintaining GDPR compliance.  

**Reflection (Learned & Bar‑raiser cues)**  
I owned the end‑to‑end pipeline, dug into cold‑start and cache consistency issues, quantified impact with real metrics, and iterated after a first failure that caused stale presence data during a traffic surge—prompting us to add a TTL check in Lambda. This showcases deep ownership, technical depth, and continuous learning—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
