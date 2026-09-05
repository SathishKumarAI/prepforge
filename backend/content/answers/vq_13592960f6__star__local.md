---
qid: vq_13592960f6__star__local
question: STORED PROCEDURE ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 348
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:44-05:00'
sources: []
---

**Situation** – In my last role I was tasked with generating a monthly sales report for the finance team. The existing ETL job ran nightly and produced raw tables, but the finance analysts complained that the aggregation logic had drifted from the original business rules, leading to a 5% discrepancy in their budgets.

**Task** – I needed to build a reliable, repeatable stored procedure that would aggregate sales by region, product line, and fiscal quarter, enforce the correct discount rules, and expose the result as a single view for downstream BI tools—all within the existing SQL Server environment.

**Action** – First, I mapped the business logic into a clear ER diagram and wrote a set of unit tests using t‑SQLt. Then I created `sp_GenerateMonthlySalesReport` with parameterized inputs (year, quarter) and used CTEs to compute subtotals, apply tiered discount percentages, and roll up to the final totals. I leveraged window functions for running balances and included proper indexing hints on the sales fact table to keep execution under 30 seconds. Finally, I scheduled the procedure as a SQL Agent job and added audit columns to track versioning.

**Result** – The new stored procedure cut report generation time from 45 minutes to 12 seconds and eliminated the 5% variance, achieving 99.9% accuracy against manual calculations. It also simplified maintenance: any rule change now lives in one place, and I learned how to balance performance with readability by using CTEs and parameterized logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
