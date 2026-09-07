---
qid: ing_d95bf7de39__aws__local
question: 'Explain: Applied AI — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 408
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:31-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the launch of a “Job‑Fit AI” product that recommends open positions to internal candidates at a 50 % higher match rate than our legacy skills matrix. The goal was to reduce time‑to‑hire by 30 days and improve employee retention.

**Action**  
I owned the end‑to‑end ML pipeline:  
* **Data ingestion & storage:** Used S3 for raw resumes, DynamoDB for structured skill tags, and Glue to transform into a feature set.  
* **Model training:** Built a multi‑label classifier in SageMaker using PyTorch, fine‑tuned on our proprietary job taxonomy. I added an explainability layer with SHAP values to satisfy compliance.  
* **Deployment & scaling:** Deployed the model as a containerized endpoint behind API Gateway and Lambda for real‑time inference. Autoscaling thresholds were set at 70 % CPU to keep latency <200 ms, costing <$2k/month vs $15k for the legacy batch system.  
* **Monitoring & feedback loop:** Integrated CloudWatch metrics and SageMaker Model Monitor; retrained quarterly with new data, cutting prediction drift by 80 %.

**Result**  
Within six months:  
* Match accuracy jumped from 68 % to 89 %.  
* Time‑to‑hire dropped 32 days (≈30 %).  
* Internal satisfaction scores rose 15 pts.  

**Reflection**  
I practiced *Ownership* by taking full responsibility for the ML stack, and *Dive Deep* when troubleshooting a drift spike that revealed data labeling noise—leading to a new annotation protocol. The success underscored that rigorous, cost‑aware AWS services can deliver measurable business impact while staying scalable and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
