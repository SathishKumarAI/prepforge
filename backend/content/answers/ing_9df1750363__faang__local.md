---
qid: ing_9df1750363__faang__local
question: 'Explain: Search Indexing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 518
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:51:21-05:00'
sources: []
---

**Clarify**  
We’re building a real‑time search index that must stay in sync with an operational database. The challenge is to capture every data change (insert, update, delete) efficiently and feed it into the indexing pipeline without polling or full refreshes. Key assumptions: *ACID guarantees on source DB*, *low latency (< 1 s)*, *high throughput (≥ 10k ops/s)*, *fault tolerance*, and *eventual consistency with search service*.

**Approach**  
1. **CDC source** – use a log‑based extractor (Debezium + Kafka Connect) that streams binlog events from MySQL/PostgreSQL into topics.  
2. **Change stream consumer** – a stateless worker reads events, normalizes them to an “indexable” payload, and writes to a dedicated “index” topic.  
3. **Indexer** – a scalable cluster (e.g., Elasticsearch) consumes the topic, applies transformations (tokenization, stemming), updates documents or deletes on key.  
4. **Exactly‑once semantics** – commit Kafka offsets only after successful index update; use idempotent writes to avoid duplicates.  
5. **Monitoring & backpressure** – expose lag metrics, auto‑scale consumers, and pause production if the search cluster is saturated.

**Depth**  
- *Complexity*: CDC extraction O(1) per row; consumer throughput ≈ event size × ops/s.  
- *Trade‑offs*: Log shipping reduces load on DB but adds replication lag; idempotency simplifies recovery at cost of extra metadata (e.g., sequence numbers).  
- *Fault tolerance*: Kafka guarantees durability; consumers replay from last committed offset after failure.

**Edge Cases**  
- Schema evolution: handle column drops/adds by maintaining a schema registry.  
- Bulk deletes/updates: batch them to reduce index churn.  
- Network partitions: ensure at‑least‑once delivery with idempotent indexing.

**Optimize & Communicate**  
To cut latency, push events directly from the CDC connector into the search cluster via a lightweight HTTP client (Kafka Streams or KSQL). For large volumes, shard the index and use bulk APIs to amortize network overhead. In discussions, I’d emphasize our 99.9 % SLA achieved by decoupling change capture from indexing, using Kafka’s durability, and designing idempotent pipelines for robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
