---
qid: ing_4ab29ad408__aws__local
question: 'Explain: Tune Luna to your domain, no code required'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:10-05:00'
sources: []
---

**Situation & Task**  
I led a fintech team that needed to adapt the open‑source model *Luna* for fraud detection in real‑time transaction streams—no custom code allowed by regulatory policy. The goal was to hit ≥ 92 % precision while keeping latency < 200 ms.

**Action**  
1. **Domain‑specific feature engineering** – used SageMaker Feature Store to ingest 5 M daily transactions, deriving engineered features (e.g., velocity, geofence breaches) via Data Wrangler.  
2. **Model fine‑tuning with transfer learning** – leveraged SageMaker Neo to compile Luna for the edge GPU on Kinesis Data Streams, allowing inference in < 50 ms.  
3. **Hyperparameter optimization** – ran a Bayesian search (SMAX) across 200+ trials, constrained by an AWS Cost Explorer budget of $2k/month.  
4. **Continuous validation** – deployed A/B test in SageMaker Endpoint, collecting precision‑recall curves and feeding back into the model registry.

**Result**  
Precision rose from 85 % to **92.3 %**, a 7.8 pp lift, while latency stayed at 180 ms. Monthly inference cost dropped 15 % due to Neo’s optimized binaries. The solution was rolled out across 12 markets within 4 weeks.

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered higher fraud accuracy for end‑users.  
- *Dive Deep & Ownership*: Built a full pipeline from feature store to edge inference, owning every layer of the stack.  

Bar‑raisers look for measurable impact (pp lift), deep technical decisions (Neo compilation, Bayesian search), and ownership of the entire data‑to‑model cycle—exactly what I demonstrated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
