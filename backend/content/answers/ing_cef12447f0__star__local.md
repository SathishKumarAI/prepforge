---
qid: ing_cef12447f0__star__local
question: 'Explain: Data Ingestion: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 304
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:00-05:00'
sources: []
---

**Situation:** At my previous role, we were migrating a legacy fraud‑detection system to real‑time analytics. The old batch pipeline processed transaction logs nightly, causing alerts to be delivered with a 24‑hour lag.

**Task:** I had to design an ingestion layer that could handle both the existing bulk data for model training and continuous streams for live scoring, while keeping latency below five seconds for high‑volume periods.

**Action:** I built a dual‑path architecture using Kafka for stream ingestion and Apache Spark Structured Streaming for near‑real‑time processing. For batch workloads, I leveraged Spark’s DataFrame API to read Parquet files from S3 nightly, applying windowed aggregations and updating the training dataset. For streams, I implemented event‑driven microservices that consumed Kafka topics, performed lightweight feature extraction in Scala, and pushed results to a Redis cache for low‑latency lookup by the scoring engine. I also added backpressure handling and replay capabilities to ensure data consistency during outages.

**Result:** The new system reduced alert latency from 24 hours to under three seconds on average, increased detection accuracy by 12% due to fresher features, and cut infrastructure costs by 18% by consolidating workloads onto a single Spark cluster. I learned that choosing the right ingestion pattern hinges on balancing latency, throughput, and operational complexity—batch for heavy analytics, stream for real‑time decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
