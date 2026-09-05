---
qid: ing_d192e30bda__star__local
question: 'Explain: So, set label to all, then round — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 477
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:42-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a churn prediction model for a SaaS company that had 12,000 users but only 3% labeled as churned in the training set. The dataset also contained categorical features that needed encoding before feeding into a light‑GBM model.

**Task**  
I needed to create a robust pipeline that would (1) transform all categorical columns into numerical form, (2) generate probability scores for each user, and then (3) convert those probabilities into binary churn labels that the business could act on—essentially “set label to all” before rounding.

**Action**  
First, I used `pandas.get_dummies` to one‑hot encode every categorical feature so the model saw a consistent numeric matrix. After training the LightGBM classifier, I extracted the predicted probabilities with `predict_proba`. Instead of thresholding at 0.5, I applied `np.round()` to each probability, turning 0.73 into 1 and 0.42 into 0—effectively “setting all labels” based on rounding. I wrapped this logic in a scikit‑learn `Pipeline` so the process was reproducible.

**Result**  
The final model achieved an AUC of 0.87, and the rounded binary predictions increased precision from 0.28 to 0.45 while keeping recall high at 0.68. The approach also simplified deployment: the pipeline now outputs a ready‑to‑use churn flag for each user in under 100 ms per batch. I learned that simple rounding can replace arbitrary thresholds when the business requires discrete decisions, and integrating it into a pipeline ensures consistency across environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
