---
qid: vq_29b6ad0dd1__star__local
question: WHEN WOULD YOU USE A LEFT JOIN INSTEAD OF AN INNER JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 326
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:51-05:00'
sources: []
---

**Situation** – At my previous company we built a reporting dashboard for the sales team that compared every customer’s order history with their current subscription status. The orders table had ~2 M rows, while the subscriptions table had only 150 K active records. When we ran an inner join to pull both datasets together, many customers with no active subscription were missing from the report, which caused a 12% drop in data coverage that the analysts flagged.

**Task** – I needed to produce a complete view of all customers, showing order totals even when they had no current subscription, while keeping query performance under 5 seconds for our nightly ETL job.

**Action** – I switched from an INNER JOIN to a LEFT JOIN on the subscriptions table and added a COALESCE to default missing values. To keep the join fast, I created composite indexes on `orders.customer_id` and `subscriptions.customer_id`. I also used a materialized view for the order aggregates so the left join only had to pull pre‑aggregated numbers.

**Result** – The dashboard now displays 100 % of customers, increasing data coverage from 88% to 100%. Query runtime dropped to 3.2 seconds, and the analytics team reported a 30% improvement in insight turnaround. I learned that choosing the right join type is as much about preserving business logic as it is about performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
