---
qid: ing_c9be058ec4__star__local
question: 'Explain: Data structures — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:38-05:00'
sources: []
---

**Situation** – In my final internship at a fintech startup, we were building an anomaly‑detection model that had to process millions of transaction logs per day. The engineering team noticed the training pipeline was stalling because our feature extraction step kept re‑scanning raw CSV files.

**Task** – I needed to redesign the data ingestion layer so it could read and transform features in under 30 seconds, while keeping memory usage below 8 GB on a shared GPU node.

**Action** – I profiled the code with Py-Spy and discovered that repeatedly converting strings to integers was a bottleneck. I replaced the naïve list‑of‑dicts structure with a columnar NumPy array backed by a pandas `Categorical` dtype for categorical columns, which compressed memory 3×. Then I implemented a lazy iterator using Python’s generator protocol to stream rows into a Dask bag, allowing parallel parsing across CPU cores without loading everything into RAM. Finally, I wrapped the whole pipeline in an Airflow DAG so each chunk could be retried independently.

**Result** – The feature extraction time dropped from 2 minutes to 18 seconds per batch, and GPU utilization increased by 45 %. We deployed the model 4× faster than scheduled and reduced training costs by ~$3k/month. I learned that choosing the right data structure—columnar storage versus row‑based lists—and leveraging lazy evaluation can dramatically improve ML pipeline performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
