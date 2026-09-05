---
qid: vq_e4c51df317__star__local
question: What method do you use to clean the data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:34-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection project at a fintech client, the raw transaction log contained 12 million rows with missing timestamps, duplicate merchant IDs, and outlier amounts that skewed model training.

**Task** – I had to build an automated data-cleaning pipeline that reduced noise by at least 30 % while preserving rare fraud patterns for our XGBoost classifier.

**Action** – First, I used Pandas to drop rows with null critical fields (timestamp, amount). For duplicates, I applied a composite key of user_id + merchant_id + transaction_time and kept the record with the most recent status flag. Outliers were capped at the 99th percentile after log‑transformation to maintain distribution shape. Next, I leveraged Dask for distributed processing to scale across an on‑prem cluster, saving 45 % of runtime versus a single‑node run. Finally, I wrote unit tests in PyTest that asserted no more than 0.1 % of rows were discarded and that the fraud label distribution remained unchanged.

**Result** – The cleaned dataset dropped from 12 M to 9.6 M rows, reducing class imbalance by 25 %. Our model’s AUC rose from 0.82 to 0.89, and the data‑prep pipeline now runs in under 10 minutes daily. I learned that combining statistical techniques with scalable tooling is key to reliable AI production workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
