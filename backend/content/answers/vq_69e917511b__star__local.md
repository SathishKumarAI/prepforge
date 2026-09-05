---
qid: vq_69e917511b__star__local
question: What kind of joins are offered by Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 389
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:50-05:00'
sources: []
---

**Situation** – While working on a sales analytics dashboard, I had two large CSVs: one with daily transaction logs (≈ 2 M rows) and another with product metadata (≈ 50 k rows). The goal was to enrich each transaction with the product’s category and supplier details before feeding it into a BI tool.

**Task** – I needed to merge these datasets efficiently, preserving all transactions while handling missing product codes gracefully. The merge had to be reproducible in production scripts and fast enough for nightly batch runs.

**Action** – Using `pandas.merge`, I experimented with the four join types:  
1. **inner** – kept only matching rows (used for a quick sanity check).  
2. **left** – retained all transactions, adding NaNs where product data was absent (our production default).  
3. **right** – not needed here but useful when the reference table is smaller.  
4. **outer** – would include unmatched records from both sides, which we avoided to keep the dataset lean.  
I also set `on='product_id'`, enabled `suffixes=('_trans', '_meta')`, and used `sort=False` to speed up the operation. After profiling, the left join finished in ~12 s on a 16‑core machine.

**Result** – The final dataframe had 2 M rows with enriched product info; missing categories were flagged for follow‑up. Performance improved by 30 % compared to an earlier SQL‑based approach, and the script now runs automatically every night without manual intervention. I learned that choosing the right join type in pandas not only affects correctness but also has a measurable impact on runtime and resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
