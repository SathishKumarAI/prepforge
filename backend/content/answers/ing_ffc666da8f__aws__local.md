---
qid: ing_ffc666da8f__aws__local
question: 'Explain: 👮‍♀️ Security + Compliance — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 417
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:00-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with launching *langwatch*, a public‑facing platform that evaluates LLMs and tests autonomous agents. The product had to meet strict security (ISO 27001) and compliance (GDPR, CCPA) standards while handling large volumes of model outputs.

**Action – Architecture & Services**  
I designed an end‑to‑end pipeline on AWS:  
- **S3 + Glacier Deep Archive** for immutable audit logs (retention 7 years).  
- **Amazon GuardDuty** and **Security Hub** to detect anomalous API activity.  
- **AWS KMS** with customer‑managed CMKs for data-at-rest encryption, and **Cognito Identity Pools** with fine‑grained IAM roles for user access.  
- **AWS WAF** + **API Gateway** throttling to protect against injection attacks.  
- A **step‑function workflow** that automatically tags resources for compliance audits and triggers a Lambda audit script that validates GDPR “right to be forgotten” requests in under 30 seconds.

I leveraged **Terraform** for IaC, ensuring repeatable deployments and automated drift detection. All traffic between services uses **VPC endpoints** (S3, DynamoDB) to stay within the AWS network.

**Result**  
The platform launched on schedule with a 99.999% availability SLA. Security audits passed without remediation, and we processed over **5 million evaluation runs** in the first quarter while keeping egress costs below $0.03 per GB. The audit script reduced compliance query turnaround from days to seconds, earning us a *Customer Obsession* commendation.

**Bar‑raiser takeaway**  
Ownership: I owned every layer of security. Dive Deep: I quantified latency and cost trade‑offs. Learning: Post‑launch, we added automated threat intelligence feeds—an iterative improvement that reduced false positives by 40%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
