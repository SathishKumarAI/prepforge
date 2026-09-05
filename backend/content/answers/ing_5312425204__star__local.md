---
qid: ing_5312425204__star__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 351
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:21-05:00'
sources: []
---

**Situation:**  
At my last gig I was building a churn‑prediction model for a telecom client with 3 million customer records. The business wanted a reliable estimate of how many customers we could lose each quarter, so the evaluation had to be tight.

**Task:**  
I needed to split the data into training, development (validation), and test sets that reflected real‑world churn patterns while preventing leakage, and then benchmark several algorithms against this split.

**Action:**  
First, I stratified by churn label to keep the 8 % churn rate consistent across all splits. Then I applied a time‑based cut: the first 70 % of customers (by signup date) became training data, the next 15 % was dev, and the final 15 % test set. This preserved temporal ordering so future predictions weren’t tainted by past churn signals. I used scikit‑learn’s `train_test_split` with `shuffle=False`, and logged the exact split indices for reproducibility. After training a baseline logistic regression, I tuned an XGBoost model on the dev set using Optuna, then finally reported performance on the untouched test set.

**Result:**  
The XGBoost model achieved 0.72 AUC on the test data, up from 0.65 with logistic regression—a 9 % lift that translated to $1.2 M saved in proactive retention campaigns. I learned that a carefully engineered split can dramatically reduce over‑optimistic estimates and give stakeholders confidence in real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
