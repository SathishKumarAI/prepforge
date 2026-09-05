---
qid: ing_3ef4e056fc__star__local
question: 'Explain: Featured topics — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 360
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:11-05:00'
sources: []
---

**Situation:**  
At my previous role at a data‑science consultancy, we were hired by IBM to improve the accuracy of their “Think Topics” recommendation engine, which surfaces relevant research papers for users based on past reading behavior. The existing model had an 68 % precision and was lagging behind competitors.

**Task:**  
I needed to redesign the feature set and retrain the model so that precision rose above 80 % while keeping inference latency under 200 ms per request, as required by IBM’s real‑time platform.

**Action:**  
First, I performed an in‑depth feature audit: added contextual embeddings from BERT for paper abstracts, incorporated user click‑through history with time‑decay weighting, and engineered interaction terms between author reputation and venue impact factor. Using Python/Scikit‑learn pipelines, I built a gradient‑boosted tree (XGBoost) model, tuned hyperparameters via Optuna, and validated on a 10 % holdout set. To meet latency constraints, I distilled the boosted trees into a lightweight CatBoost model and deployed it with ONNX runtime in IBM Cloud Functions.

**Result:**  
Precision increased to 82 %, recall improved from 55 % to 68 %. Latency stayed below 180 ms, enabling real‑time recommendations. The project taught me how careful feature engineering combined with model distillation can deliver measurable gains without compromising performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
