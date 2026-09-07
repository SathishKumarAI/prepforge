---
qid: ing_3238408b14__aws__local
question: Why should the issuing bank be compensated?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 487
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:39-05:00'
sources: []
---

**Situation (S)**  
When we launched a fraud‑detection ML model for our retail‑banking app, the issuing banks were paying us $0.50 per transaction flagged by our system. The model processed 12 M transactions/month and flagged 3 % as potentially fraudulent.  

**Task (T)**  
I was tasked with proving that the bank’s fee structure should be revised to a value‑based model rather than a flat rate, so we could capture the true cost savings they were receiving.

**Action (A)**  
1. **Dive Deep into Cost & Savings** – I pulled 6 months of audit logs and built an ETL pipeline in **AWS Glue** to aggregate per‑transaction data. Using **Amazon Athena**, I calculated that each flagged transaction avoided an average $35 chargeback, yielding a *$4.2 M* monthly savings for the bank.  
2. **Design a Compensation Model** – Leveraged **Amazon SageMaker** for model inference and **AWS Lambda** to emit a “cost‑savings event” to **Amazon SNS** whenever a flag prevented a loss. The event payload included the transaction amount, risk score, and avoided loss estimate.  
3. **Implement & Test** – Deployed the Lambda function in a multi‑AZ VPC for 99.999% availability. Cost was <$10/month vs. $0.50/flagged txn = $600k saved for us.  

**Result (R)**  
Negotiated a *$2.00 per avoided loss* fee, increasing our monthly revenue from $6 M to $12 M—an 100% lift—while the bank realized an additional $4.8 M in savings. This partnership also reduced false positives by 15% after retraining on real‑world data.

**Leadership Principles Highlighted**  
- **Customer Obsession & Ownership** – I owned the end‑to‑end financial impact for both parties.  
- **Dive Deep & Bias for Action** – Rapidly extracted actionable metrics and implemented a production solution in <3 weeks.  

Bar‑raisers will note my quantitative justification, clear cost‑benefit trade‑offs, and learning loop that tightened model precision post‑deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
