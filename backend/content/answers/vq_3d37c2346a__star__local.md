---
qid: vq_3d37c2346a__star__local
question: How do you calculate "PCTINCREASE" value?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:43-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with improving the reporting dashboard for our sales team. The KPI “PCTINCREASE” (percentage increase in revenue month‑over‑month) kept showing incorrect values because the underlying SQL calculation had a subtle bug that only surfaced when the base month had zero revenue.

**Task** – I needed to rewrite the calculation so it handled division by zero gracefully, returned accurate percentages for all months, and could be easily maintained as new data streams were added.

**Action** – I started by writing unit tests against historical monthly revenue data, including edge cases. In SQL Server I used a CASE expression:  

```sql
SELECT 
  month,
  base_rev,
  curr_rev,
  CASE 
    WHEN base_rev = 0 THEN NULL
    ELSE ROUND((curr_rev - base_rev) * 100.0 / NULLIF(base_rev,0),2)
  END AS pct_increase
FROM monthly_revenue;
```

I then refactored the logic into a reusable scalar function and documented the edge‑case handling in our Confluence wiki. Finally, I automated the test suite to run on every CI build.

**Result** – The dashboard now displays accurate PCTINCREASE values for all periods; we saw a 15 % improvement in user confidence from quarterly surveys. Additionally, the new function cut query time by 30 % and reduced maintenance effort because future data sources can call the same reusable logic. This experience reinforced my belief that robust edge‑case handling and automated testing are essential when computing key metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
