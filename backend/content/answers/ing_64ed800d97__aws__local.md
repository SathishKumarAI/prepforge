---
qid: ing_64ed800d97__aws__local
question: 'Explain: So if we try to make a — Database Design Tips | Choosing the Best
  Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 409
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:05-05:00'
sources: []
---

**Customer Obsession + Ownership**

*Situation:* In my last role I was tasked to build an **ML inference pipeline** for a real‑time recommendation engine that served 3 M active users daily. The key bottleneck was persisting feature vectors and model artefacts so the inference service could scale horizontally.

*Task:* Design a database layer that meets low latency, high throughput, and easy rollback of models without breaking live traffic.

*Action:*  
1. **Feature Store** – I chose **Amazon DynamoDB** for its single‑digit millisecond reads/write and global tables to geo‑replicate features to the inference region. With on‑demand capacity we capped cost at ~\$2 k/month while handling 10 k RPS.  
2. **Model Registry** – For versioned artefacts I used **Amazon S3 + Glue Data Catalog**; each model is a parquet file with a semantic tag (e.g., `model_v3`). This gives us ACID‑like consistency via S3’s eventual‑consistency guarantees and allows Athena queries for audit.  
3. **Cache Layer** – A small **ElastiCache Redis** cluster (2 AZ) stores hot feature vectors, reducing DynamoDB traffic by 70% during peak hours.

*Result:* The end‑to‑end inference latency dropped from 250 ms to 90 ms, and we increased daily active users by 15% without raising infra costs.  

*Reflection:* I learned that **“Dive Deep”** means testing each component under realistic load; a mis‑estimated DynamoDB provisioned throughput could have cost us \$30k in over‑provisioning. The bar‑raiser will note my ownership of the end‑to‑end pipeline, quantitative impact, and iterative learning from the first deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
