---
qid: ing_9317a73bdd__aws__local
question: 'Explain: Deeper understanding — Designing Data-Intensive Applications (DDIA)
  \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 458
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:43-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑engineering squad at my previous company, we were tasked with migrating a monolithic ML pipeline that processed ~3 TB of log data nightly into a modern, scalable stack. The goal was to reduce batch latency from 4 h to <30 min while keeping costs below $5k/month.

**Action (Design)**  
I applied the core ideas from *Designing Data‑Intensive Applications* (DDIA) to structure our solution:

1. **Partition & Replicate** – Use Kafka topics split by user segment, enabling parallel consumers and fault tolerance.  
2. **Immutable Streams** – Persist raw events in an S3 “raw lake” as Parquet, then transform via Glue jobs that write to a Redshift Spectrum table for analytics.  
3. **Event‑Driven Model** – Trigger Lambda functions on S3 object creation; each function runs a small ML inference (using SageMaker Edge) and writes predictions back to DynamoDB for real‑time lookups.

**Result**  
- Batch latency dropped from 4 h → 25 min (80% improvement).  
- Cost fell from $12k/month to $4.3k/month, saving 64%.  
- Model accuracy remained >92% because we kept a versioned “golden” dataset in Redshift.

**Reflection & Learning**  
I owned the migration, diving deep into Kafka’s log compaction and Glue’s job scheduling quirks. The first run hit a 30 min timeout due to insufficient Lambda memory; after profiling I increased memory by 2× and added an SQS buffer, eliminating failures. This experience reinforced my bias for action—quickly iterating on infrastructure while keeping customer impact (real‑time predictions) at the forefront.  

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivered instant insights to downstream analysts.  
- **Ownership & Dive Deep** – Took full responsibility, investigated performance bottlenecks, and optimized every layer of the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
