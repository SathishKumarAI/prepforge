---
qid: ing_839b8013b8__faang__local
question: 'Explain: Follow-up Questions an Interviewer Might Ask'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 509
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:54-05:00'
sources: []
---

**Follow‑up questions an interviewer might ask after explaining AI concepts**

| # | Topic | Typical follow‑up | Why it matters |
|---|-------|------------------|----------------|
| 1 | **Model selection** | *“Why did you pick a transformer over an LSTM for this task?”* | Tests understanding of inductive biases, data size & inference latency. |
| 2 | **Data quality** | *“How would you handle class imbalance or noisy labels?”* | Probes preprocessing, loss re‑weighting and robust training techniques. |
| 3 | **Evaluation metrics** | *“Why use F1 instead of accuracy for this problem?”* | Checks knowledge of metric suitability under skewed distributions. |
| 4 | **Explainability** | *“What methods would you use to interpret the model’s decisions?”* | Looks at SHAP, LIME, attention visualisation or counterfactuals. |
| 5 | **Scalability** | *“How would you deploy this model in production with low latency?”* | Evaluates knowledge of model quantisation, distillation and serving stacks (TF‑Serving, TorchServe). |
| 6 | **Ethics & bias** | *“What steps would you take to mitigate algorithmic bias?”* | Assesses awareness of fairness metrics, audit pipelines and policy constraints. |
| 7 | **Research vs engineering trade‑offs** | *“When do you decide to implement a cutting‑edge technique versus a proven baseline?”* | Shows judgement on risk/benefit analysis and time‑to‑market. |

### How to answer

1. **Clarify** – restate the problem briefly, confirm assumptions (data size, latency requirement).  
2. **Approach** – outline your decision hierarchy: data → model → evaluation → deployment.  
3. **Depth** – give concrete techniques and their trade‑offs (e.g., transformer depth vs. GPU memory).  
4. **Edge cases** – discuss scenarios that break assumptions (outliers, concept drift).  
5. **Optimize & communicate** – finish with how you’d iterate on metrics, monitor in prod, and report findings to stakeholders.

This structure demonstrates clear reasoning, technical depth, and an awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
