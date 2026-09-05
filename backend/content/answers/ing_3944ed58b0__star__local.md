---
qid: ing_3944ed58b0__star__local
question: 'Explain: ML & Deep Learning Foundations - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:20-05:00'
sources: []
---

**Situation** – In my second year at a fintech startup, we had a quarterly goal to reduce fraud detection latency from 8 seconds to under 3 seconds while keeping false‑positive rates below 2%. The existing rule‑based system was too slow and brittle.

**Task** – I needed to design a predictive model that could be deployed in real time on our edge servers, train it efficiently on labeled transaction data, and explain its decisions to compliance auditors.

**Action** – First, I built a feature pipeline in Spark: engineered 120 one‑hot encoded categorical features plus 30 lagged metrics, then scaled them with MinMaxScaler. For the model, I chose a shallow feed‑forward network (3 hidden layers, ReLU activations) implemented in TensorFlow 2.x because it balances expressiveness and inference speed on our CPU hardware. I used cross‑entropy loss with class‑weighting to counter imbalance, trained for 10 epochs with Adam optimizer, and performed hyperparameter tuning via Bayesian optimization (Optuna). To satisfy auditors, I added a SHAP explanation layer that outputs feature importance per prediction, which we visualized in Grafana dashboards.

**Result** – The deployed model cut latency to 1.8 seconds (a 77% improvement) while maintaining a false‑positive rate of 1.7%. The project also earned us the “Innovation Award” for the quarter and taught me how to trade off depth versus inference cost in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
