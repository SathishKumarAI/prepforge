---
qid: ing_bc3acc78d9__star__local
question: 'Explain: Common Use Cases — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:32-05:00'
sources: []
---

**Situation:**  
In my last role I led the migration of a legacy data warehouse for a retail chain that was generating 5 TB of sales logs per day. The business required real‑time inventory insights to drive dynamic pricing, but our ETL batch jobs ran nightly and caused stale data in the recommendation engine.

**Task:**  
I had to design a scalable Change Data Capture pipeline that would ingest row‑level changes from the operational database, propagate them to our feature store, and keep the machine‑learning models fresh without overloading downstream services.

**Action:**  
I implemented Debezium on Kafka Connect to stream MySQL binlog events into Apache Kafka topics. Using ksqlDB I transformed raw change records into a clean “sales_delta” stream, applied deduplication with windowed aggregations, and then wrote the results to an HDFS‑backed Delta Lake table via Spark Structured Streaming. The feature store (Feast) consumed the Delta Lake tables through a REST API that our inference services called every 30 seconds. I also added a Prometheus exporter on the Kafka Connect cluster to monitor lag and set alerting thresholds.

**Result:**  
Latency dropped from 24 hours to under 2 minutes, giving the recommendation engine real‑time price signals. Model accuracy improved by 4 % YOY, translating into an estimated $1.2M lift in revenue for Q3. I learned that combining CDC with stream processing and a robust monitoring layer is key to keeping ML pipelines timely and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
