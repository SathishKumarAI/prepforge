---
qid: vq_d4ead15b22__star__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 315
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:36-05:00'
sources: []
---

**Situation** – In my last role we migrated a legacy ETL pipeline to Azure Data Factory (ADF) to process daily sales data for a retail client. The incoming CSV files sometimes contained corrupted rows and the downstream Power BI reports were failing, causing SLA breaches.

**Task** – I needed to implement robust error handling so that bad records were isolated without breaking the entire pipeline, while keeping audit logs for compliance and allowing retries on transient failures.

**Action** – I added a *Data Flow* with an *Derived Column* to flag rows that didn’t match our schema. Those flagged rows were written to a separate “error” blob folder using a sink transformation. For the main flow I wrapped activities in a *ForEach* loop and used **ADF’s Activity Dependency** (OnError) to trigger a *Send Email* activity to notify the ops team, and a *Stored Procedure* call that logged error counts into an Azure SQL table. I also set up *Retry Policies* on the copy activity with exponential back‑off for transient network issues.

**Result** – The pipeline now continues processing good data while quarantining bad rows; we reduced report failures by 99% and cut manual intervention time from hours to minutes. I learned how to leverage ADF’s built‑in error pathways to create a self‑healing, auditable ETL process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
