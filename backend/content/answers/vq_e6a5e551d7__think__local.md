---
qid: vq_e6a5e551d7__think__local
question: How to display following using query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 484
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:35:28-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   *Ask what “display following” means:* is it a list of rows, aggregated values, a pivot table?  
   *Assume you’re working with a relational DB (e.g., Snowflake, BigQuery) and have a single source table.*  

**2️⃣ Choose the mental model / framework**  
   - Identify **source → transformation → target**.  
   - Map the desired output to SQL constructs: `SELECT`, `WHERE`, `GROUP BY`, `JOIN`, `WINDOW` functions, or `PIVOT`.  
   - Decide if you need a temporary view (`WITH` clause) for clarity.

**3️⃣ Step‑by‑step reasoning**  
   1. List the columns that must appear.  
   2. Determine any filters (date ranges, status flags).  
   3. Check for aggregations: `COUNT()`, `SUM()`, `AVG()` etc.  
   4. If grouping is needed, write `GROUP BY` on the non‑aggregated columns.  
   5. For ranking or ordering, add `ORDER BY` (or `ROW_NUMBER() OVER`).  
   6. Test with a small sample to verify logic.

**4️⃣ Common traps to avoid**  
   - Mixing aggregated and non‑aggregated columns without grouping.  
   - Forgetting to alias derived columns for readability.  
   - Using `SELECT *` when you only need specific fields (performance & clarity).  
   - Ignoring null handling in aggregates (`NULLS LAST` or `COALESCE`).  

**5️⃣ Sanity‑check & communicate**  
   - Run the query on a subset to confirm results match expectations.  
   - Explain each clause’s purpose: “We filter by date, group by customer, and sum sales.”  
   - If the output still looks wrong, step through with `EXPLAIN` or add intermediate views to isolate issues.

Follow this checklist whenever you’re asked to produce a query that “displays” data. It keeps your thinking organized, reduces errors, and makes debugging easier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
