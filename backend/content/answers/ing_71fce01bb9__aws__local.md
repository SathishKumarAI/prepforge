---
qid: ing_71fce01bb9__aws__local
question: 'Explain: Enterprise-grade security and controls — Secure legal AI for the
  most sensitive matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 421
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:11-05:00'
sources: []
---

**Situation / Task**  
At a global fintech client I was tasked with delivering an AI‑powered legal assistant that could draft and review highly confidential contracts—every decision had to satisfy GDPR, SOC 2, and the company’s own “Zero‑Trust” policy.

**Action**  
I owned the solution end‑to‑end.  
1️⃣ **Data isolation & encryption** – I used *Amazon S3* with *SSE‑KMS*, key rotation via *AWS Key Management Service*.  
2️⃣ **Secure inference** – Deployed a fine‑tuned LLM on *Amazon SageMaker* inside a *VPC* and accessed it through *PrivateLink*, ensuring traffic never hit the public internet.  
3️⃣ **Audit & compliance** – Leveraged *AWS CloudTrail* + *AWS Config* to log every model request/response, feeding an *Amazon Athena* dashboard for real‑time compliance checks.  
4️⃣ **Access control** – Integrated with *AWS IAM* and *Cognito*, enforcing least privilege and multi‑factor authentication.  
5️⃣ **Model governance** – Implemented a *Model Card* registry in *AWS CodeArtifact* and automated drift detection via *Amazon GuardDuty*.

**Result**  
- 99.9 % availability over 12 months, with zero data exfiltration incidents.  
- Compliance audit passed with a 0‑defect score; cost per inference dropped 35 % by moving to spot instances and auto‑scaling.  
- End users reported a 45 % reduction in manual review time.

**Reflection (Bar‑raiser focus)**  
I demonstrated ownership by steering the architecture, dove deep into encryption & audit trails, quantified impact with availability & cost metrics, and learned from an early false‑positive alert that led to tighter guard‑duty rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
