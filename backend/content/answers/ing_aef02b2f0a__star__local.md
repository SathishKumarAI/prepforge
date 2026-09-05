---
qid: ing_aef02b2f0a__star__local
question: 'Explain: Key Selection Factors — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 343
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:02-05:00'
sources: []
---

**Situation:**  
When my team launched a fraud‑detection platform for a regional bank, our initial models were overfitting and lagging behind the real‑time transaction volume of 12 k per hour.

**Task:**  
I had to build a model‑selection framework that balanced accuracy, latency, explainability, and deployment cost so we could hit an AUC >0.92 while keeping inference time under 10 ms on edge devices.

**Action:**  
First, I gathered performance metrics (ROC‑AUC, precision@k), resource constraints (CPU cycles, memory), and regulatory requirements for model auditability. I created a weighted scoring rubric: accuracy 40%, latency 30%, interpretability 20%, and cost 10%. Using this, I benchmarked XGBoost, LightGBM, and a shallow neural net across 5 cross‑validation folds. I also ran a cost‑benefit analysis on GPU vs. CPU inference. Finally, I automated the rubric in a CI pipeline that flagged any model falling below threshold.

**Result:**  
The framework landed us with a LightGBM model achieving 0.94 AUC, 8 ms latency, and full SHAP explainability. Deployment cost dropped 25% compared to our original GPU‑heavy approach, and the bank reported a 30% reduction in false positives over three months. I learned that quantifying trade‑offs upfront turns subjective “best model” choices into reproducible decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
