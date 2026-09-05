---
qid: vq_c8bd46980c__star__local
question: HOW CAN YOU USE DISTINCT IN A SQL QUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:22-05:00'
sources: []
---

**Situation:**  
During a quarterly data audit for our e‑commerce platform, the product catalog table had over 1.2 million rows but our analytics dashboard was showing duplicate SKUs, causing revenue reports to be inflated by ~15%.

**Task:**  
I needed to isolate unique SKUs and generate a clean list that could be imported into the BI tool without manual filtering, ensuring downstream metrics reflected actual inventory.

**Action:**  
Using PostgreSQL, I wrote a query that leveraged `DISTINCT` on the SKU column while preserving related attributes.  
```sql
SELECT DISTINCT ON (sku) sku,
       name,
       category,
       price,
       created_at
FROM   products
ORDER BY sku, updated_at DESC;
```
This returned one row per SKU, picking the most recent record based on `updated_at`. I then materialized it into a temporary view and scheduled a nightly job to refresh the BI dataset. I also added an index on `(sku, updated_at)` to keep the operation under 200 ms even at peak load.

**Result:**  
The cleaned SKU list dropped duplicate entries from ~18% of rows to zero. Revenue calculations aligned with actual sales, improving forecast accuracy by 12%. I learned that `DISTINCT ON` combined with a proper index can clean large tables efficiently without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
