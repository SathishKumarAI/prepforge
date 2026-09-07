---
qid: ing_c8058a7c01__aws__local
question: 'Explain: Implementing hold-out cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 402
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:27-05:00'
sources: []
---

**Situation** – While building a fraud‑detection model for our payment gateway, the data scientist team needed to evaluate performance on highly imbalanced transactions (0.5 % fraud). The team used a simple hold‑out split that inadvertently left out many rare fraud cases, causing over‑optimistic metrics.

**Task** – I was asked to redesign the evaluation pipeline so that it still used a hold‑out strategy but ensured every fold contained enough fraud examples without using stratified sampling (our data lake only supports plain S3 reads).

**Action** –  
1. **Own** the problem: I wrote an AWS Glue job that scans the raw parquet files, counts fraud labels per day, and writes a small “sampling table” to DynamoDB.  
2. **Dive Deep** into cost‑scaling: The job runs once per week, costing <$5, and updates only the metadata table.  
3. For each training run I queried DynamoDB for the required number of fraud records, then randomly sampled non‑fraud records from S3 using `AWS Data Wrangler`’s `read_parquet()` with a random offset.  
4. I wrapped this logic in an AWS Step Functions state machine that feeds the data into SageMaker’s built‑in `Train` job.  

**Result** – The new pipeline reduced variance in AUC from 0.02 to <0.005 and increased true positive rate by 12 % on live traffic, saving ~30 % of compute hours over the next quarter.

> **Leadership Principles**: *Ownership*, *Dive Deep*.  
> **Bar‑raiser focus**: ownership of data pipeline, depth in cost‑effective design, measurable lift, learning from the prior over‑optimistic evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
