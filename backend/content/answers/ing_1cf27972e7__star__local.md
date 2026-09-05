---
qid: ing_1cf27972e7__star__local
question: 'Explain: Build Real Data & AI Projects in Our Cloud Hosted Notebooks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 376
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:30-05:00'
sources: []
---

**Situation** – At my previous company we had a monthly marketing analytics report that was generated from raw click‑stream logs stored on S3. The data pipeline ran overnight on an on‑prem Spark cluster and took 8 hours, so the analysts received the insights with a 24‑hour lag. I volunteered to modernize it using our new cloud‑hosted Jupyter notebooks on AWS SageMaker.

**Task** – My goal was to cut the end‑to‑end processing time to under 2 hours while adding a machine‑learning model that predicts next‑day conversion rates with at least 80 % accuracy, all within a single notebook environment that could be shared with non‑technical stakeholders.

**Action** – I first rewrote the ETL in Python using Pandas and Dask, leveraging SageMaker’s managed Spot Instances to parallelize the data load. Then I built a LightGBM model inside the same notebook, tuning hyperparameters via Optuna. To ensure reproducibility, I pinned all libraries with Conda env files and used GitHub Actions to trigger notebook execution on a nightly schedule. Finally, I created a Streamlit dashboard in another cell to visualize predictions directly from the notebook.

**Result** – The new pipeline processed 200 GB of logs in just 90 minutes, reducing the reporting lag by 96 %. The conversion‑rate model achieved 82 % accuracy on holdout data. Stakeholders could now review predictions in real time, and I learned how to tightly integrate data engineering, ML modeling, and visualization all inside a single cloud‑hosted notebook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
