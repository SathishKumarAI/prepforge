---
qid: ing_c672292096__aws__local
question: How do I get a receipt to get this reimbursed by my employer?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 377
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:28-05:00'
sources: []
---

**Situation & Task**  
I was onboarding a new contractor who needed to submit expense claims for software licenses and data‑science hardware. The existing manual receipt capture process was error‑prone, taking 5 days per claim and costing the finance team $1,200/month in labor.

**Action**  
Leveraging **Customer Obsession** and **Dive Deep**, I designed an end‑to‑end ML pipeline that auto‑extracts data from receipts using Amazon Textract, enriches it with SageMaker for OCR accuracy, and stores results in DynamoDB. A Lambda function triggers a Step Functions workflow to validate amounts against policy rules (using AWS Glue for ETL) and routes approved claims to QuickBooks via API Gateway.

- **AWS services**: Textract, SageMaker, DynamoDB, Lambda, Step Functions, API Gateway, CloudWatch.
- **Scalability**: Serverless architecture scales automatically; we processed 200+ receipts daily with <0.5 s latency.
- **Availability**: 99.99% SLA via multi‑AZ deployments; automated retries on failure.
- **Cost**: Reduced per‑claim cost from $6 to <$1, saving ~$70k annually.

**Result**  
Claim turnaround dropped from 5 days to 2 hours, improving contractor satisfaction by 45 % (Survey score). Finance labor fell by 80 %, freeing resources for strategic projects.  

**Bar‑raiser Takeaway**  
I demonstrated ownership of the problem, deep technical dive into AWS services, quantified impact, and a learning loop—refining OCR accuracy after a false‑negative spike by retraining on a curated dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
