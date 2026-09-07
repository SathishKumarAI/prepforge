---
qid: vq_d488ff1699__aws__local
question: Q1). How to call an API in Azure Data Factory (ADF)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 522
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles: Ownership & Dive Deep.*  
>
> **Situation:** In my last role I had to ingest a daily 5 GB JSON feed from an external partner into our data lake on Azure, then expose it via REST for downstream analytics.  
> **Task:** Build a repeatable, cost‑effective pipeline that could be monitored and scaled with minimal manual intervention.  
> **Action:** I leveraged *Azure Data Factory*’s **Web Activity** to call the partner’s API.  
> 1. Created an HTTP linked service (basic auth) and set the request body/headers via dynamic content.  
> 2. Added a *Retry policy* (max 5 attempts, exponential back‑off) and *Timeout* (30 s).  
> 3. Piped output to a **Copy Activity** that stored raw JSON in an Azure Data Lake Gen2 container using a **Parquet** sink for compression.  
> 4. Triggered the pipeline on a schedule; logged run status in Azure Monitor, and used *ADF monitoring dashboards* to surface failures.  
> **Result:** The solution processed each batch in < 3 min with < 0.5 % failure rate over 6 months, reducing manual ops by 70 %. Cost was <$12/month vs $30/month for a custom script on VM.  

**Key AWS parallels I’d discuss with a bar‑raiser:**

| Azure | AWS Equivalent |
|-------|----------------|
| Data Factory | Step Functions + Lambda + S3 Copy |
| Web Activity | API Gateway + Lambda (or EventBridge) |
| Parquet sink in ADLS Gen2 | Athena/Glue catalog on S3 |

**What the interviewer looks for:**  
- **Ownership:** I took full responsibility from design to monitoring.  
- **Dive Deep:** I tuned retry logic and examined failure logs to reduce errors.  
- **Quantified Impact:** 70 % ops reduction, <$12/month cost.  
- **Learning from Failure:** After an initial run that hit a throttling error, I added exponential back‑off and adjusted the pipeline’s timeout, which eliminated future failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
