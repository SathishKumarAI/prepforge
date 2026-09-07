---
qid: ing_592928f028__aws__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 533
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role as a data scientist at a fintech startup I was tasked with building an automated model‑selection pipeline for credit risk scoring. The problem required me to choose between dozens of linear models and regularisation schemes, so I implemented **AIC (Akaike Information Criterion)** and **BIC (Bayesian Information Criterion)** to penalise over‑fitting while keeping the solution interpretable.

**Situation:**  
We had 50 candidate models (ridge, lasso, elastic‑net with varying `alpha`s). Training a full grid search on a 1 M‑row dataset was slow and memory‑intensive.  

**Task:**  
Design a scalable, reproducible pipeline that selects the best linear model using AIC/BIC while keeping latency under 5 s for inference.

**Action (Technical Design):**  
- **Compute** log‑likelihood from `sklearn`’s `LinearRegression`, then calculate AIC = 2k – 2ln(L) and BIC = ln(n)·k – 2ln(L), where *k* is the number of parameters and *n* the sample size.  
- Wrap this logic in an **AWS Lambda** function (Python 3.10) triggered by a **Step Functions** workflow that iterates over model configs stored in **S3**.  
- Persist intermediate metrics to **Amazon DynamoDB** for auditability.  
- Use **SageMaker Processing** jobs for heavy training; results are pushed back to Lambda via SQS, ensuring eventual consistency and cost control (≈$0.10 per 1 M rows).  

**Result:**  
The pipeline reduced model‑selection time from 2 h to <30 min and lowered the false‑positive rate by **12%** compared to a naïve cross‑validation approach, directly boosting revenue.

**Leadership Principles Highlighted:**  
- *Customer Obsession*: Delivered a faster, more accurate risk score for end users.  
- *Dive Deep*: Calculated AIC/BIC analytically and validated with real data.  

**Bar‑raiser cues I heard:** ownership of the end‑to‑end workflow, depth in statistical justification, quantified impact (12% improvement), and lessons learned from initial trial failures that led to the Lambda/Step Functions architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
