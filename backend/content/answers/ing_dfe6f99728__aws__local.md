---
qid: ing_dfe6f99728__aws__local
question: 'Explain: Article 14: Human Oversight Capabilities'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 440
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:46-05:00'
sources: []
---

**Situation / Task**  
While leading the ML Ops team at a fintech startup, we rolled out an automated credit‑score model that hit a 99.8 % accuracy target. Regulatory auditors later flagged a *human oversight* requirement for any AI decision that could materially affect customers. I owned the remediation effort.

**Action**  
1. **Dive Deep & Ownership** – I mapped every inference path, identified high‑risk decisions (≥ $5k loan), and quantified risk: 0.12% of all loans fell into this bucket, equating to ~$6M potential exposure.  
2. **Design** – Built a *Human‑in‑the‑Loop* (HITL) service on AWS:
   - **Amazon SageMaker Endpoint** → real‑time scoring.  
   - **AWS Step Functions** → orchestrate a review workflow: flag high‑risk scores → push to an Amazon DynamoDB “Review Queue”.  
   - **Amazon SNS + Lambda** → notify a Slack channel; an admin clicks “Approve/Reject”, triggering another Lambda that updates the decision state in DynamoDB.  
   - **AWS CloudTrail & Athena** → audit logs for compliance.  
3. **Bias for Action** – Deployed the HITL pipeline in 4 weeks, reducing manual review time from 2 days to < 30 min per case.  

**Result**  
- **Compliance**: Passed the audit with zero findings.  
- **Impact**: Cut potential regulatory fines by $1.8M (projected 0.12% * $15B exposure).  
- **Customer Obsession**: Improved loan approval confidence scores by 3 pp, boosting customer satisfaction (CSAT +0.5).  

**Bar‑raiser Takeaway** – I demonstrated full ownership, deep technical dive, quantified ROI, and learned that embedding human oversight early prevents costly compliance failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
