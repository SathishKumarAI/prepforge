---
qid: ing_ddc2fa75fd__aws__local
question: 'Explain: Cassandra vs. MongoDB: Use Cases — Cassandra Vs MongoDB Comparison
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 457
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:32-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a migration of the real‑time analytics pipeline from MongoDB to Cassandra for a global e‑commerce platform that served 3 M active users daily. The goal was to reduce query latency by 40 % and increase write throughput while keeping operational costs under $200K/month.

**Action**  
- **Customer Obsession & Ownership:** I first mapped the customer journey—each click, cart update, and inventory change must be reflected in <10 ms.  
- **Dive Deep:** I benchmarked both stores on a 4‑node cluster using YCSB workloads B (read heavy) and C (write heavy). Cassandra delivered 150 k writes/sec with 8 ms latency; MongoDB capped at 30 k writes/sec with 25 ms latency.  
- **Bias for Action:** I designed a schema in Cassandra using wide rows and partition keys on `user_id` + `region`. For Mongo, the document model would have required sharding and secondary indexes that cost >$50K/month.  
- **AWS Services:** Deployed Cassandra via Amazon Keyspaces (managed) to reduce admin overhead; used S3 for backups and CloudWatch for metrics.  

**Result**  
- 70 % reduction in write latency, 45 % increase in throughput.  
- Cost fell from $350K/month (MongoDB on EC2 + Ops) to $180K/month (Keyspaces + S3).  
- User satisfaction score rose by 12 points (CSAT).

**Bar‑raiser takeaways**  
- Demonstrated **Ownership** by owning the full migration cycle.  
- Showed **Depth** through concrete YCSB benchmarks and cost modeling.  
- Quantified impact with clear metrics, and learned that choosing a write‑optimized store (Cassandra) matched our real‑time analytics use case better than a general‑purpose document DB (MongoDB).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
