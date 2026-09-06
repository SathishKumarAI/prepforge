---
qid: vq_0b7c8a81f4__faang__local
question: What is Union, minus and Interact commands?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 549
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:57:06-05:00'
sources: []
---

**Union / Minus / Intersect in data‑engineering contexts**

| Command | Meaning (SQL / Spark) | Typical use case |
|---------|-----------------------|------------------|
| **UNION** | Combines the rows of two or more queries into a single result set, removing duplicates unless `UNION ALL` is used. | Merging customer lists from different regions while de‑duplicating. |
| **MINUS / EXCEPT** | Returns rows that appear in the first query but not in the second (set difference). | Finding users who signed up last month but never logged in again. |
| **INTERSECT** | Returns only rows present in *both* queries, i.e., set intersection. | Identifying products sold both online and in‑store. |

---

### 1️⃣ Clarify
- Are we talking about SQL (e.g., PostgreSQL) or a distributed engine like Spark/BigQuery?
- Do you need duplicate elimination (`UNION`) or preserve all rows (`UNION ALL`)?

### 2️⃣ Approach
Explain the set‑theory basis, then map to execution plans:
- `UNION` → hash‑join + deduplication.
- `MINUS` → anti‑semi join (hash or merge).
- `INTERSECT` → semi‑join + duplicate removal.

### 3️⃣ Depth
- **Complexity**: For N rows, each operation is O(N log N) for sorting‑based engines; hash‑based can be O(N).
- **Optimization**: Use column pruning and predicate pushdown to reduce data scanned. Leverage broadcast joins if one side is tiny.
- **Spark specifics**: `df1.union(df2)` vs `df1.subtract(df2)` vs `df1.intersect(df2)`. Mention Catalyst optimizations.

### 4️⃣ Edge Cases
- Different schemas → cast columns first.
- Null handling: SQL treats NULL ≠ NULL; in Spark, use `na.fill`.
- Large cardinalities → spill to disk or use partitioned shuffle.

### 5️⃣ Optimize & Communicate
- Prefer `UNION ALL` when duplicates are acceptable—no extra sort/dedup cost.
- For frequent set ops, materialize results as temporary tables to avoid recomputation.
- Explain trade‑offs: hash join is fast but memory intensive; merge join uses sorted data but needs shuffle.

*Result*: Clear, concise explanation of each command, implementation details, and practical tips for performance tuning in a production data‑engineering pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
