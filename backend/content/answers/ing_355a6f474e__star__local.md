---
qid: ing_355a6f474e__star__local
question: 'Explain: Aggregation Framework — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 364
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:52-05:00'
sources: []
---

**Situation:**  
In my last role I led a data‑driven feature for a global e‑commerce platform that required real‑time sales analytics across millions of orders. The existing stack was Cassandra for write‑heavy ingestion, but the BI team insisted on using MongoDB’s aggregation pipeline to generate daily reports and dashboards.

**Task:**  
I had to design a hybrid pipeline that could pull data from both stores, perform complex aggregations (group by product category, compute moving averages), and deliver results in under 30 seconds for the BI dashboard.

**Action:**  
First I mapped Cassandra’s wide‑row model into a denormalized table with materialised views so that `GROUP BY` on time buckets could be done via a secondary index. For MongoDB, I leveraged `$group`, `$lookup`, and `$project` stages, tuning batch sizes and using the `$merge` stage to write back summary collections. I wrote a microservice in Python that used the Cassandra driver’s paging API to stream chunks into MongoDB for temporary staging, then executed the aggregation pipeline on those staged documents. To keep latency low, I pre‑aggregated hourly slices in Cassandra and refreshed them nightly in MongoDB.

**Result:**  
The hybrid solution cut report generation time from 12 minutes (pure Cassandra map‑reduce) to under 25 seconds, with 95% of queries served from the MongoDB summaries. I learned that while Cassandra excels at high‑throughput writes, its aggregation capabilities are limited compared to MongoDB’s expressive pipeline; a small staging layer can combine their strengths effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
