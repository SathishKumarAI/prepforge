---
qid: ing_67962cbd5a__star__local
question: 'Explain: Set — GitHub - Asabeneh/30-Days-Of-Python: The 30 Days of Python
  programming challenge is a step-by-step guide to learn the Python programming language
  in 30 days. This challenge may take more than 100 days. Follow your own pace. These
  videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 322
output_tokens: 309
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:59-05:00'
sources: []
---

**Situation:**  
During a Kaggle competition on customer churn, the training data had over 150 k rows and 70 features. Several columns were categorical (e.g., “plan_type”, “region”) and contained many duplicate values that inflated memory usage.

**Task:**  
I needed to encode those high‑cardinality categories efficiently while keeping the model fast enough for iterative experiments—ideally within a 2‑hour training window on my laptop.

**Action:**  
I used Python’s built‑in **set** to first identify unique values per column (`unique_vals = set(df[col])`). This gave me a compact list of distinct tokens. Then I mapped each token to an integer ID via a dictionary comprehension, creating sparse numerical arrays for the model. By converting the original pandas series to `np.array` with dtype `int32`, I reduced memory from ~2 GB to ~600 MB. I also leveraged the set to drop any unseen categories in the test split by intersecting with the training set’s unique values.

**Result:**  
Model training time dropped from 2 h 30 min to 45 min, and accuracy improved by 3 % due to cleaner feature encoding. I learned that a simple data structure like **set** can dramatically optimize preprocessing pipelines in ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
