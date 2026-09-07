---
qid: ing_a7f3aec3b6__faang__local
question: 'Explain: Secondary Indexes — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 492
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:20-05:00'
sources: []
---

**Clarify**  
We’re comparing how *secondary indexes* work in **Cassandra** (a wide‑column store) vs **MongoDB** (a document store).  
Assumptions: both use the same query patterns (e.g., “find users by age”), same data volume, and we care about read latency, write amplification, and cluster size.

**Approach**  
1. Summarize each engine’s index model.  
2. Contrast storage layout & lookup cost.  
3. Highlight operational trade‑offs: write path, consistency, scaling.  
4. Touch on real‑world usage patterns.

**Depth**  
- **Cassandra** stores a *secondary index* as an inverted table (column family) where the key is the indexed value and the value holds partition keys of matching rows. Reads hit two tables: the main table + the index table, then fetch originals—O(log N) per lookup but high latency if many partitions share the same value. Write amplification is moderate; every insert updates both tables.  
- **MongoDB** builds a B‑Tree on the indexed field(s). Queries traverse the tree to leaf pages that contain pointers to documents. Read is single‑step O(log M); writes incur index update cost proportional to document size but remain efficient for sparse indexes. Mongo supports *compound* and *text* indexes natively.

**Edge Cases**  
- Highly cardinal fields: Cassandra’s inverted table grows huge; Mongo’s B‑Tree remains compact.  
- Hotspot values (e.g., “status = active”): Cassandra can suffer read amplification; Mongo handles via sharding or TTL.  
- Write‑heavy workloads: Cassandra’s dual writes can bottleneck; Mongo’s single index update is lighter.

**Optimize & Communicate**  
For a write‑intensive, horizontally scalable system, prefer **Cassandra** with *allow filtering* or materialized views over heavy secondary indexes. For ad‑hoc queries and complex projections, use **MongoDB**’s B‑Tree indexes; add sharding on the indexed field to avoid hotspots. Explain this trade‑off clearly in an interview: “In Cassandra we’re trading write speed for read flexibility; in MongoDB we keep reads fast but pay more during writes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
