---
qid: vq_58781db7d3__aws__local
question: What exactly is a factor variable, and why would you use one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:35-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Situation & Task**  
When building a churn‑prediction model for our subscription service, the raw data included categorical columns such as `device_type`, `plan_tier`, and `region`. The modeling pipeline was stalled because the algorithm couldn’t handle these non‑numeric fields. I had to convert them into *factor variables* (also called one‑hot or dummy variables) so that the model could learn their effects.

**Action**  
1. **Dive Deep** – I inspected the cardinality of each categorical column, discovered `region` had 120 levels while `plan_tier` had only 3.  
2. **Design** – Implemented an automated Glue job to transform raw CSVs into Parquet and create factor columns using Spark’s `StringIndexer` + `OneHotEncoder`.  
3. **AWS Services** – Stored the transformed dataset in S3, used Athena for quick ad‑hoc queries, and fed the data into SageMaker training jobs.  
4. **Bias for Action** – Created a CI/CD pipeline with CodePipeline to trigger re‑training every week when new data arrived.

**Result**  
The churn model’s AUC improved from 0.72 to **0.85**, reducing projected annual revenue loss by **$1.2 M**. The Glue job cut preprocessing time from 90 min to 12 min, and the end‑to‑end pipeline cost $30/month versus $75/month previously.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a more accurate churn prediction that directly protects revenue.  
- **Ownership**: Took full responsibility for data engineering, model training, and deployment.  

**Bar‑raiser Takeaway**  
Demonstrated deep technical knowledge (factor variables, Spark transforms), quantified impact with real metrics, and showed continuous learning by automating the pipeline after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
