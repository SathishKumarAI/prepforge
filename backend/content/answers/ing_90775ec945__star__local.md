---
qid: ing_90775ec945__star__local
question: 'Explain: Use Cases — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 357
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:42-05:00'
sources: []
---

**Situation** – While leading the fraud‑detection pipeline at a fintech startup, we were ingesting ~10 GB of transaction logs per day from our payment gateway. The data needed to be stored in real time for downstream feature engineering and model scoring.

**Task** – Build a scalable, low‑latency storage layer that could support sub‑second reads for the ML inference service while allowing efficient batch aggregation for retraining.

**Action** – I chose Apache HBase as our NoSQL backend because of its columnar design and strong consistency. First, I designed a schema with a composite row key (user_id#timestamp) to enable range scans on time windows. Using the Java client, I implemented bulk put operations via MapReduce jobs that streamed logs from Kafka into HBase in micro‑batches. For feature extraction, I wrote a Spark job that scanned HBase tables using `TableInputFormat`, aggregating counts of suspicious transactions per user over rolling 24‑hour windows. To accelerate inference, I exposed an HBase REST API behind our load balancer and cached hot rows in Redis for the model serving layer.

**Result** – The ingestion pipeline handled peak loads of 15 k TPS with <200 ms latency. Feature generation completed within 5 minutes per day, cutting retraining time from 2 hours to under 30 minutes. Our fraud‑detection accuracy improved by 12% over the previous relational approach. I learned that careful key design and batch processing in HBase can bridge real‑time ingestion with large‑scale ML feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
