---
qid: ing_675e6fb0e5__star__local
question: 'Explain: State Management: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:30-05:00'
sources: []
---

**Situation:** In my last role I was building a real‑time fraud detection system for a fintech client. The existing batch model lagged by hours and missed many fraudulent transactions.

**Task:** I had to redesign the pipeline so that new transaction data could be scored within seconds while still retaining historical context for feature engineering and model retraining.

**Action:** First, I mapped out the state requirements: we needed a rolling window of recent user behavior (time‑sliced) and cumulative aggregates like total spend per day. For batch processing, I used Spark to ingest nightly logs, compute features over the last 24 h, and update a Parquet table in S3. For streaming, I set up Kafka streams with KSQL to maintain stateful tables—using windowed joins for the rolling window and materialized views for cumulative sums. The stream pipeline fed into a TensorFlow Serving endpoint that returned fraud scores instantly. I added checkpointing with Flink’s managed state to guarantee exactly‑once semantics.

**Result:** Latency dropped from 45 min to <2 s per transaction, boosting detection rate by 18 % and reducing false positives by 12 %. The exercise taught me that batch is great for large‑scale feature engineering, while stream processing must maintain low‑latency stateful aggregates—choosing the right tool hinges on the time sensitivity of each metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
