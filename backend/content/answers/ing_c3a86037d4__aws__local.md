---
qid: ing_c3a86037d4__aws__local
question: 'Explain: So there are a bunch of scenarios — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 572
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:34-05:00'
sources: []
---

**Scenario:**  
During an AWS‑style system‑design interview, I was asked how to choose the right database for a real‑time analytics platform that ingests 10 M events per day and must serve ad‑hoc queries with <200 ms latency.

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| **S – Situation** | Client: global e‑commerce site, needs instant trend reports for marketing. | High write volume + low‑latency reads = classic “write‑heavy” use case. |
| **T – Task** | Pick a database that scales horizontally, offers strong consistency for counters, and integrates with SageMaker for downstream ML models. | Must satisfy both operational and analytical workloads. |
| **A – Action** | • Used **Amazon DynamoDB** (NoSQL) for event ingestion: provisioned 20 WCU/RCU per shard, auto‑scaling to 200 WCU when traffic spiked; latency <5 ms.<br>• Employed **AWS Glue + Amazon Athena** over S3 for ad‑hoc analytics, backed by a **partitioned Parquet** schema (daily partitions).<br>• Set up **DynamoDB Streams → Lambda → Kinesis Data Firehose → Redshift Spectrum** to feed ML models in near real time. | DynamoDB gives low‑latency writes; Athena/Redshift Spectrum provide cost‑effective, serverless analytics; the streaming pipeline ensures freshness for ML training. |
| **R – Result** | • 99.9 % SLA on write latency.<br>• Query performance <200 ms for >95 % of ad‑hoc queries.<br>• Cost reduced by 35 % compared to a monolithic RDBMS solution. | Demonstrated ownership, dive deep into trade‑offs (consistency vs. speed), and delivered measurable results. |

**Leadership Principles Highlighted:**  
- **Ownership & Deliver Results**: I took full responsibility for the end‑to‑end pipeline and achieved clear cost/latency metrics.  
- **Dive Deep**: I evaluated each AWS service’s scaling, consistency models, and integration points to justify my choices.

**Bar‑raiser cues:**  
- Quantified impact (latency & cost).  
- Depth of analysis (service trade‑offs, partitioning strategy).  
- Learning loop: after a 12 % latency spike during peak traffic, I added auto‑scaling alarms and adjusted DynamoDB provisioned capacity—documented in post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
