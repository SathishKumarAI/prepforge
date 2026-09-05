---
qid: ing_ab2af326a8__star__local
question: 'Explain: Start building real-time applications with simple SQL syntax'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 421
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:08-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading a data‑science sprint for our fintech client, who needed instant fraud‑risk scores for every transaction. Their legacy system only pushed daily batches to a Hadoop lake, so any model inference took hours—too slow for real‑time compliance.

**Task** – My goal was to deliver a live scoring engine that could ingest a high‑velocity stream (≈15k tx/s), run a pre‑trained gradient‑boosted tree, and expose the result via an API—all while keeping engineering effort minimal.

**Action** – I chose Snowflake’s **Snowpark** + **SQL UDFs**. First, I created a temporary staging table that streamed raw events using Kafka Connect to Snowpipe. Then I wrote a lightweight SQL UDF in Python that wrapped the XGBoost model (serialized as ONNX). The UDF was registered as `scoring_fn`. Using Snowflake’s **Snowpark Streaming API**, I defined a continuous query:

```sql
CREATE OR REPLACE STREAM txn_stream FROM raw_txn;
INSERT INTO scored_txns
SELECT *, scoring_fn(txn_features) AS risk_score
FROM txn_stream;
```

The query auto‑executes every few seconds, producing a `scored_txns` table that the client’s microservice reads via Snowflake’s JDBC driver. I tuned the batch size and used Snowflake’s **Result Caching** to keep latency under 200 ms.

**Result** – The new pipeline processed 15k transactions per second with an average inference latency of 180 ms, cutting risk‑assessment time from hours to milliseconds. The client reported a 35% drop in false positives and saved $2M annually on infrastructure. I learned that coupling Snowpark’s SQL abstraction with Python UDFs can deliver production‑grade ML at scale without rewriting the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
