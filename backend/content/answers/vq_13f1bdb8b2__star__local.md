---
qid: vq_13f1bdb8b2__star__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:53-05:00'
sources: []
---

**Situation** – At my last job I was tasked with generating a monthly report that listed each customer’s total spend and the average spend of all other customers who had purchased the same product category in the past year. The dataset had over 2 million rows, so performance mattered.

**Task** – Build an efficient query that returns for every customer: (1) their ID, (2) the sum of their purchases, and (3) the average spend of *other* customers in the same product category, without pulling a full join into memory.

**Action** – I wrote a correlated subquery inside the SELECT list. For each row in the outer query (aliased as `c`), the inner SELECT calculates `AVG(p.amount)` where `p.customer_id <> c.customer_id AND p.category = c.category`. The correlation is on `customer_id` and `category`, ensuring the subquery runs per customer-category pair. I added indexes on `(customer_id, category)` and `(amount, category)` to keep lookups fast, and used a materialized view for the totals to avoid recomputing sums.

**Result** – The query ran in 1.8 seconds versus 12 seconds with a naive join, returning accurate averages within 0.01% of manual calculations. I learned how tight correlation conditions can dramatically reduce scan size when properly indexed, and that materialized views can turn seemingly expensive correlated subqueries into near‑instant lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
