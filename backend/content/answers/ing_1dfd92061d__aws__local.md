---
qid: ing_1dfd92061d__aws__local
question: 'Explain: Multilingual Handling — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 387
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:34-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI Ops team at a SaaS firm, we received an influx of support tickets in 12 languages. Our existing NLP pipeline only handled English, causing SLA drift (average resolution time rose from **2 h to 8 h**) and customer churn spikes.

**Action**  
I owned the solution:  

1. **Research & Prototype** – Built a multilingual ingestion layer using Amazon Translate + Amazon Comprehend for language detection and sentiment scoring.  
2. **Design** – Deployed an event‑driven architecture on **Amazon SQS → Lambda → DynamoDB** to store ticket metadata, with **Amazon Textract** extracting text from PDFs/Images.  
3. **Scaling & Cost** – Leveraged **Lambda's concurrency limits** and scheduled bursts via CloudWatch Events; estimated $0.15 per 1 k tickets vs the $2.50 cost of a third‑party API.  
4. **Governance** – Added an IAM role that enforced least privilege, and used **AWS Config Rules** to audit data access.  
5. **Continuous Improvement** – Implemented a feedback loop: every resolved ticket updates a *confidence* score in DynamoDB; low scores trigger human review.

**Result**  
Within 3 months, we cut average resolution time from **8 h to 1.2 h** (85% reduction), decreased churn by **12%**, and saved roughly **$75k annually** on external translation services.  

*Leadership Principles*: **Ownership** – I drove the end‑to‑end solution; **Dive Deep** – dissected every metric and AWS cost component to optimize performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
