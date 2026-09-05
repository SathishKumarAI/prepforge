---
qid: ing_f9a5f3589c__star__local
question: 'Explain: LEFT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 346
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:45-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was tasked with building a customer‑segmentation dashboard for our e‑commerce platform. The user data lived in `customers`, while purchase history resided in `orders`. To show each customer’s total spend, I needed to merge these tables even though many customers hadn’t made a purchase yet.

**Task** – Deliver a single query that lists every customer with their cumulative order amount (zero for those without orders) and run it on our nightly data refresh without exceeding the 30‑second performance window.

**Action** – I wrote a `LEFT JOIN` from `customers` to an aggregated subquery of `orders`. The subquery used `GROUP BY customer_id` and `SUM(amount)`; aliasing it as `order_totals`. In the main query, I selected `c.customer_id`, `c.name`, and `COALESCE(o.total_spend, 0) AS total_spent`. I added indexes on `orders(customer_id)` and `customers(id)` to satisfy the optimizer. During testing, I profiled execution plans, removed unnecessary columns, and switched to a covering index for the subquery, cutting runtime from 12 s to 4 s.

**Result** – The dashboard now displays all customers with accurate spend totals in real time; we saw a 25 % lift in engagement because marketing could target dormant users. I learned that a well‑planned `LEFT JOIN` combined with proper indexing turns a potentially slow aggregation into a lightning‑fast report.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
