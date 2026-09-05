---
qid: vq_b0a478ba00__star__local
question: How does one loop through tables in PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 405
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:07-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with generating a monthly inventory report for the warehouse. The source data spanned three large tables: `PRODUCTS`, `STOCK_LEVELS`, and `SUPPLIERS`. The existing reporting script ran in minutes, but the business needed real‑time updates so we had to rewrite it in PL/SQL.

**Task** – I had to create a single stored procedure that iterated over each table, aggregated current stock quantities by supplier, and wrote the results into a temporary report table without loading millions of rows into memory or causing lock contention.

**Action** – I used an explicit cursor for `PRODUCTS` to fetch product IDs. Inside the cursor loop, I opened a second cursor for `STOCK_LEVELS` filtered on that product ID, then fetched all related rows with `BULK COLLECT INTO`. After collecting stock records, I performed an in‑memory aggregation (using a PL/SQL associative array) and inserted the summed quantity into `REPORT_TEMP`. I wrapped each loop iteration in an exception block to log any data anomalies without aborting the whole process. Finally, I added pragma `OPTIMIZE` hints and used `FORALL` for bulk inserts to keep context switches minimal.

**Result** – The new PL/SQL procedure cut report generation time from 12 minutes down to under 2 minutes, handling 1.3 million rows in less than 30 seconds. It also reduced database locks by 70% and allowed the report to run concurrently with day‑to‑day inventory updates. I learned how cursor management, bulk collect, and associative arrays work together to balance performance and memory usage in PL/SQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
