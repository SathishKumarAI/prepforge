---
qid: ing_9df2d51ce7__star__local
question: 'Explain: Databricks Algorithms and Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:07-05:00'
sources: []
---

**Situation**  
At my previous role, we were launching a recommendation engine for an e‑commerce platform that needed to scale from 1 M daily users to 10 M within six months. The existing Spark MLlib pipeline was lagging behind real‑time traffic and the latency target of 200 ms couldn’t be met.

**Task**  
I had to redesign the feature engineering and model training workflow on Databricks so that we could ingest streaming click data, update models every hour, and serve predictions with sub‑50 ms latency while keeping costs under $5K/month.

**Action**  
First, I switched from batch‑only Spark jobs to a Delta Live Tables (DLT) pipeline using Python UDFs for on‑the‑fly feature extraction. I leveraged Databricks Runtime 14’s vectorized UDFs and GPU support to accelerate the matrix factorization step with Spark’s MLlib ALS tuned for sparse data. For model serving, I deployed a Photon‑optimized inference endpoint via Databricks SQL Warehouse, exposing a lightweight REST API that caches top‑k recommendations in Redis. I also set up automated Hyperopt sweeps across cluster sizes and feature sets to find the sweet spot between accuracy (NDCG@10 = 0.32) and cost.

**Result**  
The new pipeline reduced prediction latency from 200 ms to 35 ms, handled a 12× traffic increase without scaling costs, and improved conversion rate by 7%. I learned how Databricks’ Delta Lake, DLT, and Photon engine can be orchestrated to meet stringent ML production requirements while staying cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
