---
qid: ing_4da579d4c8__aws__local
question: 'Explain: Enterprise-Grade Security and Controls — Harvey | AI software
  for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:06-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team at a fintech startup, we were asked to build an AI‑powered legal assistant for enterprise clients that had to meet *ISO 27001* and *SOC 2* requirements. The product needed to ingest confidential contracts, provide automated red‑action, and deliver insights—all while staying compliant with GDPR.

**Task (T)** – Design a solution that guarantees end‑to‑end encryption, fine‑grained access control, and auditability without compromising latency or cost.

**Action (A)** –  
- **Architecture:** Layered VPC + private Subnets; data stored in *Amazon S3* with *SSE‑KMS*, backed by *AWS Lake Formation* for table‑level permissions.  
- **Compute:** *Amazon SageMaker* endpoints run the NLP models, protected by *IAM roles* and *AWS Secrets Manager*.  
- **Security Controls:**  
  - *Key Management Service (KMS)* rotates keys quarterly;  
  - *AWS CloudTrail* + *GuardDuty* for continuous monitoring;  
  - *AWS Config* enforces that no S3 bucket is publicly exposed.  
- **Compliance Automation:** Use *AWS Artifact* to pull SOC 2 reports, and run *AWS Audit Manager* to auto‑generate evidence.

**Result (R)** – The platform achieved a 99.999% SLA with <200 ms inference latency while keeping monthly spend under $12k. Compliance audits passed on the first attempt, eliminating 1.3 × the effort of manual log reviews.  

> **Leadership Principles:** *Customer Obsession* (meeting strict legal‑industry security needs) and *Ownership* (owning the entire compliance lifecycle).  
> **Bar‑raiser cues:** clear ownership, deep dive into AWS services, quantified cost/latency trade‑offs, and lessons learned from a failed early‑stage audit that prompted us to automate evidence collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
