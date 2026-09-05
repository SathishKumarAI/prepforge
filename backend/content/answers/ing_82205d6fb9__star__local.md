---
qid: ing_82205d6fb9__star__local
question: 'Explain: On your machine you''re going to see — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:27-05:00'
sources: []
---

**Situation**  
When I started my data‑science internship, the team handed me a laptop that already had a pre‑installed “Python Full Course for Beginners” sandbox—essentially a curated Jupyter environment with Pandas, NumPy, Matplotlib and Scikit‑learn preloaded. The project was to predict customer churn for a telecom client within two weeks.

**Task**  
I needed to turn the raw CSV dataset (over 200 k rows) into a production‑ready model, train it in under 48 h, and deliver an AUC ≥ 0.82 on the held‑out test set while keeping inference latency below 50 ms per prediction.

**Action**  
I began by exploring the data inside the sandbox, using Pandas to clean missing values and engineer one‑hot encoded categorical features. I leveraged Scikit‑learn’s Pipeline to chain StandardScaler, PCA (reducing dimensionality to 20 components), and a GradientBoostingClassifier. To speed up hyperparameter tuning I ran Optuna within the Jupyter notebook, parallelizing trials across the laptop’s two cores with joblib. I also profiled inference time using joblib’s `Parallel` and measured latency in milliseconds.

**Result**  
The final model achieved an AUC of 0.84 on the test set, beating the target by 2 %. Inference averaged 35 ms per row, well under the 50 ms threshold. I learned how to harness a ready‑made Python environment efficiently, balancing feature engineering with pipeline automation to meet tight deadlines and performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
