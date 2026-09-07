---
qid: ing_386b31104b__aws__local
question: 'Explain: Do the simple thing that works — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:14-05:00'
sources: []
---

**Situation (S)**  
At a previous company I was asked to build an internal recommendation engine for career pathing. The goal was to surface up‑skilling courses that increased promotion rates by 15 %.  

**Task (T)**  
I had to design a system that could ingest millions of employee records, run feature engineering, train models, and serve predictions in real time—all while staying under the $5k/month budget for cloud services.  

**Action (A)**  
1. **Dive Deep & Ownership** – I scoped the data: 2 M rows of historical training logs, skill tags, and promotion outcomes.  
2. **AWS Architecture**  
   * **S3 + Glue** for raw data lake and ETL pipelines.  
   * **Amazon SageMaker** (Notebook → Training → Endpoint) to train an XGBoost model; I used spot instances to cut GPU costs by 70 %.  
   * **Lambda + API Gateway** as a lightweight inference layer, caching top predictions in **ElastiCache‑Redis** for <50 ms latency.  
3. **Bias for Action** – I built a minimal viable product within two weeks: a single Lambda that returned the top 5 courses per employee.  
4. **Invent & Simplify** – Instead of complex neural nets, I chose XGBoost (fast training, interpretable) and avoided real‑time feature pipelines, which would have added latency and cost.

**Result (R)**  
Within three months of deployment:  
* Promotion rates for employees who took the recommended courses rose from 12 % to **27 %** (+15 pp).  
* The solution used only **$3.2k/month**, staying well below budget.  
* Model drift was monitored via SageMaker Model Monitor; when performance fell, a new training job ran automatically on the same spot instances.

**Learning** – I realized that “doing the simple thing that works” often means selecting the right trade‑offs early and iterating quickly rather than chasing perfection. This aligns with Amazon’s *Customer Obsession* (delivering real value) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
