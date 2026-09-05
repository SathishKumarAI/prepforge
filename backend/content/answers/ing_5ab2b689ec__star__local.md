---
qid: ing_5ab2b689ec__star__local
question: 'Explain: Scaling the design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 391
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:00-05:00'
sources: []
---

**Situation:**  
In a recent e‑commerce analytics project, the data science team was asked to build a real‑time “sales rank by category” dashboard for the marketing department. The raw clickstream and transaction logs totaled 12 TB per month, and the initial prototype that calculated ranks on a single Spark job could only process 1 GB of data before timing out.

**Task:**  
I needed to design an architecture that would scale to ingest the full monthly volume, update rankings every hour, and expose them through a low‑latency API for the front‑end without exceeding our cloud budget.

**Action:**  
I broke the problem into three layers: (1) **Ingestion** – set up Kafka streams with schema registry, partitioned by category, to feed a Spark Structured Streaming job. (2) **Processing** – rewrote the ranking logic as incremental aggregations using window functions and maintained a materialized view in Delta Lake; this allowed us to compute deltas rather than full recomputes. (3) **Serving** – exposed the latest ranks via a FastAPI service backed by an ElasticSearch index, tuned for 5 ms query latency. I also added a scheduler that triggers a nightly batch job to reconcile any drift between stream and batch results.

**Result:**  
The new pipeline processed the entire 12 TB dataset in under 30 minutes per hour, delivering rank updates with <10 ms latency. The marketing team reported a 25% increase in campaign ROI due to more accurate category targeting. I learned how to blend streaming and batch paradigms to meet strict SLA while keeping costs within 15% of the original budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
