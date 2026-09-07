---
qid: ing_69ec1b0d00__aws__local
question: 'Explain: Database Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 579
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:43-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a customer‑facing recommendation engine that stored millions of user–item interactions in a single relational tier. The existing MySQL cluster hit 400 TPS with 3 s latency during peak hours and had a 99.9 % SLA. Our goal: **double throughput, halve latency, and reduce cost by 30 %** while keeping data consistency for real‑time ML inference.

**Action (Technical Design)**  
1. **Sharding + Aurora Serverless v2** – horizontally split the interaction table across 8 shards based on user hash. Each shard runs in an Aurora PostgreSQL cluster with auto‑scaling to 0–4 w/ capacity, giving us linear throughput and instant failover.  
2. **Read Replicas & DAX Cache** – 12 global read replicas (one per region) paired with DynamoDB Accelerator for sub‑50 ms cache of hot items.  
3. **Event‑driven ETL to S3 + Athena** – every write emits a Kafka topic; Lambda aggregates batched updates into Parquet on S3, enabling cost‑effective analytics for ML model training.  
4. **Circuit Breaker & Back‑off in SDK** – ensures graceful degradation if a shard is temporarily saturated.

**Result (Data‑driven Impact)**  
- Throughput rose to 1 200 TPS; latency dropped from 3 s to 350 ms (90 % improvement).  
- Cost fell by **32 %** due to serverless scaling and S3 storage.  
- ML model accuracy improved by 4 % because of fresher training data.

**Learning & Ownership**  
I took full ownership, performed a deep dive into query plans, and iterated the shard key after profiling cold starts. Post‑deployment A/B tests validated that our trade‑off between consistency (using read‑committed isolation) and performance was acceptable for recommendation latency requirements.

> **Leadership Principles Highlighted**: *Customer Obsession* – delivering instant recommendations; *Ownership* – end‑to‑end redesign; *Dive Deep* – profiling and shard key tuning; *Bias for Action* – rapid iteration with Lambda.  

**Bar‑raiser cues I’d listen for**  
- Evidence of ownership (who drove the decision, risk mitigation).  
- Depth: query plan analysis, latency breakdown.  
- Quantified impact: metrics before/after.  
- Learning from failure: handling shard hotspots and eventual consistency trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
