---
qid: ing_e738b5e7af__fp__local
question: 'Explain: Features of Cassandra — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 517
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:10:55-05:00'
sources: []
---

**Why compare Cassandra to MongoDB?**  
Both are NoSQL stores, but they solve different *scalability problems*.  
*MongoDB* is a **document‑oriented** database that shines when you need flexible schemas and rich queries over relatively small clusters.  
*Cassandra*, on the other hand, is a **wide‑column store** engineered for linear scalability and high write throughput across geographically dispersed data centers.

| Feature | Cassandra | MongoDB |
|---------|-----------|--------|
| **Data model** | Rows with variable columns in column families; each row has a primary key (partition + clustering). | JSON‑like documents; collections hold arbitrary fields. |
| **Partitioning** | Token ring: consistent hashing distributes rows by partition key; each node owns a range of tokens. | Sharding via hashed or ranged keys; shard key determines placement. |
| **Consistency** | Tunable *C*onsistency (Quorum, One, All) with eventual‑strong guarantees; linearizable reads require ALL. | Default *eventual*, but offers *read/write concerns* (majority, local). |
| **Write path** | Append‑only LSM tree → memtable → SSTables + commit log; no in‑place updates. | In‑memory buffer + on‑disk B+tree; supports atomic document updates. |
| **Scalability** | Add nodes → data automatically rebalanced; writes stay local to partition key node. | Adds shards, but requires manual resharding or auto‑sharding with limitations. |
| **Fault tolerance** | Replication factor + hinted handoff; any node can recover from failure by replaying hints. | Replica set voting; primary–secondary replication; automatic failover. |

### Non‑obvious insight
Cassandra’s *wide‑column* design gives it a *natural column‑family locality*: all rows that share the same partition key are stored together on the same nodes, which means **range queries over clustering columns** (e.g., “last 100 events for user X”) can be served without cross‑node traffic. MongoDB’s flexible schema doesn’t guarantee such locality; a range query may touch many shards unless carefully indexed.

Thus, choose **Cassandra** when you need linear write scalability and predictable partitioning across datacenters; pick **MongoDB** for richer querying on semi‑structured data with moderate scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
