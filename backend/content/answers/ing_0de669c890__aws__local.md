---
qid: ing_0de669c890__aws__local
question: 'Explain: Week 2 - Data structures ​ — Best practice questions by the author
  of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 498
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:00-05:00'
sources: []
---

**Situation (S)**  
During my second week on the ML pipeline project at Acme Cloud, I was tasked with refactoring the feature‑store ingestion layer that had become a bottleneck after our model training jobs grew from 10 to 200 parallel runs.

**Task (T)**  
I needed to redesign the data structure and storage strategy so that ingest latency dropped below **50 ms per record** while keeping costs under $0.05/GB and ensuring eventual consistency for downstream models.

**Action (A)**  
- *Dive Deep*: I profiled the current Spark‑based ingestion, identified that a naive `HashMap` was causing O(n²) lookups.  
- *Invent & Simplify*: Replaced it with a **Bloom filter + sharded DynamoDB tables**, partitioned by user‑segment and timestamp.  
- *AWS Services*:  
  - **Amazon Kinesis Data Streams** for real‑time ingestion,  
  - **AWS Lambda** to transform and route records,  
  - **DynamoDB Global Tables** for cross‑region replication,  
  - **Amazon CloudWatch Metrics** for monitoring latency.  
- *Bias for Action*: I rolled out the new architecture in a blue/green deployment, using feature flags to switch traffic after validating <30 ms latency on 95th percentile.

**Result (R)**  
Latency fell from **120 ms → 45 ms** (a 63% improvement). Throughput increased from 1 k records/sec to 25 k records/sec, supporting the expanded training schedule. Cost per GB dropped by **$0.02**, saving ~$3,000/month. The migration also reduced error rates from 0.8% to <0.05%, directly boosting model accuracy.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered faster, more reliable data for our ML models, improving downstream product features.  
- *Ownership*: Took full responsibility for the end‑to‑end redesign, from profiling to deployment and monitoring.  

*Bar‑raiser takeaways*: I showed deep technical knowledge (Bloom filters, DynamoDB sharding), quantified impact, and learned that early profiling prevents costly over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
