---
qid: vq_485e086bad__aws__local
question: SSIS to Azure Data Factory ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 488
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:39-05:00'
sources: []
---

**Situation / Task (S)**  
In my previous role I led the migration of a legacy on‑prem SSIS pipeline that moved ~1 TB/day of transactional logs into Snowflake. The existing workflow was brittle and cost $18k/month in licensing plus 5 % downtime during nightly loads.

**Action (A)**  
I owned the project, scoped requirements, and designed an Azure‑centric replacement using **Azure Data Factory (ADF)**, **Azure Synapse**, and **Azure Functions** for custom transformations. I wrote a reusable ADF template that pulls data from on‑prem SQL via Self‑Hosted Integration Runtime, stages it in **ADLS Gen2**, then triggers a Spark job in Synapse to perform the heavy ETL logic. For incremental loads I leveraged **ADF’s incremental copy** and **Change Data Capture (CDC)** connectors, eliminating full table scans.

I also implemented monitoring with **Azure Monitor** + **Log Analytics** and set up automated rollback via ADF pipelines’ *“If Failed”* path to preserve data integrity.

**Result (R)**  
- Reduced total cost by **42 %** ($18k → $10.5k/month).  
- Cut load time from 4 h to **1.2 h** (70 % faster), enabling near‑real‑time analytics.  
- Achieved 99.99 % availability through ADF’s built‑in retry and circuit‑breaker patterns.

**Leadership Principles Reflected**  
- *Ownership*: I drove the migration from concept to production, owning timelines, budgets, and post‑go‑live support.  
- *Dive Deep*: I dissected SSIS packages, mapped each transformation to ADF activities, and benchmarked performance at scale.  

This experience shows how a well‑planned shift to cloud services can deliver measurable business value while adhering to AWS/Amazon interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
