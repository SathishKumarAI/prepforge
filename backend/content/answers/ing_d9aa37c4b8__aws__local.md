---
qid: ing_d9aa37c4b8__aws__local
question: 'Explain: Strategy 4: Batch Processing — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 554
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:04-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team for an e‑commerce platform, we had to migrate nightly recommendation jobs from on‑prem Hadoop to the cloud. The goal was to reduce operating costs by **30 %** while keeping the 4 PMET recommendation pipeline under a 15‑minute SLA.

**Action (Design & Pricing)**  
*Architecture:*  
- Store raw logs in **Amazon S3** (object storage, pay‑per‑GB).  
- Trigger **AWS Glue** jobs via EventBridge; Glue ETL runs on **Python/Scala** and writes cleaned data back to S3.  
- Launch **EMR clusters** (Spark) for heavy transformations; use Spot Instances with an On‑Demand fallback to stay within budget.  
- Persist results in **Redshift Spectrum** so downstream services query directly from S3, eliminating extra data movement.  

*Cost controls:*  
1. **Auto‑scaling EMR**: Start cluster only during the 2‑hour window; shut down immediately after job completion → ~$0.12 / h vs $2.50 / h on‑prem.  
2. **Spot instances** (80 % discount) with Spot Fleet – we set a maximum bid of $0.02 / h, saving 70 % compared to On‑Demand.  
3. **S3 Intelligent Tiering** for infrequently accessed historical data → 30 % lower storage cost.  

*Result:*  
- Monthly spend dropped from **$18K** (on‑prem) to **$12.6K** in AWS – a **30 % reduction**.  
- Pipeline latency stayed at **13 min**, meeting the SLA.  
- The team now spends 40 % less time on infrastructure maintenance.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster recommendations for shoppers, improving conversion by 2 %.  
- **Ownership & Dive Deep:** I dissected every line of cost data, built a real‑time cost dashboard, and iterated until we hit the target.  

**Bar‑raiser cues** – ownership, deep technical reasoning (spot vs on‑demand, auto‑scaling), quantified impact, and learning from early failures when Spot preemptions caused job restarts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
