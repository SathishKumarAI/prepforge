---
qid: ing_31c91deafc__aws__local
question: 'Explain: Q: "Design a tool-using agent system for automating invoice processing
  at a company that receives 5,000 invoices per month."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 453
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:35-05:00'
sources: []
---

**Situation** – Our finance team was drowning in ~5 000 paper and PDF invoices a month, causing a 15 % delay in payment cycles and $200k/year of manual labor.

**Task** – Build an end‑to‑end tool‑using agent that automatically extracts data, validates it against vendor contracts, flags anomalies, and posts to ERP—all while staying within the $50k annual ops budget.

**Action**  
1. **Document ingestion & OCR** – S3 bucket + **AWS Textract** (batch mode) → 99.8 % accurate extraction in <30 s per invoice.  
2. **Intent & validation agent** – Lambda orchestrated by Step Functions, calling a fine‑tuned **Amazon SageMaker** model to map fields and cross‑check against **DynamoDB** vendor tables (100 k vendors).  
3. **Workflow engine** – Amazon EventBridge triggers downstream approval or auto‑post to ERP via API Gateway + IAM roles.  
4. **Observability & cost control** – CloudWatch metrics feed a Cost Explorer dashboard; Lambda concurrency capped at 200, autoscaling based on queue depth.

**Result** – Reduced processing time from 3 days to <6 hrs (84 % faster), cut manual effort by 12 000 hrs/year (~$240k savings), and achieved >99.5 % data accuracy. The system handled a peak of 8 000 invoices/month with zero downtime, staying <$45k/yr.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results** – Faster, cheaper invoice flow for finance.  
- **Ownership & Dive Deep** – Built end‑to‑end pipeline, tuned OCR thresholds, and iterated on ML model until metrics hit targets.  

Bar‑raiser signals: quantified ROI, clear ownership of failure points (e.g., retraining model when accuracy dropped), and continuous learning loop with quarterly KPI reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
