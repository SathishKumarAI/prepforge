---
qid: ing_05f753e1b1__aws__local
question: 'Explain: You''re using LLM-as-judge. Why should I trust the judge? Walk
  me through calibrating it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 481
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:13-05:00'
sources: []
---

**Situation** – In a fintech startup we needed an on‑prem LLM to act as a *judge* for contract compliance. Clients demanded auditability and regulatory confidence.

**Task** – Build a trustworthy judge that could be audited, calibrated, and scaled without compromising latency or cost.

**Action**  
1. **Ownership & Customer Obsession**: I mapped each claim the model makes to an explicit rule set (e.g., “no clause over 20 % of contract length”). Every inference is logged with *input hash*, *model ID*, *timestamp*, and *confidence score*.  
2. **Dive Deep** – Created a calibration pipeline using *AWS SageMaker Ground Truth* for human‑verified labels, then applied *temperature scaling* (AWS Lambda) to align predicted probabilities with observed accuracy (target 95 % precision at 80 % recall).  
3. **Bias for Action & Deliver Results** – Deployed the model in a *multi‑region Amazon SageMaker endpoint* behind an API Gateway with WAF protection, guaranteeing <20 ms latency and 99.9 % availability. Cost was controlled by using *SageMaker Neo* to compile the model for inference on spot instances (≈ 30 % savings).  
4. **Invent & Simplify** – Implemented a *model‑version rollback* feature: if post‑deployment metrics drift >2 %, Lambda automatically reverts to the last stable checkpoint.

**Result** – After 3 months, audit reports showed 99.7 % compliance accuracy; customer churn dropped by 12 %. The model’s confidence scores correlated with human review errors (r = 0.85), giving auditors a clear risk metric.

---

### Bar‑raiser cues
- **Ownership**: End-to-end accountability for data, model, and infra.  
- **Dive Deep**: Quantitative calibration, explicit rule mapping, and drift monitoring.  
- **Impact**: Tangible 12 % churn reduction and audit confidence boost.  
- **Learning from Failure**: Built automated rollback; learned to set tighter calibration thresholds after a mid‑year drift event.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
