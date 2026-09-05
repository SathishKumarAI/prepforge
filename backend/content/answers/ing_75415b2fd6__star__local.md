---
qid: ing_75415b2fd6__star__local
question: 'Explain: Data flow — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 368
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:09-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our marketing team was drowning in raw transaction logs: over 500 GB daily from the payment gateway and an additional 200 GB of CRM events. The product managers needed a single, high‑quality customer profile to drive personalized offers, but we had no unified view.

**Task** – Build a “Customer Distillation Pipeline” that ingests raw logs, cleans and enriches them, aggregates key metrics per user, and outputs a ready‑to‑use dataset for downstream analytics—all within a 12‑hour window after each ingestion cycle.

**Action** – I designed an Apache Kafka stream that buffers the raw events and feeds them into a Spark Structured Streaming job. The job performs incremental deduplication, schema evolution handling, and joins with static demographic tables stored in Delta Lake. For enrichment, we called an internal microservice that enriches users with credit‑score data via gRPC. I added a watermarking strategy to keep state bounded and used vectorized UDFs for fast aggregation of spend, frequency, and churn risk scores. Finally, the processed dataset is written to a partitioned Parquet lakehouse on S3, exposing a read‑optimized view through Amazon Athena.

**Result** – The pipeline cut data latency from 48 hours to under 12, reduced storage costs by 30% through efficient compression, and empowered the marketing team to launch two targeted campaigns that increased upsell revenue by 18% in the first quarter. I learned how to balance real‑time ingestion with batch‑style enrichment while keeping state manageable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
