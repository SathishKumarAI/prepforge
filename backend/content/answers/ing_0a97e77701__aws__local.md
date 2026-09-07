---
qid: ing_0a97e77701__aws__local
question: 'Explain: Step 2: Create Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 507
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:42-05:00'
sources: []
---

**Scenario – Building a Test Set for AI Capability Assessment**

**S**ituation  
Our ML team needed to validate the performance of a new image‑recognition model that would power an AR shopping app. The product manager demanded a reliable, reproducible test set to benchmark “accuracy vs. recall” before launch.

**T**ask  
Design a pipeline that automatically pulls fresh data, labels it, and produces a statistically sound test set with minimal manual effort while ensuring we meet SLAs for nightly model updates.

**A**ction  
1. **Data Ingestion & Labeling** – Use **S3** to store raw images; trigger an **AWS Glue** job to pull the latest 100 k images from the prod bucket, strip metadata, and route them to a **Ground Truth** labeling queue.  
2. **Quality Assurance** – Run a **Glue ETL** that checks label consistency (≥95 % agreement) and removes duplicates.  
3. **Statistical Sampling** – Generate a stratified sample with **Athena** queries (Python UDFs) to guarantee representation across product categories (5 % each).  
4. **Versioning & Deployment** – Store the final test set in an S3 bucket tagged with `TestSet-v{date}` and publish its manifest via **SageMaker Model Monitor** for continuous drift checks.

**R**esult  
The pipeline cut labeling time from 7 days to <12 hours, reduced manual review effort by 80 %, and produced a test set that led to a 3.2 % lift in model accuracy after iterative tuning. We achieved >99.9 % availability for nightly runs while keeping costs under $120/day.

**Leadership Principles Highlighted**

- **Ownership** – Built an end‑to‑end solution, taking full responsibility for data quality and reliability.  
- **Dive Deep** – Applied statistical sampling and automated QA to surface hidden label errors early.  

**Bar‑raiser Takeaway**  
They’ll look for evidence of *deep ownership*, concrete *data‑driven impact*, and an understanding that a well‑engineered test set is the foundation for reliable AI delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
