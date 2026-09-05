---
qid: ing_84502dd5a4__star__local
question: 'Explain: 1.1.3.2.4. Comparison with the regularization parameter of SVM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 514
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:57-05:00'
sources: []
---

**Situation**  
I was working on a churn‑prediction project for a telecom client. The training set had 120 k rows and 45 features, many of which were highly correlated. Early models overfit and the test AUC dropped from 0.83 to 0.68.

**Task**  
My goal was to regularize the model effectively—comparing how a penalty term in logistic regression (λ) behaved against the SVM’s inverse‑regularization parameter C—to keep generalization high while retaining interpretability.

**Action**  
I built two pipelines: one using scikit‑learn’s `LogisticRegression` with both L1 and L2 penalties, sweeping λ from 10⁻⁴ to 10²; another using `SVC(kernel='linear')`, tuning C over the same range. For each λ or C I ran 5‑fold CV, recorded AUC and coefficient sparsity (for L1). I plotted λ/C versus validation loss to spot the “knee” point. To keep fairness, both models used the exact same feature scaling and cross‑validation splits.

**Result**  
The optimal λ for L2 was 0.03 (AUC = 0.87), while the best C for SVM was 10 (AUC = 0.86). The L1 model with λ = 0.01 achieved AUC = 0.84 but dropped to only 12 non‑zero features, giving a clear interpretability advantage. I learned that λ in logistic regression and C in SVM are inversely related (larger λ ↔ smaller C), but the choice depends on whether sparsity or a soft margin is more valuable for the business objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
