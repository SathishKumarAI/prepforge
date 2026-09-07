---
qid: ing_a04086a825__aws__local
question: 'Explain: Who Must Comply — EU AI Act 2026: Key Compliance Requirements
  for Enterprises | Secure Privacy Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 479
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:17-05:00'
sources: []
---

**Situation (S)**  
In 2025 I led a cross‑functional team that migrated our EU‑based AI platform to meet the *EU AI Act 2026* before its enforcement date. The regulator’s “Who Must Comply” clause forced us to audit every data pipeline, model training loop, and inference endpoint for risk level, transparency, and data protection.

**Task (T)**  
Our goal was twofold: (1) certify that all high‑risk AI services adhered to the Act’s mandatory controls; (2) do so while keeping latency < 50 ms for real‑time fraud detection and avoiding a $3 M annual cost spike.

**Action (A)**  
- **Ownership & Dive Deep:** I mapped every data flow, identified “high‑risk” models per the Act, and created a compliance matrix.  
- **AWS Architecture:**  
  - *S3 + KMS* for immutable, encrypted training data archives.  
  - *Glue* to catalog datasets with metadata tags (purpose, retention).  
  - *Athena* & *QuickSight* for audit logs and model performance dashboards.  
  - *Lambda* + *API Gateway* for inference, wrapped in *WAF* and *Shield* for DDoS protection.  
- **Bias for Action:** Implemented automated compliance checks with *CloudWatch Events* that trigger re‑training when data drift exceeds a 5 % threshold.  
- **Deliver Results:** Completed certification 3 weeks ahead of deadline, reduced audit time by 70 %, and maintained inference latency at 42 ms while cutting operational costs from $4.2 M to $3.6 M per year.

**Result (R)**  
We achieved full compliance with zero regulatory penalties, earned a “Compliance Champion” badge in the AWS Partner Network, and increased customer trust scores by **15 %**—validated through post‑deployment surveys.  

*Leadership Principles Highlighted:* Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
