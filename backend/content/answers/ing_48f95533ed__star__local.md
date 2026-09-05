---
qid: ing_48f95533ed__star__local
question: 'Explain: We have null values. So in a — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 370
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:37-05:00'
sources: []
---

**Situation**  
In my last internship I was building a churn‑prediction model for a telecom client. The raw CSV had over 12 % missing values in key features like `monthly_charge` and `customer_tenure`. If left untreated, the training process would crash or produce biased predictions.

**Task**  
I needed to clean the dataset so that every row could be fed into XGBoost without losing too much information or introducing leakage, while keeping the pipeline reproducible in a Jupyter notebook for stakeholders.

**Action**  
First, I used `pandas.isnull()` to quantify missingness per column and plotted histograms with Seaborn to see distribution gaps. For numeric columns I applied a two‑step imputation: mean imputation for low‑missing features (<5 %) and median + KNN (k=5) for highly sparse ones, using `sklearn.impute.KNNImputer`. Categorical columns were filled with the mode via `SimpleImputer(strategy='most_frequent')`. I wrapped all imputers in a `Pipeline` to ensure consistent preprocessing during cross‑validation. Finally, I added an “is_missing” flag for each imputed column so the model could learn patterns associated with missingness.

**Result**  
The cleaned dataset dropped from 12 % to 0 % raw nulls while preserving 98 % of the original rows. XGBoost’s AUC improved from 0.71 to 0.83, and the added flags contributed ~3 % lift. I learned that thoughtful imputation combined with feature engineering can turn a messy dataset into a high‑performing model without sacrificing interpretability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
