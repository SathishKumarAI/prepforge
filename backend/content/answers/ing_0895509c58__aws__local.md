---
qid: ing_0895509c58__aws__local
question: 'Explain: Handling Missing Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 538
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:23-05:00'
sources: []
---

**Situation & Task**  
When I joined a data‑science team at a fintech startup, our onboarding pipeline ingested daily CSV feeds from third‑party vendors. Roughly 28 % of rows had missing or malformed values (e.g., `NaN`, empty strings, “—”, “NULL”). If left unchecked the downstream ML models would produce biased predictions and the production API latency spiked by 18 %. My task was to design an automated, scalable cleaning process that preserved data quality while keeping costs low.

**Action**  
1. **Dive Deep into Data Quality** – I wrote a script using `pandas` + `numpy` to parse each file, flagging anomalies with regex and type‑inference.  
2. **Define Imputation Rules** – For numeric columns I applied median imputation; for categorical columns I used mode or “unknown” tokens. Missing rows that exceeded a 40 % threshold were discarded.  
3. **Leverage AWS Glue & S3** – The script ran as an AWS Glue job (Python shell). Each CSV was read from S3, cleaned in memory, and written back to a separate “cleaned/” bucket.  
4. **Automate & Monitor** – A CloudWatch Event triggered the Glue job on file arrival; logs were sent to CloudWatch Logs with custom metrics (`rows_cleaned`, `missing_ratio`). Alerts fired if missing ratio > 30 %.  

**Result**  
* Cleaned data volume grew from 0.8 TB to 1.2 TB per month, enabling richer feature engineering.  
* Model drift reduced by 12 % and API latency dropped from 350 ms to 210 ms.  
* Glue job cost < $0.10 per GB processed, staying well below the $0.50/GB threshold we had set.

**Learning & Ownership**  
I documented edge‑cases (e.g., nested JSON in a column) and added unit tests with `pytest`. When a vendor updated their schema, I proactively adjusted regex patterns, showing ownership of the data pipeline. The bar‑raiser would note my end‑to‑end solution, quantitative impact, and proactive learning loop.  

**Leadership Principles Highlighted**  
* **Ownership** – Took full responsibility from ingestion to production metrics.  
* **Dive Deep** – Analyzed missingness patterns before deciding on imputation strategy.  
* **Bias for Action & Deliver Results** – Delivered a cost‑effective, automated solution that directly improved model performance and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
