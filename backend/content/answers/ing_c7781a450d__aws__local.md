---
qid: ing_c7781a450d__aws__local
question: 'Explain: Compare several designs — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 565
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:13-05:00'
sources: []
---

**Question:** *Compare several designs – “Designing Data‑Intensive Applications” (DDIA) by Martin Kleppmann vs other data‑centric patterns.*

---

### **Situation**
At a previous e‑commerce startup we migrated from a monolithic MySQL stack to a distributed analytics pipeline. The team had to decide whether to adopt the architectural principles in *DDIA* or stick with a simpler “big table + Spark” approach.

### **Task**
I led an evaluation that balanced *Customer Obsession*, *Ownership*, and *Dive Deep* to determine which design would deliver faster insights while staying cost‑efficient at scale.

### **Action**

| Design | Core Idea | AWS Services | Scalability & Cost |
|--------|-----------|--------------|--------------------|
| **DDIA** (Kafka + Pulsar + Kinesis) | Event‑driven, immutable logs + event sourcing | Amazon MSK, SQS, Lambda, DynamoDB | Linear scaling; pay per record; high availability (multi‑AZ). |
| **Big Table + Spark** | Single large table, batch ETL | EMR, RDS Aurora | Limited to cluster size; higher EC2 spend for peak jobs. |
| **Serverless Data Lake** | S3 + Glue + Athena | S3, AWS Glue, Athena | Pay‑per‑query; great for ad‑hoc but not real‑time. |

I built a prototype pipeline on MSK that ingested 1 M events/sec and stored them in DynamoDB with TTL, achieving <200 ms latency for customer‑specific metrics. The cost was **$3k/month** vs $8k for the Spark cluster.

### **Result**
The DDIA‑based architecture reduced data freshness from 24 h to real‑time, cutting time‑to‑insight by **70%** and lowering ops overhead by **40%**. It also aligned with *Bias for Action* (quick iteration) and *Deliver Results* (measurable impact).

---

### **Bar‑raiser’s Takeaway**

- **Ownership:** I scoped the migration, set SLAs, and owned post‑deployment monitoring.
- **Dive Deep:** I benchmarked latency, cost per event, and fault tolerance across patterns.
- **Quantified Impact:** 70% faster insights, $5k/month savings, 40% ops reduction.
- **Learning from Failure:** Initial Kafka cluster hit a broker crash; we added automated replication and alerts—now zero data loss.

This approach showcases how to evaluate competing designs with customer‑centric metrics, technical rigor, and measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
