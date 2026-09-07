---
qid: ing_323f7fd7f3__aws__local
question: 'Explain: Generating a Full Interactive Report with Profiling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 399
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:47-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building an *interactive ML model‑performance report* for a cross‑functional data science team that needed real‑time insights into feature importance, drift, and resource usage across 50+ models in production.

**Action**  
I owned the end‑to‑end pipeline:  

1. **Data collection** – I leveraged **Amazon SageMaker Feature Store** to ingest per‑model metrics (latency, accuracy, CPU/GPU utilization) from CloudWatch and model logs.  
2. **Profiling & drift detection** – Using **AWS Glue** + **PySpark**, I built a scheduled ETL job that computed statistical summaries and drift scores, storing results in an **Amazon Athena**‑backed catalog for ad‑hoc queries.  
3. **Visualization** – I deployed a lightweight **Amazon QuickSight** dashboard that pulls directly from Athena, enabling drill‑through into individual model traces via embedded **SageMaker Notebook** links.  
4. **Automation & cost control** – I set up **Step Functions** to orchestrate the workflow, added **AWS Budgets** alerts for query costs, and introduced a nightly cache refresh with **Amazon S3 Intelligent Tiering**.

**Result**  
The report reduced model‑review turnaround from 3 days to under 1 hour. Feature‑drift alerts cut production incidents by **42%**, and the automated pipeline saved ~$8k/month in manual effort.  

**Leadership Principles** – *Customer Obsession* (delivering instant, actionable insights for data scientists) & *Ownership* (owning the full lifecycle from ingestion to visualization). I learned that coupling SageMaker Feature Store with Athena keeps latency low while scaling seamlessly as model count grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
