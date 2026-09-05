---
qid: vq_9b8bc703f1__star__local
question: What are the SET Operators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 321
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:23-05:00'
sources: []
---

**Situation:** In my last role I was tasked with reconciling two large customer datasets—one from the marketing team and one from sales—each containing over a million records but with overlapping IDs.

**Task:** My goal was to produce three reports: customers exclusive to marketing, customers exclusive to sales, and customers present in both systems, all within a 48‑hour deadline for a quarterly audit.

**Action:** I wrote a single SQL script using the SET operators.  
- First, `SELECT customer_id FROM marketing` **UNION** `SELECT customer_id FROM sales` gave me the full list of unique IDs.  
- Then `INTERSECT` produced the intersection set—customers in both tables.  
- Finally, two `EXCEPT` queries (`marketing EXCEPT sales` and `sales EXCEPT marketing`) isolated the exclusive customers.  
I wrapped each operation in CTEs for readability and used partitioned indexes on `customer_id` to keep execution under 30 seconds.

**Result:** The script ran in 22 seconds, delivering all three reports with 100% accuracy. The audit team praised the clean, maintainable approach, and I documented the logic so future analysts could tweak thresholds or add new data sources without rewriting queries. This exercise reinforced how SET operators can replace complex joins and subqueries for efficient, readable data reconciliation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
