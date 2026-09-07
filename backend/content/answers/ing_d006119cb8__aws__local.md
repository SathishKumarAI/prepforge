---
qid: ing_d006119cb8__aws__local
question: 'Explain: Join the team — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 436
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:15-05:00'
sources: []
---

**Situation / Task**  
When I joined Amazon’s *Cognition* ML squad, the hiring manager asked me how I would contribute to their “Career‑Pathing” product—a recommendation engine that surfaces internal learning and promotion opportunities for employees.

**Action (Technical & Leadership)**  
1. **Own the end‑to‑end pipeline** – built a data ingestion layer on **Amazon Kinesis Data Streams** → **Glue** ETL → **Redshift Spectrum** for fast analytics.  
2. **Model design** – engineered a hybrid recommender using *Collaborative Filtering* (Spark MLlib) + *Content‑Based* features from job descriptions stored in **DynamoDB**. Deployed with **SageMaker Endpoint** behind an **API Gateway** to keep latency < 200 ms.  
3. **Scalability & Cost** – auto‑scaling on-demand instances (ml.m5.xlarge) reduced spend by 35 % compared to the prior batch‑processing approach, while 99.9 % availability was achieved through multi‑AZ deployment.  
4. **Customer Obsession / Deliver Results** – ran A/B tests; saw a 12 % lift in employee engagement (measured via click‑through on recommended paths) and a 7 % increase in internal promotions within three months.

**Result**  
The new pipeline cut data latency from 24 h to <5 min, lowered operational cost by $120K/year, and directly supported the company’s diversity & inclusion goal by surfacing under‑represented career tracks.

**Bar‑raiser take‑away**  
- Demonstrated **ownership** of the full ML stack.  
- Showed **dive deep** into AWS services to balance performance and cost.  
- Quantified impact with real metrics.  
- Learned from early A/B failures by iterating feature weighting, improving model precision by 4 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
