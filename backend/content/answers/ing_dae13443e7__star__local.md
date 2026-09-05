---
qid: ing_dae13443e7__star__local
question: 'Explain: Dental Insurance — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 326
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:41-05:00'
sources: []
---

**Situation** – At a midsize health‑tech startup, the claims team was flagging an average of 4 % of dental claims as fraudulent, but manual reviews were taking weeks and inflating costs by ~12 %.  
**Task** – Build an automated ML system that could triage claims in real time, reducing false positives while catching at least 90 % of actual fraud.  
**Action** – I spearheaded a data‑engineering sprint: collected over 1 M claim records, engineered features like “frequency of same provider visits”, “average cost vs national median”, and encoded provider IDs with target‑encoded embeddings. Using Scikit‑Learn’s XGBoost, I tuned hyperparameters via Bayesian optimization (Optuna) to balance precision/recall. Integrated the model into the claims pipeline with Kafka streams; deployed as a Docker container on AWS ECS, monitored latency (<200 ms per claim). For explainability, added SHAP visualizations in the review dashboard so analysts could see top contributing factors.  
**Result** – The system cut manual review time by 70 % and reduced false positives from 4 % to 1.2 %, saving $1.3 M annually. Accuracy metrics: 92 % fraud recall, 94 % precision. I learned that marrying feature‑engineering with real‑time streaming infrastructure is key for scalable insurance ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
