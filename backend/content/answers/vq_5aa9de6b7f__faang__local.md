---
qid: vq_5aa9de6b7f__faang__local
question: What is the meaning of free form import in sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 529
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:47-05:00'
sources: []
---

**Clarify**  
You’re asking about *free‑form imports* in Apache Sqoop – the option that lets you run a custom SQL query instead of importing an entire table or view. Confirm that we’re talking about the `--query` flag (or `--direct --query`) and not the older “table” import.

**Approach**  
Explain what it does, why it’s useful, how to use it, and its caveats. Keep the explanation concise yet complete.

**Depth**  
- **Definition:** A free‑form import runs a user‑supplied `SELECT` statement (with `WHERE $CONDITIONS`) against the source database and writes the result set to HDFS/Hive/Parquet/etc.  
- **Syntax example:**
  ```bash
  sqoop import \
    --connect jdbc:mysql://db.example.com/db \
    --username user \
    --password pass \
    --query "SELECT id, name, created_at FROM users WHERE $CONDITIONS" \
    --split-by id \
    --target-dir /user/hadoop/users
  ```
- **Key points:**
  - `$CONDITIONS` is replaced by Sqoop with a predicate that partitions the query for parallelism (`id >= X AND id < Y`).  
  - Must provide a `--split-by` column (or use `--direct --query` which ignores it).  
  - Supports complex joins, aggregations, and date ranges.  
- **Performance:** Parallel fetches are as fast as table imports, but the query must be efficient; otherwise you’ll hit DB bottlenecks.

**Edge Cases**  
- No `$CONDITIONS` placeholder → error.  
- Non‑deterministic columns (e.g., `ORDER BY RAND()`) break split logic.  
- Large result sets that exceed memory in a single mapper.  
- Permissions: the query must be executable by the DB user.

**Optimize & Communicate**  
- Use indexes on the split column to speed up partitions.  
- If the source is MySQL, consider `--direct` for native connector performance.  
- Always test the query directly in the DB first; then run Sqoop with a small `--num-mappers 1` to validate results before scaling.  

By framing it this way, you show clear understanding, practical usage, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
