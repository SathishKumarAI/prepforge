---
qid: ing_51c3a4d31b__aws__local
question: What’s your remote work policy? — Careers \\ Anthropic
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 331
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:57-05:00'
sources: []
---

**Situation & Task**  
At my previous role, the data‑science team was split across three time zones. The manager asked me to design a remote‑work framework that would keep model pipelines on schedule while fostering collaboration and compliance with GDPR.

**Action (Design)**  
I drafted a policy anchored in **Customer Obsession** and **Ownership**.  

1. **Sync windows** – 2 h overlapping “core hours” for live code reviews, 30‑min daily stand‑ups via AWS Chime to keep context.  
2. **Model governance** – CI/CD on CodePipeline + SageMaker Pipelines; every model must pass an automated compliance check in a private VPC (AWS Config).  
3. **Security** – use IAM roles with least privilege, enforce MFA, and encrypt all data at rest with AWS KMS.  
4. **Scalability & cost** – on‑demand SageMaker endpoints auto‑scale per inference traffic; spot instances for training to cut GPU spend 35 %.  

**Result**  
Within six months the team hit a 98 % model deployment SLA, reduced infra costs by $120k annually, and received zero GDPR violations. The policy also doubled remote hires, expanding talent diversity.

**Reflection**  
I learned that clear ownership of “remote‑first” tooling prevents drift; I iterated on the sync windows after feedback loops and added a quarterly audit to ensure continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
