---
qid: ing_13162b9f63__aws__local
question: 'Explain: Stage 1: Application and Resume Screening (1-3 Weeks)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:46-05:00'
sources: []
---

**Situation & Task**  
I led a hiring platform for a global retailer that had to process **120k** job applications per month while keeping the candidate experience top‑notch. The first stage—application and resume screening—had to be automated, scalable, and compliant with GDPR.

**Action (Design)**  
1. **Data ingestion:** Amazon S3 + Kinesis Data Streams captured PDFs/Word files in real time.  
2. **Pre‑processing & NLP:** AWS Glue crawled the data into a catalog; Textract extracted text, then an AWS SageMaker endpoint ran a custom BERT model fine‑tuned on our internal job‑role taxonomy.  
3. **Scoring & filtering:** Lambda functions pushed feature vectors to Amazon DynamoDB for fast lookups; an SQS queue fed a fleet of Spot EC2 instances running inference via the same SageMaker endpoint, scaling from 10–200 workers in under 30 s.  
4. **Compliance & audit:** All logs went to CloudTrail and Athena queried them for GDPR‑ready reporting.

**Result**  
- Screening time dropped from **3 days → 48 hours** (average).  
- Accuracy of role match improved from **68% → 92%**, cutting the recruiter’s manual review load by **70%**.  
- Cost per application fell to **$0.03** versus $0.15 in the legacy system.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered a faster, higher‑quality candidate experience.  
- **Dive Deep & Ownership:** Designed end‑to‑end data flow, tuned models, and owned post‑deployment monitoring.  

Bar‑raisers look for evidence of ownership (I handled every layer), depth (I dove into model tuning, cost modeling, and compliance), quantified impact (exact metrics above), and learning from failure (we iterated the model after a 2% drop in accuracy during beta).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
