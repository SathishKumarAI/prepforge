---
qid: ing_1602f8464a__fp__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 503
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:09-05:00'
sources: []
---

**From the ground up**

When a client asks *“give me the document whose ID is X”*, two questions arise:

1. **How do we locate X?**  
   - In Cassandra, every row key (the partition key) is hashed by the Murmur3 algorithm to a token ring position. A read request is routed directly to the node that owns that token range. The lookup is O(1) in terms of network hops, but the data must be stored across replicas according to the replication factor.  
   - In MongoDB, a *primary key* (`_id`) is indexed by a B‑Tree on disk and cached in RAM via an LSM tree. A read goes to the primary node that holds the shard containing X; if it’s a replica set, the driver may route to any member, but typically the primary handles writes.

2. **How do we deliver it?**  
   - Cassandra returns the *raw* row bytes and lets the client deserialize into columns (or wide rows). The schema is flexible; missing columns are simply absent.  
   - MongoDB streams a BSON document that already contains field names, preserving the exact shape requested.

**Why the differences matter**

- **Consistency vs Latency:** Cassandra’s eventual consistency means you can read from any replica and get *an* answer quickly, but you may see stale data. MongoDB’s default read‑your‑writes guarantees you’ll see your own writes on the primary, at the cost of a small extra round‑trip.  
- **Scalability vs Flexibility:** Cassandra’s partitioning gives linear scalability for high write throughput; MongoDB’s shard key must be chosen carefully to avoid hotspots, but its document model handles nested structures natively.

**Non‑obvious insight**

A common misconception is that “Cassandra is faster because it doesn’t do joins.” In reality, the *token ring* and consistent hashing make Cassandra a **single‑hop lookup**: the network latency dominates performance. MongoDB’s B‑Tree traversal is negligible compared to routing overhead on large clusters. Thus, for pure key‑value reads, Cassandra wins only when you need ultra‑low per‑node latency across massive scale; otherwise MongoDB’s richer query language and consistency model often provide a better overall experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
