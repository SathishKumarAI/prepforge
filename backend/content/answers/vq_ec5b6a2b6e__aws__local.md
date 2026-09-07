---
qid: vq_ec5b6a2b6e__aws__local
question: What is web activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 570
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:07-05:00'
sources: []
---

**Situation & Task**

During a migration of our legacy data lake to Azure, the team needed a way to ingest user‑behavior logs from an external web analytics provider into Synapse on a schedule that matched our reporting cadence. The stakeholder asked: *“What is ‘web activity’ in Azure Data Factory (ADF) and how can we use it?”*

**Action**

I explained that **Web Activity** is a lightweight, HTTP‑based activity in ADF that lets you call any REST endpoint—GET, POST, PUT, DELETE—without writing custom code. It’s ideal for pulling data from SaaS APIs or triggering downstream services.

1. **Requirements Clarified**
   * Poll the analytics API every 15 minutes.
   * Capture JSON payloads up to 2 MB.
   * Persist raw data in ADLS Gen2 and trigger a Synapse pipeline for processing.

2. **Design & Services**
   * **ADF Web Activity** → `GET https://api.analytics.com/v1/events?since={last_timestamp}`  
     *Set authentication via Managed Identity + Azure Key Vault secrets.*
   * Store response in **Blob storage** (ADLS Gen2) using a sink dataset.
   * Trigger **Synapse Spark job** to transform JSON into Parquet, partitioned by event date.

3. **Scalability & Availability**
   * ADF’s Web Activity runs on the integration runtime; scaling is handled automatically per activity count.
   * Retrying logic (exponential back‑off) ensures idempotency; we set `retryCount=5`.
   * Using **Azure Monitor** alerts for HTTP 429 or 5xx responses keeps us ahead of rate limits.

4. **Cost & Trade‑offs**
   * Web Activity is free beyond the standard ADF pipeline runtime cost (~$0.002 per activity).  
   * Alternative: Azure Function + Durable Functions would add cold‑start latency and extra cost; Web Activity keeps it simple and cheaper for our 20 k calls/month.

**Result**

Implemented the solution in 3 days, reduced manual data pulls by 100%, and cut ingestion lag from 2 hours to <30 minutes. The pipeline now processes ~120 GB of web logs daily with an SLA of 99.9% availability and under $5/month for ADF activity cost.

**Reflection**

I took full ownership—validated API limits, set up secure secrets, and documented the workflow in Confluence. The bar‑raiser will note my *Customer Obsession* (meeting reporting needs), *Dive Deep* (understanding retry logic), *Bias for Action* (rapid deployment), and *Quantified Impact* (time & cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
