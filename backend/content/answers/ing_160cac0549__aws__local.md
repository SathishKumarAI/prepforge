---
qid: ing_160cac0549__aws__local
question: 'Explain: Um I think we did like 30 — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 421
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:12-05:00'
sources: []
---

**Situation / Task**  
When I joined my last company as a senior ML engineer, the data‑science team had built 30+ end‑to‑end pipelines on Google Cloud (BigQuery, Dataflow, Vertex AI). They were struggling with latency, cost overruns, and poor observability. My goal was to migrate the most critical pipelines to AWS while keeping or improving performance.

**Action**  
*Customer Obsession & Ownership*: I first mapped each pipeline’s business impact using a weighted score (accuracy × business value).  
*Dive Deep & Bias for Action*: For the top 5, I redesigned the workflow in **AWS Glue + Athena** (ETL) and **SageMaker Pipelines** (model training). I added **Amazon CloudWatch Logs** and **X-Ray** for end‑to‑end tracing.  
I leveraged **AWS Step Functions** to orchestrate stateful jobs, replacing Google’s Dataflow jobs, which reduced orchestration overhead by 35 %.  
*Invent & Simplify*: Introduced a reusable **Glue Catalog** schema registry and a central **S3 landing zone**, cutting duplicate data copies by 70 %.  

**Result**  
- Latency dropped from an average of 15 min to 4 min (77 % reduction).  
- Monthly spend fell from $12k to $7.5k, saving 38 %.  
- Model accuracy improved by 2.3 pp due to better data quality and lineage tracking.  

**Learnings & Bar‑raiser cues**  
I documented every failure: the Glue job that timed out on large shards taught me to partition S3 objects by hash key. I shared these lessons in a quarterly “Post‑mortem” deck, ensuring the team could iterate faster. The bar‑raiser would hear my ownership, deep technical trade‑offs, and quantified impact—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
