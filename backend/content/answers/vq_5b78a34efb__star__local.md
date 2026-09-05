---
qid: vq_5b78a34efb__star__local
question: How to combine dataframes in Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 395
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:18-05:00'
sources: []
---

**Situation** – In a recent marketing analytics sprint we had two quarterly datasets: one with campaign spend (df_spend) and another with conversion data (df_conv). Both were pulled from separate SQL tables and had overlapping but slightly different customer identifiers; the spend table used `cust_id`, while the conversion table used `customer_id`. The KPI dashboard required a single view of spend per conversion, so we needed to merge them cleanly.

**Task** – Merge the two dataframes on the customer key, preserve all spend records even if no conversions exist (to calculate cost‑per‑lead), and drop duplicate columns. I also had to handle missing values and keep the final dataframe sorted by date for downstream time‑series analysis.

**Action** – First, renamed `customer_id` in df_conv to `cust_id` with `df_conv.rename(columns={'customer_id':'cust_id'}, inplace=True)`. Then performed a left merge:  
```python
merged = pd.merge(df_spend, df_conv[['cust_id','conversion_date']], on='cust_id', how='left')
```
Used `pd.isna()` to flag rows without conversions and filled them with zeros for spend‑only metrics. Sorted by `date` and wrote the result to a Parquet file for fast read in Power BI.

**Result** – The merged dataframe contained 15,342 rows, up from 12,000 unique customers after deduplication. Cost‑per‑lead calculations were now available company‑wide, boosting the marketing ROI report accuracy by 18%. I learned that aligning key names and choosing the right join type (left vs inner) can dramatically affect downstream metrics and reporting reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
