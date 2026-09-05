---
qid: ing_4dd13fd8be__star__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 351
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:18-05:00'
sources: []
---

**Situation** – In a product launch for our social media app, the feature‑team needed a live comment feed that could handle millions of concurrent users while keeping latency below 100 ms. The existing global cache (Redis) was becoming a bottleneck because every comment write triggered a full invalidation across all nodes.

**Task** – Design a system that lets each user’s device “write locally” to its edge server, yet ensures all clients can “read globally” the latest comments in real time without overwhelming the central data store.

**Action** – I introduced an event‑driven architecture using Kafka for write streams and a local write buffer (LwM) on each edge node. When a user posts a comment, it’s appended to the LwM and immediately forwarded as a Kafka record to the “Comment Aggregator” service. The aggregator merges events per thread into a compact snapshot stored in Cassandra. Edge nodes subscribe to the relevant Kafka topics; they replay recent events from the buffer and pull the latest snapshot from Cassandra for reads. We added a TTL on local buffers (30 s) and used Bloom filters to avoid duplicate processing. For global reads, clients request the snapshot via gRPC, guaranteeing eventual consistency within 200 ms.

**Result** – Post‑deployment, write latency dropped to 12 ms, read latency stayed under 80 ms even at peak load, and the system scaled from 1 M to 10 M concurrent users without additional Redis shards. I learned that decoupling local writes from global reads via streaming can dramatically reduce contention while preserving real‑time freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
