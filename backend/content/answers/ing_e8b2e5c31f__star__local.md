---
qid: ing_e8b2e5c31f__star__local
question: 'Explain: Timestamp-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:29-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building an analytics pipeline for a fintech app that needed near‑real‑time fraud detection. The data lake was populated by nightly batch loads from the transactional database, but our models required fresh updates every 10 minutes.

**Task**  
I had to design a change data capture (CDC) system that could ingest only new or updated rows efficiently, using timestamps as the key trigger, and push them into the model training queue without duplicating work.

**Action**  
I implemented a lightweight CDC service in Python that ran on AWS Lambda. It queried the source MySQL database for rows where `updated_at` was greater than the last captured timestamp stored in DynamoDB. Using the `SELECT ... FOR UPDATE SKIP LOCKED` pattern, it locked and streamed changes via Kinesis Data Streams to an S3 landing zone. I added a checksum column to detect idempotent writes and used Redshift Spectrum to load only new partitions into the data warehouse. The system logged each batch’s start/end times and throttled requests with exponential backoff to avoid DB overload.

**Result**  
The CDC pipeline reduced data lag from 24 hours to under 12 minutes, increased model retraining frequency by 3×, and cut storage costs by 18% through deduplication. I learned that timestamp‑based CDC is simple yet powerful when combined with proper locking, idempotency checks, and cloud-native streaming services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
