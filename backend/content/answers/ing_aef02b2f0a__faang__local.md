---
qid: ing_aef02b2f0a__faang__local
question: 'Explain: Key Selection Factors — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 558
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:30:22-05:00'
sources: []
---

**Key Selection Factors – A Model‑Selection Playbook**

| **Step** | **What to Ask / Do** | **Why It Matters** |
|----------|----------------------|--------------------|
| 1️⃣ Clarify | *Problem scope:* data size, latency, interpretability, regulatory constraints. <br>*Assumptions:* labeled data available? Edge deployment? | Sets the “budget” for model complexity and training time. |
| 2️⃣ Approach | 1. **Baseline** – simple linear/ensemble. 2. **Feature‑engineering check** – if features are strong, a small model may suffice. 3. **Model family scan** – tree‑based, deep nets, transformers, hybrid. 4. **Evaluation metric** – accuracy, F1, AUC, latency, memory. | Gives a roadmap from cheap to costly options and keeps the focus on business KPIs. |
| 3️⃣ Depth | • **Tree ensembles (XGBoost/LightGBM)**: great for tabular data; ~O(n log n) training, low inference latency.<br>• **CNNs**: spatial data (images), O(∑layers · kernel_size).<br>• **Transformers**: sequence modeling, quadratic token‑token attention cost → use sparse or linearized variants if 10⁵ tokens.<br>• **AutoML / Hyper‑band**: automated search but adds ~3× training time. | Trade‑offs: accuracy vs. compute, interpretability vs. black‑box, memory footprint vs. throughput. |
| 4️⃣ Edge Cases | • **Small data & high noise** → Bayesian or regularized models to avoid overfitting.<br>• **Real‑time constraints** → quantize weights, use ONNX Runtime.<br>• **Regulatory** → prefer explainable models (SHAP, LIME) over deep nets. | Identifies failure modes early and informs fallback strategies. |
| 5️⃣ Optimize & Communicate | • Profile inference; prune or distill if latency > SLA.<br>• Document “why” each choice was made: feature importance, validation curves, cost–benefit matrix.<br>• Present a decision tree diagram to stakeholders for transparency. | Demonstrates end‑to‑end ownership and ensures non‑technical teams understand trade‑offs. |

**Bottom line:** Start with the simplest viable model, validate against business constraints, then iterate through increasingly expressive families while constantly measuring compute, latency, and compliance costs. This systematic approach keeps model selection aligned with both technical feasibility and product goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
