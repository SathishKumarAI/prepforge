---
qid: ing_73d35e9b9c__star__local
question: 'Explain: Sources — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 352
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:05-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a recommendation engine for our e‑commerce platform. The product manager flagged that conversion rates on the “Related Products” page were only 2 % and wanted to boost them with AI.

**Task**  
I had to build a model that could predict which items each shopper would be most interested in, using all available data streams while keeping inference latency under 100 ms per request.

**Action**  
First I mapped out the sources: click‑stream logs from our CDN (Kafka), transaction history in Redshift, and real‑time inventory status via a gRPC service. I used Airflow to orchestrate nightly ETL jobs that joined these tables into a unified fact table in Snowflake. For feature engineering I leveraged Spark with MLlib to compute user embeddings from click logs and product embeddings from purchase vectors. During model training I experimented with a hybrid matrix‑factorization + XGBoost pipeline, tuning hyperparameters via Optuna. To satisfy latency constraints, I distilled the final ensemble into a lightweight TensorFlow Lite graph and deployed it on our edge servers using Kubernetes.

**Result**  
The new recommendation engine lifted click‑through rates from 2 % to 5.8 % (a 190 % increase) and boosted conversion by 12 %. I learned that rigorous source integration, coupled with a careful trade‑off between model complexity and inference speed, is key to delivering business impact in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
