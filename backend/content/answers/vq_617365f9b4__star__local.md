---
qid: vq_617365f9b4__star__local
question: WHAT ARE USER-DEFINED FUNCTIONS (UDFS)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 290
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:14-05:00'
sources: []
---

**Situation:**  
In a data‑analytics sprint for our retail client, the SQL warehouse was lagging behind on monthly sales reports. The standard aggregation functions couldn’t handle the complex discount logic that varied by region and product line.

**Task:**  
I needed to create a reusable calculation that could be called from any query, reduce hard‑coded logic, and cut report runtime by at least 30%.

**Action:**  
I wrote a user‑defined function (UDF) in PostgreSQL using PL/pgSQL. The UDF accepted product ID, sale date, and customer tier, then queried the discount table, applied tiered rules, and returned the final price. I added proper indexing on the lookup tables, used caching inside the function to avoid repeated lookups, and documented it with clear parameter descriptions. I also wrote unit tests in pgTAP to validate edge cases.

**Result:**  
The UDF reduced query complexity by 70%, cutting report generation time from 12 minutes to under 3 minutes. The client could now run ad‑hoc queries without waiting for the nightly batch. I learned that encapsulating business logic in well‑tested UDFs not only speeds up development but also centralizes maintenance and improves data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
