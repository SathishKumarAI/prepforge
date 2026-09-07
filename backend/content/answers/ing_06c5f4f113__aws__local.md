---
qid: ing_06c5f4f113__aws__local
question: 'Explain: Data Exfiltration and Leakage — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:12-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑governance squad at a mid‑size fintech, we discovered that our on‑prem NLP model was inadvertently writing high‑value customer data to an unencrypted S3 bucket—an exfiltration risk that could breach GDPR and trigger $5 M penalties.

**Action (Technical & Leadership)**  
*Ownership + Dive Deep*: I immediately formed a cross‑functional task force, wrote a forensic audit script in Python (AWS Lambda), and scanned 12 TB of logs.  
*Design*:  
- **Data Discovery** – AWS Glue crawlers tag sensitive columns; Amazon Macie flags anomalies.  
- **Real‑time Monitoring** – CloudWatch Alarms trigger SNS notifications; EventBridge routes to a Step Functions workflow that pauses the affected SageMaker endpoint, runs a data‑masking Lambda, and restores service.  
- **Governance Layer** – AWS IAM policies enforce least privilege on S3 buckets; KMS encryption at rest + TLS in transit.  
*Bias for Action*: We rolled out the fix within 4 hrs, avoiding any customer exposure.

**Result (Quantified)**  
- Zero data loss incidents post‑deployment.  
- Reduced potential regulatory fines from $5 M to $0.  
- Cut manual audit time by 80 % (from 3 days → 6 h).  

**Reflection & Bar‑raiser cues**  
I documented the failure mode, updated the “exfiltration playbook,” and conducted a post‑mortem that highlighted the need for automated data discovery. This demonstrates **Ownership**, deep technical dive, measurable impact, and continuous learning—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
