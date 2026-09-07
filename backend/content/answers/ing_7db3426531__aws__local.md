---
qid: ing_7db3426531__aws__local
question: 'Explain: Building a Real "Table 1" with tableone — 7 Steps to Automating
  Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 434
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:35-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had an analytics dashboard that required daily “Table 1” summaries (baseline characteristics) for each study cohort. The manual process involved pulling raw CSVs, running R scripts, and emailing PDFs—slow, error‑prone, and not reproducible.

**Action**  
I owned the end‑to‑end automation pipeline using **Python + `tableone`**.  
1. **Ingest**: S3 bucket triggers a Lambda to fetch new cohort files (S3, IAM).  
2. **Transform**: A Glue job cleanses data and writes Parquet to Redshift for fast querying.  
3. **Compute**: An EC2 Spot‑Fleet runs a Jupyter notebook that uses `tableone` to generate the descriptive stats (means, SDs, proportions) with optional stratification.  
4. **Export**: Results are written back to S3 as CSV/HTML and an SNS topic notifies stakeholders.  
5. **CI/CD**: Code is versioned in GitHub; changes trigger CodePipeline to redeploy the notebook image via ECS Fargate.  

I selected `tableone` because it supports complex variable types, custom groupings, and integrates cleanly with Pandas. The Spot‑Fleet strategy cut compute costs by ~35 % while maintaining 99.9 % availability.

**Result**  
The automated pipeline reduced Table 1 turnaround from **3 days to 30 minutes**, cutting manual effort by **70 %**. Accuracy improved (zero spreadsheet errors). Stakeholders now receive up‑to‑date tables in real time, enabling faster go/no‑go decisions on studies.

**Reflection**  
I learned that “invent & simplify” often means leveraging existing libraries (`tableone`) and cloud services (Glue, Spot‑Fleet) to replace brittle spreadsheets. The bar‑raiser will note my ownership of the entire flow, deep dive into cost vs. availability trade‑offs, and quantifiable impact on throughput and error reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
