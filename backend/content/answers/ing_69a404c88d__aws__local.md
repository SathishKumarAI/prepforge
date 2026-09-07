---
qid: ing_69a404c88d__aws__local
question: 'Explain: Data Archiving — Dataarchiving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:54-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous company we had a 50 TB nightly batch of log data that was required for compliance but rarely accessed. The existing on‑prem tape archive cost $12k/month and had a recovery time of 48 hrs, which risked non‑compliance penalties ($1M/year).

**Action (Dive Deep + Bias for Action)**  
I designed an end‑to‑end serverless pipeline in AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| Ingest nightly logs | **S3 EventBridge → Lambda** | 100% event‑driven, no servers. |
| Compress & encrypt | **Lambda + KMS** | 99.9 % availability, meets compliance encryption standards. |
| Store in cost‑optimized tier | **S3 Glacier Deep Archive** | $0.004/GB/month vs tape’s $0.02. |
| Metadata cataloguing | **AWS Glue Data Catalog** | Enables quick search via Athena without moving data. |
| Recovery testing | **Athena + S3 Select** | 10 min query times for audit snapshots. |

I added a *data lifecycle policy* to move objects from Standard to Glacier after 30 days and delete after 7 years, automating compliance.

**Result (Deliver Results)**  
- Monthly storage cost dropped from $12k to **$2.5k** (+80% savings).  
- Recovery time improved to **under 15 min**, eliminating the $1M penalty risk.  
- The pipeline ran for 18 months with zero data loss, earning a “Customer Obsession” kudos.

**Bar‑raiser Takeaway**  
Showed ownership by re‑engineering the whole process, deep dive into AWS cost models, quantified impact (cost & compliance), and learned from past failures by building automated lifecycle rules to avoid manual errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
