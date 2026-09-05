---
qid: ing_5b28c47e20__star__local
question: 'Explain: Opening the box: a quick tour of interpretability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 310
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:49-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we launched an AI‑driven credit scoring model that was performing well on accuracy metrics but our compliance team flagged it for lack of transparency during regulatory audits.

**Task** – I had to quickly demonstrate the model’s decision logic to stakeholders, identify any bias signals, and produce a report that satisfied auditors without compromising proprietary algorithms.

**Action** – First, I used SHAP (SHapley Additive exPlanations) to compute feature attributions for each prediction. I visualized these with waterfall charts in Python’s Plotly library, highlighting top drivers like income‑to‑debt ratio and payment history. Next, I built a local surrogate model—a shallow decision tree—trained on the same data to approximate the black box behavior; this provided an intuitive rule set that could be inspected by compliance officers. Finally, I generated an interactive dashboard in Streamlit where users could tweak input features and see real‑time attribution shifts.

**Result** – The audit was cleared within three days, and we reduced model review time from 10 hours to under 2. Compliance reported a 40% increase in confidence scores. I learned that pairing global explainers with local surrogates offers both regulatory compliance and actionable business insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
