---
qid: vq_fedc50d1cd__aws__local
question: What are the three different types of Error Handling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 485
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:23-05:00'
sources: []
---

**Answer – Amazon Way**

*Leadership Principles:* **Ownership**, **Dive Deep**  

**S**ituation: While building a nightly ETL pipeline on AWS Glue to ingest 10 GB of daily transactional logs into Redshift, I discovered three distinct failure modes that needed explicit handling.

**T**ask: Design a robust error‑handling strategy that keeps the pipeline running, provides visibility, and enables fast remediation without manual intervention.

**A**ction:

| Error Type | What it is | How we handled it (AWS services) |
|------------|-----------|-----------------------------------|
| **Data Validation Errors** | Records that fail schema or business rules. | Glue job writes bad rows to an S3 “staging‑errors” bucket, tags them with a `validation_error` flag, and sends a notification via SNS → Lambda → Jira ticket. |
| **Transformation / Processing Errors** | Runtime exceptions during mapping (e.g., divide‑by‑zero). | The Glue script is wrapped in a Python `try/except`; on exception it writes the stack trace to CloudWatch Logs, flags the job run as FAILED, and triggers an SNS alert to the ops team. |
| **System / Infrastructure Errors** | Resource exhaustion or service limits (e.g., EC2 spot termination). | Glue’s retry configuration (3×) plus a Lambda that monitors CloudWatch Alarms on `GlueJobFailed` events; it auto‑spins up an additional worker pool and resubmits the job. |

**R**esult: After implementing this three‑layered strategy, we reduced downstream query failures by **92 %**, cut mean time to recovery from 2 hrs to **15 min**, and avoided a costly data‑loss incident during peak traffic.  

*Bar‑raiser check:* I owned the end‑to‑end pipeline, dove deep into failure logs to categorize errors, quantified impact with clear metrics, and iterated on the design after each failure to improve resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
