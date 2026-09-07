---
qid: vq_978758f986__aws__local
question: What’s your favorite subject, and why?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 517
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:39-05:00'
sources: []
---

**Situation & Task**  
During my senior year at MIT I had to pick a capstone project that would showcase my passion for data science while also solving a real‑world problem. My “favorite subject” became **time‑series forecasting**, because it blends mathematics, machine learning, and tangible impact.

**Action**  
I built an end‑to‑end pipeline on AWS to predict demand for perishable goods in grocery stores:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Data ingestion | Amazon Kinesis Data Streams | Low latency, auto‑scaling with 10 k events/sec |
| Storage | S3 + Athena | Cost‑effective long‑term storage; serverless querying |
| Feature engineering | Glue ETL + SageMaker Pipelines | Automated schema discovery, versioning |
| Modeling | SageMaker Training (XGBoost) & SageMaker Neo | Fast training on spot instances, edge inference |
| Deployment | SageMaker Hosting + API Gateway | 99.99 % availability with multi‑AZ endpoint |
| Monitoring | CloudWatch + SageMaker Model Monitor | Drift detection and automated retraining |

I also used **AWS Step Functions** to orchestrate the workflow, ensuring idempotent retries and clear audit trails.

**Result**  
The model achieved a **12 % reduction in stockouts** and saved the client $2.4 M annually on waste costs—measured over a 6‑month post‑deployment period. The pipeline processed 50 TB of data per year at an average cost of $15k, compared to the previous on‑prem solution’s $45k.

**Reflection (Bar‑raiser cues)**  
- *Ownership*: I took end‑to‑end responsibility, from requirement gathering to post‑launch monitoring.  
- *Dive Deep*: I tuned hyperparameters and debugged drift issues that reduced false positives by 30 %.  
- *Quantified Impact*: Clear ROI figures demonstrate business value.  
- *Learning*: After an initial failure due to data schema changes, I introduced Glue cataloging, turning a single‑point‑of‑failure into a robust, self‑healing system.

**Leadership Principles Highlighted**  
1. **Customer Obsession** – Delivering measurable cost savings and inventory reliability for the grocery chain.  
2. **Ownership** – From design to production, I owned every layer of the stack and iterated based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
