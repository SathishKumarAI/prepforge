---
qid: ing_8fde30d07c__aws__local
question: 'Explain: A customer reports that another tenant''s data appeared in their
  agent''s response. Walk me through the next 72 hours.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 509
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:25-05:00'
sources: []
---

**Situation / Task**  
A multi‑tenant SaaS platform built on AWS was hit with a data leakage incident: tenant B’s customer records surfaced in tenant A’s AI agent responses. I led the response for the next 72 h.

**Action**  

| Hour | What I did | Why it matters |
|------|------------|----------------|
| **0‑2** | *Immediate triage* – notified Incident Response, pulled CloudTrail & GuardDuty logs, and isolated the affected Lambda functions via VPC endpoints. | Keeps the breach contained before more data leaks. |
| **2‑4** | *Root‑cause analysis* – discovered a mis‑configured DynamoDB Global Secondary Index that was shared across tenants; the AI inference Lambda used the wrong key. | Shows ownership & dive deep into AWS services. |
| **4‑8** | *Fix & test* – rewrote the Lambda to query a tenant‑specific table, added IAM conditions (`tenant_id = :tid`), and deployed via CodePipeline with a blue/green strategy. | Bias for action; minimal downtime. |
| **8‑12** | *Audit & hardening* – enabled DynamoDB point‑in‑time recovery, applied S3 bucket policies per tenant, and added AWS Config rules to flag shared resources. | Demonstrates ownership and preventive design. |
| **12‑24** | *Communication* – drafted a transparent customer email (incl. impact metrics: 1,200 records exposed) and scheduled a Q&A session. | Customer Obsession & Deliver Results. |
| **24‑48** | *Monitoring* – set up CloudWatch dashboards with alerts on cross‑tenant reads; ran automated scans with AWS Security Hub. | Ensures scalability of detection. |
| **48‑72** | *Post‑mortem & learning* – documented the incident, updated the knowledge base, and led a “lessons learned” workshop. | Bar‑raiser check: ownership, depth, quantified impact, and continuous improvement. |

**Result**  
Zero further data leaks; recovery time < 2 h, customer satisfaction score rose to 4.8/5, and our internal compliance audit passed with no findings. The new architecture supports 10× tenant growth while keeping cost < $0.02 per request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
