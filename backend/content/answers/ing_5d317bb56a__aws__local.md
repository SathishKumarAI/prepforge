---
qid: ing_5d317bb56a__aws__local
question: 'Hosted model API or self-hosted open weights: how do you make the security
  and privacy call?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 516
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:29-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a product that exposed a large language model (LLM) to external partners via an API. We had to decide whether to host the model on AWS SageMaker or ship it as a Docker image for on‑prem deployment, while meeting strict data‑privacy regulations and minimizing cost.

**Action**  
1. **Dive Deep into Compliance** – mapped GDPR & HIPAA clauses to each hosting option; created a risk matrix (data exfiltration, insider threat).  
2. **Architect with AWS services** – chose SageMaker Endpoint for the hosted model (using *SageMaker PrivateLink* and *KMS‑encrypted EBS*) and *AWS Outposts* + *ECS on EC2* for self‑hosted workloads that needed local data residency.  
3. **Cost & Scalability Modelling** – ran a 30‑day simulation: hosted model cost $12k/month, self‑hosted $18k (incl. hardware amortization). Forecasted a 20% uplift in request volume; SageMaker auto‑scales to keep latency <200 ms with 99.9 % availability.  
4. **Security Controls** – implemented IAM roles, VPC endpoints, and continuous threat monitoring via GuardDuty. Added a “data‑masking” layer that strips PII before forwarding requests.

**Result**  
Implemented the hybrid architecture in 6 weeks, achieving a 35 % reduction in data‑exposure risk (verified by third‑party audit) while keeping costs within budget. Customer satisfaction scores rose from 4.2 to 4.8/5 due to faster response times and stronger privacy guarantees.

---

**Leadership Principles Reflected**

- **Customer Obsession** – prioritized user trust & compliance.  
- **Ownership** – drove end‑to‑end solution, owning both security and cost metrics.  
- **Dive Deep** – performed risk matrix, cost modelling, and threat analysis.  
- **Bias for Action** – delivered in 6 weeks, not months.  

**Bar‑raiser cues**

- Quantified impact (35 % risk reduction, 4.8/5 CSAT).  
- Demonstrated ownership of trade‑offs (cost vs. compliance).  
- Showed depth by detailing AWS services and security controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
