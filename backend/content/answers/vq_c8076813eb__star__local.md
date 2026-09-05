---
qid: vq_c8076813eb__star__local
question: What are the types of UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:22-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a legacy reporting pipeline to Snowflake. The on‑prem system used custom SQL functions for all data enrichment, but Snowflake’s native UDFs weren’t enough to replace the logic that needed to return multiple rows or perform stateful aggregation.

**Task:**  
I had to design and implement a set of user‑defined functions that could handle scalar transformations, row‑expansion (table output), and custom aggregations while keeping performance high and debugging straightforward.

**Action:**  
First I created **scalar UDFs** in JavaScript for simple lookups like converting country codes. Then I wrote an **inline table‑valued UDF** to explode semi‑structured JSON into rows, leveraging Snowflake’s `FLATTEN` inside the function body. For more complex scenarios I built a **multi‑statement table‑valued UDF** that used temporary tables to join lookup data and return a denormalized result set. Finally, I implemented an **aggregate UDF** in Python (via Snowpark) to compute rolling averages across partitions, using `ACCUMULATOR` objects to maintain state across rows.

**Result:**  
The new UDF suite reduced the total query runtime by 35% and cut maintenance effort by half because all logic lived in reusable functions. I learned that choosing the right UDF type—scalar for single values, inline TVF for quick row expansion, multi‑statement TVF for complex joins, and aggregate UDFs for stateful calculations—is key to balancing performance, readability, and scalability in a modern data warehouse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
