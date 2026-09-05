---
qid: ing_23afc4e8c8__star__local
question: 'Explain: If you have duplicates in the data — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:21-05:00'
sources: []
---

**Situation:**  
During a Kaggle competition on predicting housing prices, I noticed that 3 % of the training set contained identical rows—same address, same features but slightly different target values due to data entry errors.

**Task:**  
I needed to clean the dataset so that the model wouldn’t overfit to repeated samples and inflate performance metrics, while preserving as much useful signal as possible.

**Action:**  
Using Pandas, I first identified duplicates with `df.duplicated(subset=feature_cols, keep=False)`. For each group of duplicates, I calculated the mean target value and retained a single row with that averaged price, adding a new column “dup_count” to capture how many times it appeared. This kept the data size manageable and avoided bias from outlier targets. I then split the cleaned set into train/validation using `train_test_split`, ensuring stratification on the “dup_count” so rare duplicates stayed represented.

**Result:**  
The final model’s validation RMSE dropped from 34 k to 29 k, a 15 % improvement. Additionally, cross‑validation showed reduced variance, confirming that duplicate removal enhanced generalization. I learned that thoughtful deduplication—averaging targets and flagging frequency—can be more effective than simple row dropping in real‑world ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
