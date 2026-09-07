---
qid: ing_45cf7c9e8f__aws__local
question: 'Explain: Most databases weren’t built for time series'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 381
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:21-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team that had to ingest 10 M IoT events per day, we discovered our relational DB (Aurora) struggled with the temporal cardinality and high write latency. The problem: *“Most databases weren’t built for time series.”*  

**Action**  
1. **Ownership & Bias for Action** – I scoped a migration to Amazon Timestream (serverless TSDB).  
2. **Dive Deep** – Compared write throughput, query latency, and cost per GB with Aurora and DynamoDB.  Timestream offered 10× lower write costs ($0.25/GB vs $1.20/GB) and sub‑100 ms read latency for rolling windows.  
3. **Design & AWS Services** – Integrated Kinesis Data Streams → Lambda (data enrichment) → Timestream; added Athena for ad‑hoc analytics, Glue for schema cataloging, and CloudWatch Alarms on retention policy drift.  

**Result**  
- 90 % reduction in write latency (from 1.8 s to 0.18 s).  
- $4M annual cost savings at peak load.  
- Query performance improved by 12× for common 24‑hour aggregates, enabling real‑time dashboards used by 300+ ops engineers.  

**Learning** – Early prototyping with a single partition key uncovered the “hot spot” issue; we introduced hash‑sharding on device ID to maintain linear scalability. This iteration reinforced that **Customer Obsession** (fast insights for ops) and **Invent & Simplify** (serverless TSDB) are critical when traditional RDBMS fall short.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
