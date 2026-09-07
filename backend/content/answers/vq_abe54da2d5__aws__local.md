---
qid: vq_abe54da2d5__aws__local
question: What are the key components of Azure Data Factory pipeline ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – At my previous role I was tasked to migrate a 1 TB nightly ETL from on‑premise to the cloud, while keeping SLA < 30 min and cost < $200/day.  
> **Action** – I designed an Azure Data Factory (ADF) pipeline composed of:  
> 1. **Source datasets** (SQL Server, Blob Storage).  
> 2. **Linked services** for secure connectivity (Managed Identity + Key Vault).  
> 3. **Copy activities** with partitioning and *staging* in ADLS Gen2 to enable parallelism.  
> 4. **Data flow** for transformation (Spark‑based, column pruning, type casting).  
> 5. **Trigger** (schedule + event‑driven) and **pipeline parameters** for dynamic file paths.  
> 6. **Monitoring & logging** via Azure Monitor, Application Insights, and a custom dashboard (Power BI) that reports runtime, failures, and cost per run.  
> 7. **Error handling** – retry policies + deterministic checkpointing to avoid re‑processing.  
> 
> **Result** – The pipeline ran in **22 min**, reduced storage costs by **30 %**, and cut manual effort from 8 h/week to 1 h, yielding a $3K/month savings.  
> 
> **Leadership Principles Highlighted**  
> *Customer Obsession* – delivered faster insights for business users.  
> *Ownership & Dive Deep* – I debugged a subtle schema drift that cost hours of downtime; documented the fix and automated validation.  
> *Bias for Action* – deployed in 3 days, iterated with real‑time metrics.  

**Bar‑raiser takeaway**: Look for ownership (owning the end‑to‑end flow), depth (understanding triggers vs data flows), quantified impact (runtime, cost), and learning from a schema drift failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
