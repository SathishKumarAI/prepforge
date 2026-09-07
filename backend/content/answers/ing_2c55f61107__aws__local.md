---
qid: ing_2c55f61107__aws__local
question: 'Explain: Data Synthesis & Curation — Your AI Product Needs Evals \u2013
  Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 517
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:22-05:00'
sources: []
---

**Situation (S)**  
I was tasked with launching a generative‑AI platform for a fintech client that required regulatory‑grade model validation. The existing data pipeline was ad‑hoc and lacked reproducibility, so every new model version triggered manual audits—costing 3 weeks per release.

**Task (T)**  
Design an automated “Data Synthesis & Curation” workflow that feeds continuous evaluation data into the AI training loop while meeting compliance standards.

**Action (A)**  

| Step | AWS Service(s) | Why |
|------|----------------|-----|
| 1. ingest raw logs and transactional data | **Amazon Kinesis Data Streams**, **Glue** | Real‑time capture, schema discovery |
| 2. clean & augment with synthetic samples | **AWS SageMaker Ground Truth + Custom Transformations** | Reduces bias, preserves privacy |
| 3. store curated dataset in versioned, immutable format | **Amazon S3 Glacier Deep Archive** + **S3 Object Lock** | Cost‑effective long‑term storage, regulatory immutability |
| 4. trigger automated evaluation pipelines | **AWS Step Functions** orchestrating **SageMaker Processing Jobs** | Declarative workflow, retries, visibility |
| 5. publish metrics & alerts | **Amazon CloudWatch**, **SNS**, **QuickSight dashboards** | Real‑time monitoring, owner ownership |

The pipeline is fully **serverless** (no EC2), scales to 10 M rows/day, and keeps latency < 30 s for evaluation triggers. I added a “data drift” guard that flags anomalies before model deployment.

**Result (R)**  
- Reduced audit turnaround from 3 weeks to **1 day**.  
- Cut infrastructure spend by **40%** versus the on‑prem solution.  
- Enabled continuous compliance checks, giving the product team confidence to release new features at a 2× faster cadence.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered a compliant, low‑latency evaluation loop that meets regulatory demands.  
- **Ownership** – Architected end‑to‑end pipeline, drove cost savings and operational resilience.  

Bar‑raisers will note my deep dive into data governance, quantifiable impact on release velocity, and iterative learning from the first failed drift detection rule (we pivoted to a Bayesian approach).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
