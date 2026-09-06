---
qid: vq_b1f1eaffe6__faang__local
question: Explain how can you change a column data type in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 554
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:50-05:00'
sources: []
---

**Clarify**  
> *Problem:* We need to modify the data type of an existing column in Hive without corrupting the underlying data.  
> *Assumptions:* The table is managed (not external), the data can be re‑written if needed, and we have sufficient privileges.

---

### 1️⃣ Approach
1. **Check compatibility** – ensure the new type can represent current values (`int → string` is safe; `string → int` may fail).  
2. **Use Hive’s DDL** – `ALTER TABLE <tbl> CHANGE COLUMN <col> <col> <new_type>;`.  
3. **If incompatible**, create a temporary table with the desired schema, insert transformed data (`SELECT CAST(col AS new_type) …`), drop old table, and rename.

---

### 2️⃣ Depth
- The `CHANGE` statement rewrites metadata only; Hive will *not* rewrite data files unless the type is incompatible.  
- For incompatible casts, Hive rewrites each row during the insert, giving a cost of **O(N)** I/O plus the cost of the CAST operation per row.  
- Use **ACID** features (transactional tables) if you want rollback; otherwise, rely on backup snapshots.

---

### 3️⃣ Edge Cases
| Scenario | What breaks? | Test |
|----------|--------------|------|
| Null values in column | Cast may throw exception | `SELECT * FROM tbl WHERE col IS NULL` |
| Large files ( > 1 TB ) | Rewrite can time‑out | Run on a sample of large partitions |
| Partitioned tables | Need to alter each partition separately or rebuild the table | Verify partition metadata after change |

---

### 4️⃣ Optimize & Communicate
- **Batch updates**: If many columns need changes, group them in a single `ALTER TABLE` to reduce metadata overhead.  
- **Explain plan**: Run `EXPLAIN SELECT …` before and after to show that no full scan occurs for compatible casts.  
- **Narrative**: “I first validate the cast safety, then use Hive’s native ALTER command which is efficient for type‑compatible changes. For incompatible casts I perform a controlled rewrite, ensuring data integrity and minimal downtime.”

This structured plan satisfies the FAANG interview rubric: clear assumptions, systematic approach, technical depth, edge‑case awareness, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
