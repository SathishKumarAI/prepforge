---
qid: ing_c25c69cc36__aws__local
question: 'Explain: Replication — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 496
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:36-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science team at my previous company, we had to move from a single PostgreSQL instance that served both batch training and real‑time inference to a system that could handle **10 × the query volume** without breaking latency guarantees.

**Task (T)** – Design a replication‑driven architecture that scales reads for ML pipelines, keeps write consistency for model metadata, and remains cost‑effective.

**Action (A)** –  
1. **Read scalability:** Deployed **Amazon Aurora PostgreSQL** with *Aurora Replicas* spread across three AZs; each replica can serve 50 k RPS. Added a **DynamoDB cache layer** via Amazon DAX for hot keys, cutting read latency from 20 ms to <5 ms.  
2. **Write durability:** Leveraged Aurora’s *Global Database* to replicate writes to a secondary region, ensuring 99.999% availability and compliance with data residency policies.  
3. **Sharding for training data:** Moved large feature tables into **Amazon S3** and accessed via **AWS Glue** + **Athena**, while keeping model artifacts in **S3 Glacier Deep Archive** for cost savings.  
4. **Monitoring & Auto‑Scaling:** Instrumented CloudWatch metrics (RPS, latency, replica lag) and set up an EventBridge rule to spin up additional Aurora replicas during traffic spikes.

**Result (R)** – Achieved a **10× throughput increase**, reduced read latency by **70 %**, and cut operational costs by **35 %** while maintaining 99.9999 % availability for ML inference workloads.

---

*Leadership Principles highlighted:* **Ownership** (architected end‑to‑end solution), **Dive Deep** (tuned replica lag, cache hit rates), **Bias for Action** (prototyped in two weeks).  

*A bar‑raiser would note:* the candidate’s focus on measurable impact, depth of technical trade‑offs, and learning loop (e.g., adjusting replica count after analyzing CloudWatch data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
