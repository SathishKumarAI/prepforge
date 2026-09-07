---
qid: vq_c366ff29f5__aws__local
question: What are the types of Measures?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 410
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:04-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“In data engineering we classify measures into **Descriptive**, **Diagnostic**, **Predictive**, and **Prescriptive**.”*  
> 
> **Customer Obsession & Ownership** – I built a unified metric catalog for our e‑commerce platform that reduced analyst query time by 40 % (from 15 min to 9 min).  
> 
> **Dive Deep** –  
> *S – Situation:* Legacy BI layer mixed raw counts and aggregated metrics, causing drift.  
> *T – Task:* Design a taxonomy that clearly separates measure types for downstream analytics.  
> *A – Action:* Implemented a Snowflake schema with separate fact tables: `fact_descriptive`, `fact_diagnostic`, `predictive_model_output`, and a service‑level `prescriptive_actions`. Added a metadata layer in AWS Glue Data Catalog tagging each column with its measure type.  
> *R – Result:* Analysts could filter by type in QuickSight, slashing ad‑hoc query cost from $0.50 to $0.12 per run. Model drift alerts (predictive) were now auto‑triggered, cutting incident response time by 70 %.  
> 
> **AWS services used:** Snowflake (data warehouse), Glue Data Catalog (metadata), QuickSight (BI), SageMaker (predictive models).  
> 
> **Scalability & Cost Trade‑offs:** Separate tables keep write amplification low and enable columnar compression. We accepted a modest 5 % storage overhead to gain 30 % faster query performance, staying within the $3K/month budget.  

*Bar‑raiser cue:* I showed ownership by owning the catalog end‑to‑end, dove deep into schema design, quantified impact (time & cost savings), and learned from prior failures where mixed measures caused data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
