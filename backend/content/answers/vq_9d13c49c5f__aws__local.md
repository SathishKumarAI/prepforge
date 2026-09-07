---
qid: vq_9d13c49c5f__aws__local
question: How do you handle incremental data loads in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 434
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:49-05:00'
sources: []
---

**Situation / Task** – At my previous role I was tasked with moving terabytes of daily log data from on‑prem servers into **Azure Data Lake Storage Gen2 (ADLS)** while keeping the pipeline cost‑effective and ensuring downstream analytics stayed up‑to‑date.

**Action** –  
1. **Capture only new records**: I added a *watermark* column (`last_modified_ts`) to the source tables and scheduled an Azure Function that runs every 15 min, querying rows with `> watermark`.  
2. **Incremental write to ADLS**: The function writes each batch as Parquet under `/raw/{date}/` using **Azure Data Factory (ADF)** copy activity with *Upsert* mode, guaranteeing idempotence.  
3. **Metadata catalog**: I leveraged **Synapse Lakehouse** and Delta Lake to maintain a manifest file that tracks partition boundaries; this allows Spark jobs to skip scanned partitions automatically.  
4. **Monitoring & cost control** – Azure Monitor alerts trigger if data size > 10 % of baseline, prompting me to adjust the watermark window.

**Result** – The incremental pipeline reduced daily ingestion time from 2 hrs to **15 min** (≈ 90 % faster) and cut storage‑related costs by **$1.8k/month** while keeping data freshness under 10 minutes.

**Reflection** – I learned that *small, idempotent changes* at the edge avoid large recomputations downstream. This aligns with **Ownership** (I owned the end‑to‑end flow) and **Dive Deep** (I dissected ADF’s copy metrics to tune performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
