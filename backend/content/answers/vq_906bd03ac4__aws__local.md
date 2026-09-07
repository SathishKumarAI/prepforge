---
qid: vq_906bd03ac4__aws__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 446
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:34-05:00'
sources: []
---

**Situation / Task** – While modernizing a data‑lake ingestion pipeline for a retail client, the team needed to validate schema changes in Hive tables before downstream analytics jobs ran. The ADF *Get Metadata* activity was the only “out‑of‑the‑box” step that could query table properties.

**Action** – I scoped the requirement:  
1. **Use GetMetadata on Hive/Parquet datasets** – it can return `Schema`, `Size`, `LastModifiedTime` and even `TableType`.  
2. I wrapped the activity in a *Data Flow* that added a conditional split: if `TableType != 'EXTERNAL'` or `Schema` mismatched, send an alert via SNS.  
3. To keep costs low, the pipeline ran on a **low‑priority Azure Data Factory integration runtime** (≈$0.02/hr) and scheduled only during off‑peak hours.

**Result** – The validation step prevented 12 downstream job failures per month, saving ~\$1,200/month in compute time. The alerting reduced mean time to resolution from 4 hrs to <30 min.  

---

### Bar‑raiser takeaways  
- **Ownership**: I owned the entire end‑to‑end flow and documented rollback steps.  
- **Dive Deep**: I explored ADF’s metadata schema, discovered hidden properties (`TableType`), and leveraged them in logic.  
- **Quantified Impact**: 12 failures avoided → \$1,200 saved/month.  
- **Learning from Failure**: Early trials showed `GetMetadata` couldn’t read nested Parquet schemas; I added a temporary Spark job to flatten the schema before validation.

> *AWS parallel*: In Glue ETL, you’d use `getTable()` on the catalog, then parse the returned `TableInput` for similar checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
