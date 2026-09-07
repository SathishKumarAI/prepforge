---
qid: vq_b6708bb2d8__aws__local
question: 60% chance of having the flu after having a positive test?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 463
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:26-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked by our health‑tech startup to build a model that estimates the probability of a patient actually having influenza after a positive rapid test. The product needed to be accurate enough for clinicians to decide on treatment plans and avoid unnecessary antivirals.

**Action (Dive Deep, Bias for Action, Invent & Simplify)**  
I first scoped the data: 120 k test records with 30 % positives, plus demographics and symptom severity scores. I engineered features such as *symptom duration*, *body‑temperature trend*, and *local flu prevalence* from CDC APIs.  
Using a **logistic regression** (easy to explain) on an Amazon SageMaker endpoint, I achieved an AUC of 0.87. To get the 60 % threshold, I calibrated probabilities with Platt scaling and validated against a hold‑out set—resulting in a true positive rate of 78 % at that cutoff.  
Deployment was on **AWS Lambda + API Gateway** for low latency (<50 ms) and auto‑scaling; the model itself ran in an **SageMaker endpoint** with *multi‑model* hosting to keep costs <$0.02 per inference.

**Result (Deliver Results)**  
After launch, clinicians reported a 30 % reduction in unnecessary antiviral prescriptions (saved ~$1M annually). The model’s 60 % probability threshold matched the clinical risk tolerance, improving patient trust and outcomes. I documented lessons—over‑fitting on symptom data was mitigated by cross‑validation, and continuous monitoring via CloudWatch alarms ensured drift detection.

**Bar‑raiser takeaways**  
- **Ownership**: From data prep to deployment, I owned every layer.  
- **Dive Deep**: I quantified feature importance and validated calibration rigorously.  
- **Quantified Impact**: 30 % cost savings, AUC 0.87, >78 % true‑positive rate.  
- **Learning from Failure**: Initial model over‑estimated risk; after recalibration we met the clinical target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
