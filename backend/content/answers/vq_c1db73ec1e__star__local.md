---
qid: vq_c1db73ec1e__star__local
question: HOW CAN YOU USE THE CASE STATEMENT IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 398
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:55-05:00'
sources: []
---

**Situation** – At my previous company we were generating quarterly sales dashboards for regional managers. The raw data had a “region_code” column but the reports required human‑readable region names and a flag indicating whether each region was above or below its target revenue.

**Task** – I needed to produce a single SQL view that would replace numeric codes with descriptive names, add an `is_target_met` boolean, and calculate the percentage of target achieved—all without creating extra tables or writing application logic.

**Action** – I used a `CASE` statement inside a `SELECT`. First, I mapped `region_code` to names:

```sql
SELECT
  region_code,
  CASE region_code
    WHEN 'N' THEN 'North'
    WHEN 'S' THEN 'South'
    WHEN 'E' THEN 'East'
    ELSE 'West'
  END AS region_name,
```

Then, I calculated revenue versus target and set a flag:

```sql
  SUM(revenue)      AS actual_rev,
  MAX(target_rev)   AS target_rev,
  CASE
    WHEN SUM(revenue) >= MAX(target_rev) THEN TRUE
    ELSE FALSE
  END AS is_target_met,
  ROUND(SUM(revenue)/MAX(target_rev)*100,2) AS pct_of_target
FROM sales
GROUP BY region_code;
```

The `CASE` logic also handled nulls and default values. I tested the view with a sample dataset to confirm correctness.

**Result** – The new view cut report generation time from 12 minutes to under 3 minutes, delivered accurate region labels and target status in real time, and reduced maintenance by eliminating a lookup table. I learned how `CASE` can be leveraged for both transformation and conditional aggregation within a single query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
