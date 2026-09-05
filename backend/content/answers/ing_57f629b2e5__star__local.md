---
qid: ing_57f629b2e5__star__local
question: 'Explain: Group rows that have the same values into summary rows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:27-05:00'
sources: []
---

**Situation:**  
During a churn prediction project for a telecom client, our raw dataset had over 3 million call‑record rows with duplicate customer IDs and identical feature combinations (plan type, tenure, usage). The model training pipeline was bottlenecked by this redundancy—data ingestion took hours, and the gradient descent loop slowed because we were repeatedly learning from the same information.

**Task:**  
I needed to collapse those identical rows into a single summary record per customer‑feature set while preserving the signal (e.g., total minutes, average cost). The goal was to reduce training time by at least 50 % without hurting model accuracy.

**Action:**  
Using Spark SQL I performed a `groupBy(customer_id, plan_type, tenure)` followed by aggregations: `sum(duration)`, `avg(cost_per_minute)`, and a count of calls. I added a new feature “call_count” to capture volume. After the aggregation, I exported the summarized DataFrame to Parquet, which compressed the data to 0.9 GB from the original 4.5 GB. I re‑ran the preprocessing pipeline (scaling, encoding) on this smaller set and trained a LightGBM model.

**Result:**  
Training time dropped from 3 hours to 45 minutes—a 75 % reduction—while cross‑validated AUC stayed at 0.83 (unchanged). I learned that thoughtful data aggregation can dramatically improve pipeline efficiency, and that keeping a volume metric preserves information lost during deduplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
