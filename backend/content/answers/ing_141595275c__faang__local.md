---
qid: ing_141595275c__faang__local
question: 'Explain: Feature Selection Techniques in Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 432
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:46-05:00'
sources: []
---

**Feature Selection Techniques – Structured FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how we reduce dimensionality while keeping predictive power. We’ll assume a supervised learning setting, tabular data, and that the goal is to improve model performance or interpretability.” |
| **Approach** | 1️⃣ *Filter* (univariate statistics) <br>2️⃣ *Wrapper* (search algorithms with cross‑validation) <br>3️⃣ *Embedded* (model‑based regularization). I’ll outline each, then discuss trade‑offs. |
| **Depth** | • **Filter:** Pearson/Spearman correlation, ANOVA F‑test, mutual information. Fast, model‑agnostic; may miss feature interactions.<br>• **Wrapper:** Recursive Feature Elimination (RFE), sequential forward/backward selection. Uses a chosen estimator; guarantees optimal subset for that estimator but is expensive—\(O(n \times k)\) evaluations.<br>• **Embedded:** L1‑regularized linear models (Lasso), tree‑based importance (Random Forest, XGBoost). They learn weights during training; computationally cheaper than wrappers and capture interactions. |
| **Edge Cases** | • Highly correlated features → filter may drop useful combos.<br>• Small datasets → wrapper overfits; prefer embedded or cross‑validated filter.<br>• Categorical variables with many levels → need one‑hot encoding before filtering, else bias toward high cardinality. |
| **Optimize & Communicate** | “I’d start with a quick correlation heatmap to spot multicollinearity, then run an L1‑regularized logistic regression to get a baseline importance vector. If performance stalls, I’d try RFE with a gradient‑boosted tree and 5‑fold CV; this balances accuracy and runtime. Throughout, I’ll log feature importances, monitor validation loss, and ensure reproducibility via random seeds.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
