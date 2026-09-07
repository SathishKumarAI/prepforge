---
qid: ing_adf53913e2__aws__local
question: 'Explain: Explain passed by value and passed by reference.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:52-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** While architecting a real‑time recommendation engine for an e‑commerce platform, I noticed that the feature extraction step was consuming 60 % of the batch job runtime on AWS Glue.  
> **Task:** Reduce the data movement cost and latency by re‑implementing the transformation logic in Python, ensuring the algorithm operated directly on the input dataset without unnecessary copies.  
> **Action:**  
> *Clarified requirements:* The function needed to process each user profile once, returning a transformed record for downstream ML training.  
> *Design:* I switched from passing entire Pandas DataFrames (by value) to using generators that yielded rows (effectively passed by reference). In Python, this means the function receives a lightweight iterator; only one row is loaded into memory at a time.  
> *AWS Services:* Deployed the refactored logic as an AWS Lambda layer triggered by S3 event notifications, leveraging Amazon DynamoDB for state persistence. The generator pattern eliminates intermediate S3 objects, cutting storage and I/O costs.  
> *Scalability & Cost:* With pass‑by‑reference, memory usage dropped from 8 GB to ~200 MB per worker, allowing us to run 10× more concurrent jobs on the same Lambda concurrency budget, saving ~$1.2k/month.  
> **Result:** Execution time fell from 20 min to 4 min (80 % reduction), and the overall cost of the ETL pipeline decreased by 35 %. The model training latency improved, enabling daily model refreshes instead of weekly.  

**Learning:** I learned that understanding language semantics (value vs. reference) can unlock significant operational efficiencies in cloud‑native ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
