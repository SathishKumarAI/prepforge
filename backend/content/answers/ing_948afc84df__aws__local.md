---
qid: ing_948afc84df__aws__local
question: 'Explain: So let''s if you want to track — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 481
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:43-05:00'
sources: []
---

**Situation & Task (S)**  
In a recent product launch I was tasked with designing a user‑activity analytics platform that would ingest millions of events per day, provide near‑real‑time dashboards, and support ad‑hoc queries for ML model training. The core question was: *Which database should we choose?*  

**Action (A)**  
I started by mapping the workload: write‑heavy ingestion, strong consistency for event ordering, low‑latency reads for dashboards, and flexible schema for evolving telemetry. I compared **Amazon DynamoDB**, **Aurora PostgreSQL**, and **Amazon Timestream**.

1. **DynamoDB** – 10 000 writes/sec, key‑value access, auto‑scaling, but expensive with on‑demand capacity and limited aggregation.
2. **Aurora PostgreSQL** – relational power, SQL analytics, but scaling write throughput required sharding and had higher latency.
3. **Timestream** – purpose‑built for time‑series, automatic tiering (hot vs cold), built‑in downsampling, cost‑effective at scale.

I chose **Timestream** because it offered 1 × write throughput per partition, sub‑second read latency, and a pay‑per‑byte model that kept the $0.10/GB/month budget under control. I integrated it with **AWS Glue** for schema evolution and **Amazon Athena** for ad‑hoc ML training data extraction.

**Result (R)**  
- 95 % reduction in query cost compared to DynamoDB ($12k → $660/month).  
- 30 % faster aggregation queries for the ML pipeline.  
- Zero downtime during a 6‑month migration, meeting SLAs.  

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered a low‑cost, high‑performance solution that directly impacted our data scientists’ productivity.  
- **Dive Deep & Ownership**: I evaluated each service’s trade‑offs, benchmarked workloads, and owned the migration plan.

**Bar‑raiser Takeaways**  
- Clear ownership of the decision tree and metrics.  
- Demonstrated depth by comparing services beyond surface features.  
- Quantified impact with real numbers, showing both cost savings and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
