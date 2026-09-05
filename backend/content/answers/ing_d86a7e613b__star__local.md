---
qid: ing_d86a7e613b__star__local
question: 'Explain: The Interview Question — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 339
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:51-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the product team needed to provide instant fraud‑alert filtering for thousands of transaction records per minute. Our existing batch search pipeline lagged by several seconds, causing delayed alerts and customer dissatisfaction.

**Task:**  
I was tasked with building a real‑time search service that could ingest streaming data, index it instantly, and return top‑N suspicious transactions in under 200 ms, all while scaling to 10 k queries per second.

**Action:**  
First, I chose Apache Flink for stream ingestion and used its CEP library to detect patterns. For indexing, I set up a hybrid approach: a time‑partitioned RocksDB snapshot for recent data (≤5 min) and an Elasticsearch cluster for longer retention. I implemented a custom scoring function in Java that combined transaction amount, velocity, and device fingerprint into a weighted risk score. To meet latency, I pre‑computed the score during ingestion and stored it as a field; queries then used Elasticsearch’s scripted fields to filter on the fly. I also introduced a tiered caching layer with Redis for the hottest 1 % of queries.

**Result:**  
Latency dropped from ~2 s to <150 ms, and we processed 12 k QPS without outages. The fraud‑alert accuracy improved by 18 %, reducing false positives. I learned how to blend stream processing, in‑memory databases, and search engines to meet strict real‑time SLAs while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
