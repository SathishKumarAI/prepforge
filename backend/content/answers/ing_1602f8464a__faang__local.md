---
qid: ing_1602f8464a__faang__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 655
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:28-05:00'
sources: []
---

**Clarify**  
You want to fetch a single document by its unique identifier and compare how this is done in **Cassandra** (wide‑column store) versus **MongoDB** (document store).  
Assumptions: *ID* is the primary key in Cassandra; MongoDB uses `_id`.  Both systems are already populated, no write contention.

---

**Approach**  

1. Identify the lookup pattern and its cost in each engine.  
2. Show the query syntax and explain the underlying execution path (partition key, index, B‑tree).  
3. Discuss performance characteristics: latency, throughput, consistency guarantees, and resource usage.  
4. Summarize when one is preferable.

---

**Depth**

| Engine | Query | Execution Path | Latency & Throughput | Consistency |
|--------|-------|----------------|----------------------|-------------|
| **Cassandra** | `SELECT * FROM table WHERE id = ?;` (id is partition key) | Direct hash‑partition lookup → single node read. No index scan. | O(1) per row, sub‑millisecond on a single node; scales linearly with cluster size. | Tunable (`ONE`, `QUORUM`, …). |
| **MongoDB** | `db.collection.findOne({_id: ...});` | B‑tree index on `_id`. Mongo reads the leaf node → document. | Sub‑millisecond on a single replica set member; read scaling limited by disk/IO, but can be sharded. | Strong consistency on primary; eventual on secondaries. |

*Key differences:*  
- **Schema & storage**: Cassandra stores columns in sorted order per partition; Mongo stores the whole BSON document.  
- **Indexing**: Cassandra needs no secondary index for PK lookups; Mongo relies on B‑tree.  
- **Write amplification**: Cassandra writes to a commit log and SSTable; Mongo updates both data file and journal.

---

**Edge cases**

*Large documents*: Mongo may hit BSON size limits (16 MB) whereas Cassandra can split large columns across partitions.  
*Hot spot*: Repeated lookups on the same id in Cassandra will hit the same node; consider load balancing or token aware drivers.  
*Network latency*: In multi‑region setups, Cassandra’s tunable consistency can reduce round trips compared to Mongo’s primary read.

---

**Optimize & communicate**

- Use **prepared statements** in Cassandra to avoid parsing overhead.  
- For Mongo, ensure `_id` is the default ObjectId; otherwise create a unique index.  
- Highlight that for *read‑heavy* workloads with simple PK lookups, Cassandra offers lower latency and higher write throughput due to its append‑only design.  
- Conversely, if you need secondary queries or richer query language (aggregation pipelines), Mongo’s flexible indexes shine.

*Bottom line*: For a pure “lookup by ID” pattern, Cassandra delivers predictable O(1) performance with tunable consistency; MongoDB offers similar speed but shines when you later need complex querying on additional fields.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
