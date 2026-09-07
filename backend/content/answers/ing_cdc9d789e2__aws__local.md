---
qid: ing_cdc9d789e2__aws__local
question: 'Explain: Sources — Amazon'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 307
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:18-05:00'
sources: []
---

**Situation / Task**  
While leading the *AI‑Ops* team, I was asked to audit how we sourced training data for our recommendation engine so that we could reduce bias and improve model accuracy.

**Action**  
I performed a **Dive Deep** into every data pipeline: internal clickstreams, third‑party purchase logs, and public datasets. Using AWS Glue to catalog raw streams, I built a cost‑aware ETL workflow in **AWS Step Functions** that automatically tagged each dataset with provenance metadata (source, timestamp, consent flag). To enforce *Customer Obsession*, I added an approval gate in **Amazon S3 Object Lock** so that any new external source required a data‑privacy review. For scalability, the pipeline ran on **EMR** clusters spun up via **AWS Auto Scaling**, keeping costs below $0.12 per GB processed.

**Result**  
Within two sprints we cut model bias scores by 32 % (measured by disparate impact ratio) and increased click‑through rate by 18 %. The new pipeline also reduced data ingestion time from 48 h to 6 h, freeing engineers for feature work.  

*Bar‑raiser note:* I demonstrated **Ownership** by owning the entire audit, **Dive Deep** into data lineage, quantified impact with real metrics, and learned that automated provenance tagging prevents costly rework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
