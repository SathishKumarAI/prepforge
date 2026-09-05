---
qid: ing_0beaa714f1__fp__local
question: 'Explain: And when you store data in Amazon — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 530
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:18-05:00'
sources: []
---

### Choosing a NoSQL store in AWS – a principled view

When you *store data* in the cloud, you are really solving an **information‑flow bottleneck**: how to make a set of entities accessible with minimal latency while keeping consistency guarantees that match your business logic.  
AWS gives three canonical NoSQL options, each tuned for a different point on this spectrum:

| Store | Core abstraction | Latency‑consistency trade‑off | Use case |
|-------|------------------|------------------------------|----------|
| **DynamoDB** | Key‑value / document (single‑item) | *Eventual* → *Strong* per‑partition, tunable read/write capacity | High‑throughput, globally distributed key‑based lookups (e.g., session state). |
| **DocumentDB (MongoDB API)** | Rich JSON documents with secondary indexes | Strong consistency, multi‑region replication | Workloads needing ad‑hoc queries or aggregation on nested data (e.g., e‑commerce catalogs). |
| **Elasticsearch Service** | Full‑text search index | Near‑real‑time indexing, eventual consistency of query results | Search, analytics, log ingestion where the cost of latency outweighs strict ordering. |

#### Why this mapping works
1. **Data shape vs. query pattern**: Key‑value stores are optimal when you *know* the key; document stores shine when queries need to probe nested fields; search engines excel when you need full‑text or faceted filtering.
2. **Consistency as a cost of speed**: DynamoDB’s per‑partition tunable consistency reflects that keeping every replica in sync is expensive; if your application can tolerate a few milliseconds of drift, you gain massive throughput.
3. **Operational simplicity**: Each service abstracts the underlying sharding and replication, letting you focus on modeling rather than cluster plumbing.

#### Non‑obvious insight
The *real* differentiator isn’t just “document vs key‑value”; it’s how your workload partitions over keys. If most reads hit a small hot spot (e.g., a popular product), DynamoDB can scale that partition with minimal provisioning, whereas DocumentDB would need to replicate the entire collection across nodes, incurring unnecessary I/O. Thus, profiling access patterns first—counting distinct keys and their read ratios—often tells you which NoSQL engine will actually pay off in cost and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
