---
qid: ing_048eeb32bc__faang__local
question: 'Explain: Composite Keys — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 499
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:07-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *partition keys*, *composite keys*, and *clustering columns* differ in Cassandra, and why each is used when modeling data for fast reads/writes.

Assumptions to confirm:  
1. The schema will be read‑heavy or write‑heavy?  
2. Query patterns involve equality on the partition key with optional ordering or range filters.  
3. Data volume per node should stay within a few GBs.

**Approach**  
Explain each concept, then illustrate how they combine in a table definition, and finally discuss trade‑offs (write amplification, hot spots).

**Depth**  

| Component | Purpose | Example | Notes |
|-----------|---------|--------|-------|
| **Partition key** | Hashes to determine the node that owns the row. All rows with same partition key share the same partition on disk. | `PRIMARY KEY ((customer_id))` | Determines data locality; avoid large partitions (>10 GB). |
| **Composite (compound) key** | Multiple columns in the *primary key* after the partition key, used to uniquely identify a row within that partition. | `PRIMARY KEY ((customer_id), order_date)` | Allows efficient equality lookups on both columns. |
| **Clustering columns** | Define intra‑partition ordering and support range queries. | `PRIMARY KEY ((customer_id), order_date, order_id) ORDER BY (order_date DESC)` | Data stored in sorted B‑tree; range scans are O(log N + M). |

Cassandra’s read path:  
1. Partition key → node.  
2. Within partition, clustering columns → sorted lookup.  

**Edge cases**  

*Very large partitions*: leads to hot spots and slow reads.  
*Too many clustering columns*: increases index size; range queries become expensive.  
*Wrong order of clustering columns*: may prevent efficient filtering on later columns.

**Optimize & communicate**  
- Choose a partition key that distributes rows evenly (hash or composite).  
- Keep partitions < 10 GB; split by time if needed.  
- Order clustering columns to match common query patterns.  
Explain trade‑offs: more clustering columns give richer queries but higher write cost and memory usage.

> **Signal:** Structured explanation, clear table, trade‑off discussion, concise (≈180 words).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
