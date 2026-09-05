---
qid: ing_45ed87b3b8__star__local
question: 'Explain: Now normally the choice of database depends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 383
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:27-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at a fintech startup, we were building an anomaly‑detection model for credit card transactions. The training pipeline ingested millions of daily events, and our initial prototype used PostgreSQL to store raw logs.  

**Task** – I needed to redesign the storage layer so that the ML team could pull large batches quickly while still supporting real‑time feature generation for online scoring.  

**Action** – I evaluated a few options: (1) keep Postgres but add sharding and index tuning; (2) switch to a columnar store like ClickHouse for analytics workloads; (3) adopt Apache Kafka Streams with RocksDB for low‑latency reads. After benchmarking, I chose ClickHouse because it offered sub‑second aggregation on 50 M rows per day and integrated natively with our Spark training jobs. I wrote ingestion scripts to stream from Kafka into ClickHouse, defined materialized views for the most frequent feature sets, and set up automatic compression via ZSTD to reduce storage cost by ~30%.  

**Result** – Training data retrieval time dropped from 12 min to under 30 sec per epoch, cutting model training cycles from 4 hrs to 45 min. Online scoring latency improved by 40%, enabling us to launch the fraud‑detection service two weeks ahead of schedule. I learned that choosing a database is not just about capacity; it must align with query patterns and downstream ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
