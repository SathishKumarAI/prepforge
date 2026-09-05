---
qid: ing_aa4fba7b9a__star__local
question: 'Explain: Cleaning and Normalization — Data Engineering For Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 372
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:09-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with building a recommendation engine for an e‑commerce platform that had 12 million user sessions stored across multiple CSVs and a legacy MySQL database. The raw logs were riddled with missing values, inconsistent timestamps, and duplicate clicks.

**Task**  
I needed to create a clean, scalable dataset so the downstream machine‑learning pipeline could train in under an hour and produce a click‑through‑rate (CTR) boost of at least 5 %.

**Action**  
First I wrote an Airflow DAG that pulled data from S3, MySQL, and Kafka into a Delta Lake table on Databricks. Using PySpark I performed schema inference, dropped rows with >30 % nulls, and applied `F.udf` to convert mixed‑format timestamps to UTC epoch seconds. For categorical fields (device type, country) I used frequency encoding and replaced rare values with “Other”. I also implemented a deduplication window of 5 minutes per user session via Spark’s Window functions, which cut duplicate clicks by 18 %. Finally, I applied MinHash LSH to detect near‑duplicate sessions and removed them.

**Result**  
The cleaned dataset shrank from 12 million raw rows to 9.4 million high‑quality records, reducing training time from 3 hours to 45 minutes. The recommendation model achieved a 6.7 % CTR lift on the test set, surpassing our target. I learned that investing in robust data pipelines pays off faster model iteration and higher business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
