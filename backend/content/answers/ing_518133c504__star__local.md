---
qid: ing_518133c504__star__local
question: 'Explain: Conclusion — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 354
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:18-05:00'
sources: []
---

**Situation:**  
I was building a real‑time recommendation engine for an e‑commerce platform that had to ingest millions of user interactions per day and serve predictions with <100 ms latency.

**Task:**  
Decide between Cassandra and MongoDB as the backend store for feature vectors, session logs, and model artifacts while keeping write throughput high and ensuring eventual consistency for read‑heavy analytics.

**Action:**  
I mapped out our data model: a wide‑column key‑value layout (user_id → timestamp → feature_vector) with heavy writes and time‑series queries. I benchmarked Cassandra’s tunable consistency (QUORUM vs ONE), noting its linear scalability on commodity hardware and built‑in replication across nodes, which matched our need for high write throughput. MongoDB’s document model suited nested JSON, but its default single‑document ACID guarantees required sharding for 10 GB per shard, leading to complex rebalancing. I also evaluated query patterns: Cassandra’s CQL allowed efficient range scans on timestamps; MongoDB’s aggregation pipeline was slower for our large time windows.

**Result:**  
I chose Cassandra, achieving a 3× improvement in write latency and 97% uptime during peak traffic. The system now handles 15 M events per hour with <90 ms read latency. I learned that choosing the right database hinges on data access patterns, consistency needs, and operational overhead rather than just feature lists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
