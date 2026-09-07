---
qid: ing_170c433dc6__faang__local
question: 'Explain: That''s why it''s really important to clean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:17-05:00'
sources: []
---

**Clarify**  
The interview asks *why data cleaning is critical in ML pipelines*. I’ll confirm the context: supervised learning, training/test splits, and model deployment.

**Approach**  
1. Highlight how raw data contains noise, missing values, outliers, and inconsistencies.  
2. Explain each impact on downstream tasks (bias, variance, convergence).  
3. Connect cleaning to key ML metrics and reproducibility.

**Depth**  

| Issue | Why it matters | Cleaning remedy |
|-------|----------------|-----------------|
| **Missing values** | Skips rows or imputes biased estimates → inflated error. | Impute with mean/median/mode or model‑based methods; drop if sparse. |
| **Outliers** | Skew loss functions, lead to overfitting or unstable gradients. | Winsorize, robust scaling, or remove based on domain rules. |
| **Inconsistent encoding** | Categorical mismatch causes duplicate features and mis‑labeling. | Standardize categories (one‑hot, label‑encoding). |
| **Noisy labels** | Trains model to learn errors → poor generalization. | Manual review, consensus labeling, or semi‑supervised correction. |
| **Feature scaling** | Gradient descent converges faster; distance‑based models become unreliable. | StandardScaler/MinMaxScaler. |

*Consequences*: Poor cleaning inflates bias (systematic error) and variance (sensitivity to training noise), hampers interpretability, and breaks reproducibility.

**Edge Cases**  
- Extremely sparse data: may need dimensionality reduction before cleaning.  
- Time‑series: missing timestamps require interpolation respecting seasonality.  
- Multi‑modal datasets: ensure consistent schema across sources.

**Optimize & Communicate**  
I’d automate a “data hygiene” pipeline (dedupe, impute, encode) with unit tests and dashboards to surface drift. During interviews I’ll emphasize that clean data is the foundation of any high‑performing ML system—without it, even the best algorithms fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
