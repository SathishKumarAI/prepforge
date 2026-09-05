---
qid: ing_a8a76f0dac__star__local
question: 'Explain: Where Elasticsearch Shines — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 368
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:25-05:00'
sources: []
---

**Situation:**  
At my previous company we had a product‑analytics platform that collected millions of user events per day. Our relational database was great for transactional integrity, but every time we ran dashboards or built search features the queries became slow and the team struggled to keep up with real‑time requirements.

**Task:**  
I needed to design a system that could deliver instant search and analytics on those event streams while keeping the primary data store reliable and consistent. The goal was to reduce dashboard latency from 15 seconds to under 2 seconds for most queries, without compromising our ACID guarantees.

**Action:**  
I introduced Elasticsearch as an append‑only index built from Kafka streams. Using Logstash we ingested events in near real‑time, mapped them with a carefully crafted schema (keyword fields for filtering, text analyzers for full‑text search), and enabled shard allocation to keep hot data on SSDs. For aggregations I leveraged the `terms` aggregation with `composite` pagination to handle high cardinality dimensions. Meanwhile, all writes still went to PostgreSQL; Elasticsearch was only queried for search, faceting, and time‑series dashboards.

**Result:**  
Dashboard load times dropped from 15 seconds to 1.8 seconds on average, and the search component handled 10× more queries per second than before. The team now uses ES for all full‑text and analytical workloads while PostgreSQL remains the source of truth—demonstrating that Elasticsearch shines as a fast, scalable search/analytics engine but not as a primary transactional store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
