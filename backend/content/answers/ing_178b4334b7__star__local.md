---
qid: ing_178b4334b7__star__local
question: 'Explain: Built on Hadoop — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 398
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:56-05:00'
sources: []
---

**Situation** – At my last company we had a recommendation engine that was generating millions of user‑item interactions per day, but our training pipeline stalled because the feature store was stored in flat CSVs on HDFS. The latency to fetch features for a batch job was over 30 seconds, and every model retraining cycle took more than two days.

**Task** – I needed to redesign the feature ingestion and retrieval layer so that the nightly training jobs could pull features in under five seconds while still supporting millions of concurrent reads during inference.

**Action** – I migrated the feature store to **Apache HBase**, a NoSQL columnar database built on top of Hadoop. First, I defined a schema with row keys as “userID#timestamp” and columns for each feature family (demographics, recent interactions). Using Apache Spark’s `hbase-spark` connector, I wrote an ETL job that streamed the raw logs into HBase via HFile bulk load, which is 10× faster than RPC writes. For training, I leveraged HBase’s `Get` and `Scan` APIs in PySpark to pull batched feature vectors directly into a Spark DataFrame. Finally, I set up HBase region split heuristics based on user activity patterns to keep hot regions balanced.

**Result** – The data ingestion time dropped from 2 hours to under 10 minutes, and the nightly training pipeline now completes in 3 hours instead of 48. Feature retrieval latency during inference fell below 5 ms per request, boosting our recommendation click‑through rate by 12 %. I learned that combining Hadoop’s scalability with HBase’s low‑latency reads can dramatically accelerate ML workflows when data volume and velocity are high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
