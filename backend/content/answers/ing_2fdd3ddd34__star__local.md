---
qid: ing_2fdd3ddd34__star__local
question: 'Explain: Databricks — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 409
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:13-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an end‑to‑end recommendation pipeline for a video streaming service that had just hit 20 M monthly active users. The existing batch jobs ran on Spark 2.x and produced a 15% lag between data ingestion and model inference, which caused stale recommendations during peak hours.

**Task** – I needed to cut the latency from 4 hours down to under 30 minutes while keeping cost under $5k/month, and make sure the new pipeline could ingest real‑time clickstream events for live personalization.

**Action** – I migrated the entire workflow to Databricks Unified Analytics Platform. First, I set up a Delta Lake table with auto‑compaction and ACID guarantees, then built a Structured Streaming job that ingested Kafka events in micro‑batches of 5 seconds. For feature engineering I leveraged Spark SQL UDFs written in Scala to compute session embeddings on the fly. The model itself was a LightGBM classifier exported as ONNX; I deployed it via Databricks MLflow, using GPU clusters for inference and automatically rolling back if AUC dropped below 0.82. Finally, I scheduled an automated nightly retraining job with Hyperopt hyper‑parameter sweeps, all orchestrated by Airflow DAGs integrated into Databricks Jobs.

**Result** – Latency dropped to 18 minutes, reducing stale recommendation impact by 93%. The pipeline handled a peak of 3M events per minute without exceeding the budget. I learned that combining Delta Lake’s ACID transactions with Structured Streaming in Databricks can deliver real‑time ML at scale while keeping operations simple and cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
