---
qid: vq_1cfe0fe044__think__local
question: How to remove duplicate rows from table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 430
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:14:22-05:00'
sources: []
---

**1️⃣ Clarify the context and assumptions**  
   * What database system (SQL‑based, NoSQL, BigQuery, Spark)?  
   * Is it a single table or a view?  
   * Which columns define “duplicate”?  All columns or a subset?  
   * Do we need to keep one row per duplicate group or all unique rows?  

**2️⃣ Choose the right mental model / framework**  
   * **Set‑based thinking**: duplicates are groups where key columns repeat.  
   * **Row deletion strategy**: “delete all but one” vs “delete all that match a condition”.  
   * **Data integrity constraints**: unique indexes, primary keys, or surrogate IDs.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify duplicate groups: `SELECT cols, COUNT(*) FROM table GROUP BY cols HAVING COUNT(*) > 1`.  
   2. Decide which row to keep (e.g., earliest timestamp, highest ID).  
   3. Build a delete statement that removes rows not matching the chosen criteria, often using `ROW_NUMBER()` over the duplicate groups.  
   4. Test on a copy or use `DELETE ... WHERE id IN (...)` with a subquery.  

**4️⃣ Common traps to avoid**  
   * Forgetting to preserve primary key uniqueness after deletion.  
   * Deleting rows without a transaction rollback plan (data loss).  
   * Mis‑identifying the “unique” columns—leading to unintended data removal.  
   * Ignoring performance: large tables need indexed subqueries or batch deletes.

**5️⃣ Sanity‑check & communicate**  
   * Run `SELECT COUNT(*)` before/after to confirm reduction.  
   * Explain assumptions (which columns define duplicates, retention rule).  
   * Show sample SQL and note that syntax may vary across DBMSs.  

This structured approach ensures you remove only the intended duplicate rows while maintaining data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
