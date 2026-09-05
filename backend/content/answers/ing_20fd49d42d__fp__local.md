---
qid: ing_20fd49d42d__fp__local
question: 'Explain: Partition Key vs Composite Key vs Clustering Columns in Cassandra
  – BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 368
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:16:26-05:00'
sources: []
---

In Cassandra a *table* is essentially a sorted map: the row key (partition key) selects a node; within that node, rows are kept in a deterministic order defined by *clustering columns*.  
**Partition Key** – The hash of this key decides which replica set stores the data. Because all replicas of a partition live on the same nodes, queries that target a single partition can be served without cross‑node traffic. Hence the partition key must distribute evenly and contain no highly selective columns; otherwise you get hotspots or “hot partitions”.  
**Composite (or compound) Key** – When several columns form the partition key (`(user_id, account_type)`), the hash is computed on their concatenation. This lets you group logically related rows while still keeping a balanced distribution. The rule: *every* component of the composite key participates in the hash; omitting one would break uniformity.  
**Clustering Columns** – After the partition is chosen, rows are sorted by these columns. They enable range scans (`WHERE created_at > …`) and natural ordering (e.g., newest first). Importantly, clustering columns **do not** affect locality: all rows in a partition live on the same nodes regardless of their order.

> **Non‑obvious insight:** A composite key is *not* a “larger hash” but a *single* hash over the concatenated values. Therefore adding an extra column to a composite key can drastically change the distribution, even if that column varies slowly. If you need to add such a column later, you must redesign the table; otherwise you’ll get skewed partitions and degraded performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
