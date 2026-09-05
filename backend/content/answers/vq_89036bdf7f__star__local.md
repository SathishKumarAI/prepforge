---
qid: vq_89036bdf7f__star__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 318
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:12-05:00'
sources: []
---

**Situation** – In a data‑pipeline project for our e‑commerce analytics team, we were building a nightly report that counted the number of orders per customer and flagged those who had placed more than three high‑value purchases in the last month. The initial query used a simple subquery to fetch each customer’s order count.

**Task** – I needed to optimize the report so it could run within our 30‑minute window on a 10 TB dataset, while still returning accurate per‑customer metrics and handling dynamic thresholds (e.g., “top 5% of spenders”).

**Action** – I rewrote the logic using a **correlated subquery** that referenced the outer query’s customer ID. This allowed us to push the filter into the join condition, letting Spark prune partitions early and avoid scanning the entire orders table for every row. In contrast, the regular (non‑correlated) subquery executed once per outer row, causing repeated scans and a 5× slowdown. I also added a broadcast hint on the small customer dimension to reduce shuffle.

**Result** – The correlated version cut runtime from 15 minutes to under 4 minutes, improving SLA compliance by 80%. I learned that while regular subqueries are simple, correlated ones can dramatically reduce data movement when they allow predicate push‑down and partition pruning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
