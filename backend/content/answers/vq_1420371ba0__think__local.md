---
qid: vq_1420371ba0__think__local
question: How do you pivot data in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 392
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:11:35-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - Confirm whether “pivot” means transforming rows into columns (e.g., turning a `Month` column into separate month columns).  
   - Assume a relational DB that supports pivot syntax or aggregate functions with CASE.

**2️⃣ Mental model: “reshape vs. aggregate”**  
   - Pivot is essentially an aggregation over a grouping key, where each target column is computed via a conditional expression (SUM/COUNT/AVG) on the original rows.  
   - Think of it as `SELECT group_key, SUM(CASE WHEN category='A' THEN value END) AS A, …`.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify grouping dimension(s) (`GROUP BY`).  
   2. List distinct values that will become columns (e.g., months).  
   3. Write an aggregate per new column using `CASE WHEN`.  
   4. If the DB supports a native `PIVOT` operator, use it: `SELECT * FROM table PIVOT (SUM(value) FOR month IN ([Jan],[Feb],…))`.  

**4️⃣ Common traps to avoid**  
   - Forgetting that `CASE` returns NULL for non‑matching rows → aggregates drop those rows.  
   - Mixing aggregate functions and non‑aggregated columns without grouping.  
   - Using the wrong pivot syntax for the DB (e.g., MySQL has no native PIVOT).  

**5️⃣ Sanity‑check & explain**  
   - Run a small sample query to verify column counts match expected distinct values.  
   - Explain the logic: “We group by X, then for each Y value we sum/average the metric, effectively rotating rows into columns.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
