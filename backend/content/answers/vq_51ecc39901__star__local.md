---
qid: vq_51ecc39901__star__local
question: What does the following query do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:06-05:00'
sources: []
---

**Situation**  
During my last role at a SaaS company, we were launching a new analytics dashboard for our billing team. The raw fact table had millions of rows per month, but the UI required daily revenue totals by product tier and region, aggregated in real time.

**Task**  
I needed to write a single query that would pull the latest 30‑day rolling sums, pivot the tiers into separate columns, and output them as a compact CSV for the front‑end. The challenge was to keep latency under two seconds while handling data skew across regions.

**Action**  
I built an ANSI‑SQL query using window functions and conditional aggregation:

```sql
SELECT
  DATE_TRUNC('day', event_date) AS day,
  region,
  SUM(CASE WHEN tier = 'Basic'   THEN amount END) AS basic_rev,
  SUM(CASE WHEN tier = 'Pro'     THEN amount END) AS pro_rev,
  SUM(CASE WHEN tier = 'Enterprise' THEN amount END) AS eng_rev
FROM billing_events
WHERE event_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY day, region
ORDER BY day DESC;
```

I added a materialized view on the fact table to cache the pre‑aggregated `tier` buckets, then indexed `(event_date, tier)` for fast slicing. I also tuned the query planner by setting `enable_hashagg = off` to force merge aggregation, which reduced CPU usage on our 8‑core cluster.

**Result**  
The dashboard now refreshes in under 1.3 seconds per region, a 40% speedup over the previous batch job that ran nightly. The billing team reports fewer data lag complaints, and I learned how to balance window functions with materialized views for real‑time reporting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
