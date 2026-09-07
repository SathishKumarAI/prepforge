---
qid: ing_47feb78b5d__aws__local
question: How do you respect access controls for client data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 398
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:20-05:00'
sources: []
---

**Situation / Task**  
I led the migration of a SaaS analytics platform to AWS for a Fortune‑500 client that handled > 10 TB/day of sensitive marketing data. The client’s compliance team required strict access controls and immutable audit trails.

**Action**  
* **Ownership & Customer Obsession** – I scoped a zero‑trust architecture, starting with IAM roles tied to least privilege and attribute‑based policies (AWS IAM + Cognito).  
* **Dive Deep** – Built an automated policy engine that maps user attributes (department, contract tier) to S3 bucket access via AWS Lake Formation.  
* **Bias for Action & Invent & Simplify** – Leveraged AWS KMS for server‑side encryption and AWS Macie to auto‑detect PII; integrated with Amazon GuardDuty for real‑time alerts.  
* **Deliver Results** – Deployed a Lambda‑driven audit pipeline that writes every read/write event to DynamoDB, then streams to CloudWatch Logs and an Athena‑backed dashboard.  

**Result**  
- Reduced unauthorized access incidents by 98 % in the first quarter.  
- Cut compliance reporting time from 5 days to 30 minutes (cost savings $12k/month).  
- Achieved 99.999% availability with multi‑AZ S3 and DynamoDB global tables, while keeping spend < $200k/yr.

**Bar‑raiser cues**  
* Demonstrated ownership of end‑to‑end security posture.  
* Deep dive into IAM, KMS, Lake Formation, and audit pipelines.  
* Quantified impact (incident reduction, cost savings).  
* Learned from a prior mis‑configured bucket that led to a 2‑hour breach window; fixed by implementing automated policy checks in CI/CD.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
