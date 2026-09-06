---
qid: ing_1602f8464a__think__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 611
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:10:41-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
- The question asks for a *comparison* of querying a document by its unique identifier in **Cassandra** vs **MongoDB**.  
- Assume both databases are used in their “typical” configurations (CQL for Cassandra, Mongo shell/driver for MongoDB).  
- We’ll focus on read performance, consistency guarantees, schema flexibility, and operational considerations.

**2️⃣ Adopt a comparison framework**  
| Dimension | Cassandra | MongoDB |
|-----------|-----------|---------|
| Data model & storage | Wide‑column store, SSTables | Document store (BSON) |
| Query pattern | `SELECT * FROM table WHERE id = ?` | `findOne({_id: …})` |
| Indexing strategy | Primary key on partition column; secondary indexes are expensive | Single‑field `_id` index is built-in and highly optimized |
| Consistency & tuning | Tunable consistency (`QUORUM`, `LOCAL_QUORUM`) | Default read/write concern “majority”; can be tuned |
| Latency characteristics | Low latency at scale, but higher if secondary indexes used | Very low for `_id` queries; performance degrades with large collections without proper sharding |

**3️⃣ Step‑by‑step reasoning**  
1. **Identify the primary key in each system** – Cassandra uses a partition key (often the ID); MongoDB’s `_id`.  
2. **Examine how the query is executed** – In Cassandra, the CQL engine looks up the partition; in MongoDB, the B-tree index on `_id` is used.  
3. **Consider consistency models** – Cassandra allows you to choose read/write consistency per operation; MongoDB’s default majority may introduce higher latency but stronger guarantees.  
4. **Think about scaling** – Cassandra can distribute partitions across nodes with minimal overhead; MongoDB needs sharding for very large collections, and the `_id` index remains efficient if shard key is chosen wisely.  
5. **Account for operational costs** – Cassandra’s compaction and repair processes impact read latency; MongoDB’s WiredTiger engine handles caching differently.

**4️⃣ Common traps to avoid**  
- Assuming “document” semantics apply directly to Cassandra (it’s a row, not a JSON doc).  
- Overlooking that Cassandra secondary indexes are not as efficient for point queries.  
- Ignoring the impact of consistency level changes on latency.  
- Forgetting that MongoDB’s `_id` is always indexed; Cassandra requires you to define the primary key.

**5️⃣ Sanity‑check & communicate**  
Re‑read the table, ensure each dimension logically contrasts the two systems.  
When explaining: start with the data model, then walk through query execution, highlight consistency differences, and finish with scaling/operational notes. This keeps the answer structured and easy to follow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
