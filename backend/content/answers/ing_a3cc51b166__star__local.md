---
qid: ing_a3cc51b166__star__local
question: 'Explain: AP (Availability and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 324
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:58-05:00'
sources: []
---

**Situation:**  
While leading a real‑time recommendation pipeline at a streaming media company, we migrated the user preference model from a single server to a distributed Spark cluster on Kubernetes. During peak traffic, a network split caused two pods to lose communication with each other, threatening to drop live updates.

**Task:**  
I had to ensure the inference service stayed available for users while handling the partition, without compromising model consistency or latency beyond 200 ms.

**Action:**  
First, I enabled Cassandra’s “AP” consistency mode on the user profile store, allowing reads/writes from either node during the split. Next, I rewrote the Spark job to use a stateless, event‑driven architecture with Kafka Streams; each partition processed its own slice of data and persisted interim results to a local RocksDB instance. Finally, I introduced an exponential back‑off retry for cross‑node syncs and set up Prometheus alerts to trigger automatic failover if latency spiked.

**Result:**  
The system stayed 100 % available during the outage; user-facing latency increased by only 12 ms on average, and we logged no model drift. The experience taught me that choosing AP consistency with graceful degradation can keep ML services responsive under network partitions, and that stateless processing + local caching is key to minimizing impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
