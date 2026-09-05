---
qid: ing_9df1750363__star__local
question: 'Explain: Search Indexing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 326
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:07-05:00'
sources: []
---

**Situation:**  
At my previous company we built a product‑recommendation engine that relied on a Solr index of every user’s purchase history. The legacy batch pipeline ran nightly and lagged behind real sales by 12 hours, so new products never appeared in search until the next run.

**Task:**  
I was tasked with implementing a Change Data Capture (CDC) system to keep the search index fresh while keeping latency under two minutes and avoiding over‑indexing churn.

**Action:**  
I set up Debezium on our PostgreSQL database to stream write‑ahead logs into Kafka. A lightweight consumer, written in Go, parsed only `INSERT`/`UPDATE` events for the `orders` table and emitted a compact JSON payload (user_id, product_id, timestamp). The consumer then used Solr’s atomic update API: it sent partial documents with an “add” operation and a version field to prevent duplicate updates. To handle bursts, I throttled messages per second and persisted offsets in ZooKeeper so the system could recover without re‑processing.

**Result:**  
Indexing latency dropped from 12 hours to under 90 seconds for new orders, boosting click‑through rates by 18% during peak sales. The CDC pipeline also cut nightly batch load by 70%, freeing compute resources for other experiments. I learned how to balance streaming throughput with idempotent updates and the importance of versioning in search indices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
