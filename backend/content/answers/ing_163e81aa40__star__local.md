---
qid: ing_163e81aa40__star__local
question: 'Explain: Search engines and databases perform differently'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 312
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:06-05:00'
sources: []
---

**Situation:** In the fall of 2023 I was tasked with building a product discovery feature for our e‑commerce platform, which needed to surface relevant items in under 200 ms for millions of users.

**Task:** I had to decide whether to use a full‑text search engine (Elasticsearch) or a relational database (PostgreSQL) with built‑in LIKE queries to power the search functionality and still meet latency targets.

**Action:** I benchmarked both options by indexing 2 million product records. With Elasticsearch, I leveraged inverted indexes, n‑gram analyzers, and shard replication to distribute load; queries returned results in ~70 ms on a single node. For PostgreSQL, even with partial indexes and pg_trgm, latency hovered around 250 ms under realistic traffic, and scaling required sharding the table manually. I also compared update throughput: Elasticsearch handled bulk re‑indexing of new products at 1k docs/sec, while PostgreSQL lagged behind due to row‑level locking.

**Result:** Switching to Elasticsearch cut search response time by 70% and increased page views per session by 12%. I learned that engines are optimized for rapid, fuzzy text retrieval using inverted indexes, whereas databases excel at structured joins and transactional consistency. Choosing the right tool is about matching its data model to the query pattern and performance envelope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
