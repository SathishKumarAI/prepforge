---
qid: ing_8b3d16b618__star__local
question: 'Explain: you''re dealing with these kinds of situations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:08-05:00'
sources: []
---

**Situation:**  
At my last company we had a customer churn prediction model that was only 68 % accurate. The marketing team needed a higher precision so they could target at-risk users without wasting budget.

**Task:**  
I was tasked with boosting the model’s F1‑score to above 80 % within two sprints while keeping inference latency under 50 ms for real‑time recommendations.

**Action:**  
First, I performed an error analysis and discovered that the dataset had a severe class imbalance (only 12 % churners). I applied SMOTE combined with a custom cost‑sensitive loss function in XGBoost. Next, I engineered new temporal features from user activity logs (e.g., rolling 7‑day engagement variance) and used feature selection via SHAP to keep the model lightweight. Finally, I switched from the default tree booster to the GPU‑accelerated “gpu_hist” mode and pruned trees with early stopping on a validation set.

**Result:**  
The F1‑score rose to 82 %, precision increased from 62 % to 78 %, and inference time stayed at 48 ms. The marketing team launched a targeted campaign that reduced churn by 4 % in the first month, saving $120K annually. I learned that balancing data, thoughtful feature engineering, and hardware‑aware optimization can deliver tangible business value without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
