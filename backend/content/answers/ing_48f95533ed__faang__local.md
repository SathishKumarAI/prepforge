---
qid: ing_48f95533ed__faang__local
question: 'Explain: We have null values. So in a — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we handle missing (null) values when building a model in Python. I’ll assume: *We have tabular data, some features contain NaNs, and we need to decide whether to drop or impute them before training.*  

**Approach**  
1. **Exploratory check** – `df.isna().sum()` per column, plot missingness heatmap.  
2. **Decide strategy** – drop rows/cols if < 5 % missing; otherwise impute.  
3. **Imputation** – use `SimpleImputer` (mean/median for numeric, most‑frequent for categorical) or model‑based (`KNNImputer`, `IterativeImputer`).  
4. **Pipeline integration** – wrap imputers in a `ColumnTransformer` so they’re applied automatically during cross‑validation.  

**Depth**  
```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer

num_cols = df.select_dtypes(include=['int64','float64']).columns
cat_cols = df.select_dtypes(include='object').columns

preprocess = ColumnTransformer(
    transformers=[
        ('num', SimpleImputer(strategy='median'), num_cols),
        ('cat', SimpleImputer(strategy='most_frequent'), cat_cols)
    ])

X_imp = preprocess.fit_transform(X)   # X is feature matrix
```
- **Complexity**: Imputation is O(n · p), negligible compared to model training.  
- **Trade‑offs**: Median vs mean (robustness), KNNImputer increases cost but may capture relationships.

**Edge Cases**  
- Entire column missing → drop it.  
- Mixed data types in a column → cast or treat separately.  
- Imputed values may bias downstream metrics; evaluate with cross‑validation.

**Optimize & Communicate**  
I’d benchmark different imputers on validation AUC/RMSE, log the results, and explain that while simple imputation is fast, sophisticated methods can improve performance if missingness isn’t random. This shows structured thinking, clear communication, and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
