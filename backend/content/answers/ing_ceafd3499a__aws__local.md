---
qid: ing_ceafd3499a__aws__local
question: 'Explain: Threat hunting — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 521
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:16-05:00'
sources: []
---

**Situation / Task**  
At my previous role we were tasked with reducing the mean time to detect (MTTD) insider‑threat activity by 50 % for a regulated financial client. The legacy SIEM could not correlate logs across services, so analysts spent hours hunting manually.

**Action**  
I championed a **Threat‑Hunting Platform** built on **Amazon OpenSearch Service (Elasticsearch)**. I:

1. Ingested >200 GB/day of CloudTrail, VPC Flow Logs, and endpoint telemetry via Kinesis Data Firehose → OpenSearch.
2. Designed an index schema that normalised event fields and added a *threat‑score* field calculated by a Lambda “scoring engine” (AWS Lambda + SageMaker inference) using anomaly‑detection models.
3. Built Kibana dashboards for real‑time hunting, with scripted queries to surface high‑risk user patterns (e.g., repeated failed logins across accounts).
4. Implemented **Index Lifecycle Management** to tier hot data to SSD and archive cold data to S3 Glacier, keeping cost < $0.02/GB/month.
5. Enabled *search* scalability via auto‑scaling OpenSearch domains; availability achieved 99.9 % SLA by deploying across two AZs.

**Result**  
Within three months we cut MTTD from **48 hrs to 6 hrs** (88 % reduction). The platform processed 1.2 × the volume of logs compared to the old SIEM while saving **$18k annually** on storage and compute.

---

### Leadership Principles

| Principle | How it was applied |
|-----------|--------------------|
| **Customer Obsession** | Delivered a solution that directly reduced risk for our regulated client, improving their compliance posture. |
| **Ownership & Dive Deep** | Took full responsibility from data ingestion to model deployment; performed root‑cause analysis on false positives and tuned the scoring algorithm. |

### Bar‑raiser takeaways

- **Quantified impact:** MTTD reduction & cost savings were clearly measured.
- **Depth:** I explained indexing strategy, anomaly model choice, and lifecycle policies—showing deep technical understanding.
- **Learning from failure:** Early prototype produced many false positives; we iterated on feature engineering until precision hit 92 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
