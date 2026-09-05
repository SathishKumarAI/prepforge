---
qid: vq_320e4efa16__star__local
question: Explain List of Activities in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 413
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:19-05:00'
sources: []
---

**Situation** – In my last role I was tasked with modernizing the nightly ETL pipeline for our retail analytics team. The existing batch jobs were running on a legacy scheduler and we needed to move them into Azure Data Factory (ADF) to take advantage of cloud scalability.

**Task** – My goal was to design an ADF workflow that replicated all the data movement, transformation, and quality checks from the old system while keeping the end‑to‑end latency under 30 minutes. I had to explain each activity type to stakeholders who were unfamiliar with ADF.

**Action** – I started by mapping out the pipeline in the ADF UI:  
1. **Copy Activity** – for moving raw logs from Blob Storage to a staging SQL DB, using self‑managed integration runtime for on‑prem data.  
2. **Data Flow Activity** – performed column pruning, type casting, and a window function to dedupe customer records; I leveraged Spark clusters and tuned the `maxParallelism` setting.  
3. **Lookup & If Condition Activities** – checked if incremental loads were needed and routed execution accordingly.  
4. **Stored Procedure Activity** – executed post‑load aggregations in Synapse, passing dynamic parameters from previous steps.  
5. **Wait Activity** – introduced a short pause to allow downstream services to refresh caches.  
I also added **Trigger** configurations (schedule + tumbling window) and set up **Monitoring** with alerts on failures.

**Result** – The new ADF pipeline cut processing time by 45 % (from 1 hour down to 32 minutes), reduced operational costs by 30 %, and provided real‑time visibility through Azure Monitor dashboards. I learned that a clear, activity‑level narrative helps non‑technical stakeholders grasp the value of cloud data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
