---
qid: ing_d4e8257b13__aws__local
question: 'Explain: right. Now this Third Party Data Manager'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 448
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:08-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to build a *Third‑Party Data Manager* that ingests, validates and enriches external vendor feeds for our recommendation engine. The goal was to reduce data latency from 48 h to under 4 h while keeping cost < $5k/month.

**Action (Design)**  
I architected an event‑driven pipeline in **AWS**:  

| Step | Service | Reasoning |
|------|---------|-----------|
| Ingest | **Amazon Kinesis Data Streams** + **Lambda** | Low‑latency ingestion, autoscaling. |
| Validation | **Glue ETL** with Spark jobs | Declarative schema enforcement, easy debugging. |
| Enrichment | **DynamoDB Global Tables** + **AppSync** | Fast lookups, multi‑region replication for availability. |
| Orchestration | **Step Functions** | Clear state machine, retry logic and metrics. |

I added a **data quality dashboard** in QuickSight that surfaced error rates per vendor; this drove a 30 % reduction in downstream model drift.

**Result**  
- Latency dropped from 48 h → 3.5 h (95th percentile).  
- Cost fell to $4,200/month.  
- Data quality score improved by **27 %**, translating to a 12 % lift in recommendation CTR.

**Leadership Principles & Bar‑raiser Focus**  
*Customer Obsession*: Built dashboards so the ML team could self‑serve data health. *Ownership*: Took end‑to‑end responsibility, from ingestion to monitoring. *Dive Deep*: Used CloudWatch metrics and DynamoDB Streams to pinpoint bottlenecks. *Bias for Action*: Deployed a prototype in 3 weeks instead of waiting for a full review cycle.  

**Learning**  
A first attempt over‑provisioned Lambda memory; we learned to instrument with X-Ray, cut costs by 18 % without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
