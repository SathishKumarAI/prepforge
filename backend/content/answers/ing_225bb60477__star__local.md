---
qid: ing_225bb60477__star__local
question: 'Explain: ​ Features — What is Arize Phoenix? - Phoenix'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:59-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our production ML model for fraud detection had started drifting—false‑positive rates climbed from 2% to 8%, and we were losing trust with compliance partners. We needed a way to quickly identify which features were causing the drift.

**Task:**  
I was tasked with setting up an end‑to‑end observability pipeline that could surface feature-level insights in real time, so our data scientists could intervene before business impact worsened.

**Action:**  
I introduced Arize Phoenix. First, I instrumented our inference layer to push raw input features and model predictions to the Phoenix platform via its lightweight SDK. Then, using Phoenix’s built‑in statistical tests (e.g., Kolmogorov–Smirnov, Jensen–Shannon), I configured alerts for distributional shifts per feature. The platform automatically generated drift dashboards, highlighting top‑drifting attributes and their correlation with prediction changes. When a new payment gateway was integrated, Phoenix flagged the “merchant category code” feature as suddenly skewed, prompting us to retrain on recent data.

**Result:**  
Within two weeks we reduced false positives from 8% back to 2.3%, saving roughly $1.5 M in potential fraud payouts per quarter. The team now has a real‑time feature drift view that cuts model remediation time by 70%. I learned how observability tools like Arize Phoenix turn raw metrics into actionable insights, bridging the gap between ML ops and data science.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
