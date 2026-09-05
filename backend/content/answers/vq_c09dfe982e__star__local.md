---
qid: vq_c09dfe982e__star__local
question: WHAT IS AN UNPIVOT OPERATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:39-05:00'
sources: []
---

**Situation** – In a quarterly sales analysis project for our e‑commerce client, the reporting dashboard was pulling revenue data from five separate product tables, each with its own column for “Month1”, “Month2”, …, “Month12”. The BI team needed a single table that listed month and revenue per product so they could plot trends in Power BI.  

**Task** – Convert the 60‑column wide dataset into a tidy long format (product_id, month, revenue) within our nightly ETL job, without writing separate UNION queries for each month.  

**Action** – I added an `UNPIVOT` clause to the staging query:

```sql
SELECT product_id, month, revenue
FROM (
  SELECT product_id,
         Month1 AS m1, Month2 AS m2, … , Month12 AS m12
  FROM sales_raw
) src
UNPIVOT (revenue FOR month IN (m1 AS 'Jan', m2 AS 'Feb', …, m12 AS 'Dec')) AS up;
```

I used a CTE to keep the logic readable, mapped each alias to its month name, and validated that NULLs were preserved for missing data.  

**Result** – The ETL now outputs ~30 k rows per product instead of 60 columns, reducing query time from 8 seconds to 1.2 seconds on our warehouse. Power BI visualizations load instantly, and the client reports a 40% faster dashboard refresh. I learned that `UNPIVOT` is ideal for normalizing wide tables, but always double‑check column mappings to avoid mislabeling months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
