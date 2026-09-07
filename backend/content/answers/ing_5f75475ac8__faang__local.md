---
qid: ing_5f75475ac8__faang__local
question: You have 48 hours before a demo to a Fortune 500 executive team, using their
  data. What do you build and what do you deliberately cut?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 542
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:23-05:00'
sources: []
---

**Clarify**  
You’re asked: *“With only 48 h, using a Fortune‑500 client’s proprietary data, what MVP can you deliver for a demo and what do you leave out?”*  
Assumptions to confirm:  

1. **Data volume & format** (structured vs. unstructured).  
2. **Privacy/PII constraints** – must anonymize before use.  
3. **Evaluation criteria** – accuracy, speed, interpretability.  
4. **Deployment window** – demo will run on the client’s infra or a cloud sandbox.

---

**Approach**  

1. Pick a *high‑impact, low‑effort* problem (e.g., churn prediction).  
2. Build an end‑to‑end pipeline: ingestion → preprocessing → feature engineering → model training → scoring.  
3. Use AutoML/feature‑store for speed; keep the codebase < 200 lines.  
4. Integrate a lightweight explainability layer (SHAP values) so executives see why predictions matter.

---

**Depth**  

- **Data prep**: sample 10k rows, impute missing values, encode categoricals with target encoding.  
- **Model**: Gradient‑Boosted Trees (XGBoost) – 5 min training, < 0.02 s inference.  
- **Explainability**: SHAP summary plot + top 3 features per prediction.  
- **Demo**: interactive dashboard (Streamlit/Plotly) showing live churn risk and mitigation actions.

---

**Edge Cases**  

| Issue | Mitigation |
|-------|------------|
| Out‑of‑distribution samples | Flag & log, show confidence intervals |
| PII leakage | Hash identifiers before modeling |
| Model drift | Include a “retrain” button for future runs |

---

**Optimize & Communicate**  

- **Speed**: Use GPU‑accelerated training if available; otherwise rely on CPU‑friendly trees.  
- **Modularity**: Separate data, model, and UI layers so each can be swapped out.  
- **Narrative**: Start with business impact (e.g., “reducing churn by 3 % saves $X”), show the pipeline flow, then walk through a live example.  

By focusing on a single, high‑value metric and delivering an end‑to‑end, explainable prototype in under 48 h, you demonstrate rapid value creation while respecting data constraints—exactly what a Fortune 500 executive expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
