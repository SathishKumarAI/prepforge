---
qid: ing_f7b4b18ce1__aws__local
question: 'Explain: Commuter Allowance — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 395
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:34-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a data‑driven model that predicts whether an employee will take the company’s *Commuter Allowance* benefit (“Join Us” program) so we could pre‑allocate vouchers and reduce over‑provisioning.

**Action**  
- **Ownership & Bias for Action:** I assembled a cross‑functional squad (HR, Finance, Data Engineering) and set a 4‑week sprint.  
- **Dive Deep / Technical Design:**  
  - Collected 1 M rows of historical voucher usage + demographic, location, and traffic data.  
  - Built a supervised binary classifier in SageMaker using XGBoost; features included commute distance, public‑transport frequency, weather, and employee tenure.  
  - Deployed the model as an HTTPS endpoint (API Gateway → Lambda) with auto‑scaling; cold start < 150 ms.  
- **AWS Services:** SageMaker for training & inference, Glue for ETL, DynamoDB for real‑time flag storage, CloudWatch for metrics, and Cost Explorer to track spend.  
- **Scalability / Availability:** 99.95 % SLA with multi‑AZ deployment; cost per prediction < $0.01.

**Result**  
- Prediction accuracy improved from 68 % (rule‑based) to **82 %** (ML).  
- Voucher over‑provisioning dropped by **27 %**, saving ~$120K annually.  
- The model is now used in 3 additional benefit programs, scaling the ROI linearly.

*Bar‑raiser focus:* I demonstrated end‑to‑end ownership, deep technical reasoning, quantified business impact, and iterated quickly after a first false‑positive spike by adding a confidence threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
