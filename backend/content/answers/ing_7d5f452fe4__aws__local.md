---
qid: ing_7d5f452fe4__aws__local
question: 'Explain: Unifying Observability — Scaling Our Logging System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:46-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led the migration of our legacy logging stack (Splunk + ELK) into a unified observability platform for *Customer Obsession* and *Deliver Results*. The old system had fragmented logs, high latency, and cost $1M/yr.  

**Action**  
- **Ownership & Dive Deep:** Built an architecture centered on **Amazon Kinesis Data Firehose → Amazon S3 (raw) + Amazon Athena + AWS OpenSearch**.  
- Added a lightweight sidecar (**CloudWatch Agent**) that normalizes logs to JSON, tags with service‑level metadata, and streams via Firehose for real‑time analytics.  
- Implemented *serverless* Lambda enrichment to add correlation IDs, enrich with DynamoDB lookups (user context), and publish to OpenSearch.  
- Configured **OpenSearch Dashboards** for alerting (thresholds on error rates) and **Athena queries** for long‑term trend analysis.  
- Used **S3 Lifecycle policies + Glacier Deep Archive** for cost‑effective cold storage, reducing storage spend by 70%.  
- Introduced a *canary* deployment with A/B testing to validate latency (<200 ms) before full rollout.

**Result**  
- Log ingestion throughput increased from 5 kB/s to 2 GB/s (40×).  
- Alert‑to‑resolution time dropped from 4 h to 15 min, cutting mean‑time‑to‑repair by 80%.  
- Annual cost fell from $1M to $250K, freeing 30% of the data‑ops budget for new ML experiments.  

**Bar‑raiser takeaway** – I demonstrated true ownership (end‑to‑end migration), deep technical knowledge (AWS services trade‑offs), and quantified impact while learning that a serverless enrichment layer keeps latency low and cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
