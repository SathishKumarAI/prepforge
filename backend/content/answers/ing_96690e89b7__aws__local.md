---
qid: ing_96690e89b7__aws__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 472
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:52-05:00'
sources: []
---

**Situation** – At my previous role I led the launch of a recommendation engine that served 8 M users daily. The model was trained on a nightly batch in SageMaker and needed low‑latency inference for real‑time personalization.

**Task** – Design a read‑only tier that scales to millions of concurrent requests while keeping cost under $200k/month, ensuring 99.9% availability.

**Action** –  
1. **Data layer**: Store the model’s feature store in Amazon DynamoDB (global tables for multi‑AZ). Use **DynamoDB Streams + Lambda** to push updates into an **Amazon ElastiCache Redis** cluster (cluster mode enabled, 12 shards) that acts as a read replica cache.  
2. **Inference layer**: Deploy the trained model as a **SageMaker endpoint** with a *multi‑model* architecture; each shard of Redis contains a subset of feature vectors, reducing payload size by 70%.  
3. **Scaling & Availability** – Auto‑scaling on CloudWatch metrics (CPU > 60% triggers new shards). Use **AWS Global Accelerator** for geo‑latency and failover across regions.  
4. **Cost control** – Spot Instances for the cache nodes, reserved instances for SageMaker endpoints; data transfer between DynamoDB and ElastiCache is intra‑region, keeping egress costs < $10k/month.

**Result** – Latency dropped from 350 ms to 45 ms (90% reduction), throughput increased by 4×, and we stayed 12% under budget. The architecture was later adopted company‑wide for other ML services.

> **Bar‑raiser note:** I demonstrated *Ownership* by owning the full pipeline, *Dive Deep* into caching trade‑offs, quantified impact with real numbers, and learned from a failed initial design that used RDS read replicas (which suffered 3× higher latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
