---
qid: ing_9b1c6b9e08__aws__local
question: 'Explain: Replication Between Services — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 570
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:54-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of an on‑prem transactional database to a cloud data lake. The requirement was *real‑time replication* (CDC) from **RDS MySQL** into **Amazon Redshift** for downstream BI, while keeping the source service in sync with an internal cache (**DynamoDB**) for low‑latency reads.

**Action / Design**  
1. **Capture** – enabled **MySQL binlog + RDS Enhanced Monitoring** → streamed to **AWS DMS** (source endpoint) and **Kinesis Data Streams** (target).  
2. **Transform & Load** – a **Lambda function** consumed Kinesis events, performed schema‑agnostic mapping (JSON → Redshift COPY syntax), and wrote to a *staging S3* bucket. A scheduled **Glue job** parsed the staging files into Parquet and bulk‑loaded them into Redshift using `COPY`.  
3. **Cache Sync** – same Lambda also updated **DynamoDB Streams** to keep the cache fresh.  
4. **Observability** – CloudWatch metrics, X-Ray traces, and a custom *CDC health dashboard* (Grafana) monitored latency (<2 s) and error rates.

**Result**  
- 99.9% of changes propagated within 2 s, 30× faster than the legacy batch job.  
- Cost reduced from $1.20/GB to **$0.02/GB** by leveraging S3 lifecycle policies and Redshift spectrum for incremental loads.  
- Reduced manual ops effort by 70 hrs/month.

**Leadership Principles & Bar‑raiser cues**  
- *Customer Obsession* – delivered near real‑time insights that directly improved sales forecasting accuracy by 12%.  
- *Ownership / Dive Deep* – architected end‑to‑end pipeline, tuned Lambda concurrency and Redshift slice allocation to balance cost vs latency.  
- *Bias for Action & Deliver Results* – shipped the CDC solution in 6 weeks instead of an estimated 3 months.  

Bar‑raisers focus on: clear ownership, depth of technical trade‑offs, measurable impact, and lessons learned from early failures (e.g., adjusting Lambda timeouts after a spike in write volume).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
