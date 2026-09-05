---
qid: ing_f1495d3a00__star__local
question: 'Explain: Database Design Tips | Choosing the Best Database in a System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce platform that had to serve 2 million active users daily and process 10 k events per second. The existing monolithic SQL database couldn’t handle the read/write load, and our ML model required low‑latency feature lookups.

**Task** – I needed to design a new data layer that could store user interaction logs, product metadata, and real‑time clickstream data while supporting fast feature retrieval for the inference pipeline, all within a 50 ms latency SLA.

**Action** – I evaluated relational vs. NoSQL options: PostgreSQL for structured catalog data, Redis Streams for ingestion pipelines, and Apache Cassandra for high‑write throughput on user activity logs. I introduced a materialized view layer in Cassandra to precompute feature vectors (e.g., recent purchase history) and used Kafka Connect to sync changes back to Elasticsearch for search‑friendly queries. I also implemented time‑series partitioning and TTLs to keep the dataset fresh without manual purging.

**Result** – The new architecture cut query latency from 300 ms to 35 ms, increased throughput by 5×, and reduced operational costs by 30 %. I learned that choosing a hybrid stack—combining SQL for consistency, NoSQL for scalability, and search engines for retrieval—is often the most pragmatic approach in ML‑heavy systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
