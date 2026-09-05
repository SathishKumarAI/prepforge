---
qid: vq_8175fb9c26__star__local
question: Are views updated when I update base tables ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:06-05:00'
sources: []
---

**Situation:**  
At my previous company we had a reporting dashboard that pulled data from a view called `v_sales_summary`. The view aggregated daily sales, returns, and net revenue across multiple product lines. One day the marketing team noticed that the dashboard was showing stale figures for last week’s promotions.

**Task:**  
I needed to verify whether updates made to the underlying tables (`sales`, `returns`) were reflected in the view, and if not, determine how to make the view stay current without compromising performance.

**Action:**  
First I examined the view definition; it was a simple inline query with `GROUP BY`. In PostgreSQL that means the view is **not materialized**, so every SELECT reads live data. However, I discovered an index on the `sales` table’s `sale_date` column had been dropped during a recent optimization. Without that index, the view’s aggregate queries were slow and sometimes timed out, leading to cached results in the application layer.  
I recreated the missing index, added a partial index on `returns`, and set up a scheduled job to refresh the application cache every 5 minutes. I also created a small materialized view `mv_sales_summary` for high‑traffic reports, refreshed nightly.

**Result:**  
After these changes, the dashboard updated within seconds of any insert or update to `sales` or `returns`. Query times dropped from ~2 s to <200 ms, and we eliminated stale data complaints. I learned that while views are inherently dynamic, their performance can hinge on underlying indexes and caching strategies; proactively managing those ensures real‑time accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
