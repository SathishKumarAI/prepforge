---
qid: ing_06414fd213__aws__local
question: Where is my data hosted and processed? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 382
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:57-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that needed to build an AI‑powered compliance engine for highly regulated KYC data. The board demanded *zero‑knowledge* of customer data: it must stay in the U.S., never leave the VPC, and all model inference had to be auditable.

**Action**  
- **Ownership & Customer Obsession:** I scoped a fully isolated architecture on AWS GovCloud (US‑East) with a dedicated KMS key per tenant.  
- **Dive Deep & Bias for Action:** Leveraged *Amazon SageMaker* for training inside an encrypted EFS volume, and *AWS Lambda* + *Step Functions* for inference so no data touches the public internet.  
- **Invent & Simplify:** Implemented a “model‑as‑service” pattern using SageMaker’s endpoint with *private VPC endpoints*, wrapped in a *API Gateway (REST)* that logs every request to *CloudTrail*.  
- **Deliver Results:** The system processed 1 M records/day, achieved 99.999% availability via multi‑AZ deployment, and cut model rollout time from weeks to days—saving ~30k USD/month on compute.

**Result**  
- 100% compliance with FedRAMP High; no data ever left the VPC.  
- Latency < 200 ms per inference, throughput > 10K TPS.  
- Reduced audit effort by 70%, enabling quarterly reviews in under an hour instead of days.

**Bar‑raiser notes** – I demonstrated end‑to‑end ownership, quantified performance and cost savings, and learned from a prior failure where we used public endpoints; that mistake taught me the value of *private networking* for regulated data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
