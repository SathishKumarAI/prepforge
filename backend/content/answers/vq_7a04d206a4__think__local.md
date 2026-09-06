---
qid: vq_7a04d206a4__think__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 420
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:52:14-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   - *Goal*: Return one row per distinct key (e.g., `id`, combination of columns).  
   - *Assumptions*: The table has a primary key or unique identifier; you can use SQL; you’re okay with deterministic tie‑breaking.

**2️⃣ Mental model / framework**  
   - Think of “unique records” as *grouping* by the columns that define uniqueness, then picking one representative from each group (often the first/last or min/max on a timestamp).

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the key columns (`colA`, `colB`, …).  
   2. Use `GROUP BY` on those keys and aggregate to pick a single row: e.g., `MIN(id)` or `MAX(updated_at)`.  
   3. Join back to the original table on the key + chosen aggregator to retrieve full rows.  
   4. Alternatively, use window functions: `ROW_NUMBER() OVER (PARTITION BY colA, colB ORDER BY updated_at DESC)` and filter `WHERE rn = 1`.

**4️⃣ Common traps**  
   - Forgetting that `SELECT DISTINCT` only removes duplicate *rows*, not duplicates on a subset of columns.  
   - Choosing an aggregator that isn’t deterministic (e.g., random).  
   - Ignoring performance: large tables benefit from proper indexing or using `DISTINCT ON` (PostgreSQL).

**5️⃣ Sanity‑check & communicate**  
   - Verify the result count equals the distinct key count.  
   - Explain the chosen method’s trade‑offs (readability vs. speed).  
   - If using window functions, show a small example table to illustrate how `ROW_NUMBER()` partitions and orders.

This structured approach ensures you pick the right SQL pattern for “unique records” while avoiding common pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
