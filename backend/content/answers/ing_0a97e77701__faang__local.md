---
qid: ing_0a97e77701__faang__local
question: 'Explain: Step 2: Create Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:44-05:00'
sources: []
---

**Clarify**

You’re asked to explain the “Create Test Set – Capability Assessment” step in an AI model‑development pipeline.  
Assumptions: we’re building a supervised ML model (classification/regression), the training set is already defined, and we need to evaluate model performance on unseen data.

---

**Approach**

1. **Define success criteria** – metrics (accuracy, F1, RMSE) that align with business goals.  
2. **Partition the data** – hold‑out or k‑fold cross‑validation to ensure statistical independence.  
3. **Curate representative samples** – include edge cases, class imbalance, and distribution shifts.  
4. **Annotate / label** – verify labels for quality; use consensus or expert review if needed.  
5. **Create a benchmark** – baseline model or rule‑based system to compare against.

---

**Depth**

- *Data split*: 70/15/15 (train/validation/test) or stratified k‑fold when classes are imbalanced.  
- *Metrics*: For classification, precision–recall curve and ROC AUC; for regression, MAE + R².  
- *Statistical tests*: Use bootstrap confidence intervals to assess significance of improvements.  
- *Bias detection*: Check demographic parity or equal opportunity across protected groups.  

*Complexity*: Data‑split O(n). Labeling is often the bottleneck; use active learning to reduce effort.

---

**Edge Cases**

- **Data drift**: If test distribution differs from training, performance will degrade.  
- **Label noise**: Random mislabeled samples inflate error estimates.  
- **Small sample size**: High variance in metrics; consider Bayesian calibration.

---

**Optimize & Communicate**

- *Iterate*: Use validation results to tweak preprocessing or feature engineering before final test.  
- *Explainability*: Provide SHAP plots on the test set to show feature importance consistency.  
- *Narration*: “By rigorously constructing a statistically sound test set that mirrors real‑world conditions, we can objectively quantify our model’s capability and ensure it meets stakeholder expectations.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
