---
qid: vq_1ec88c97e8__faang__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 508
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:52-05:00'
sources: []
---

**Clarify**

You want to convert *categorical* columns (e.g., “color”, “state”) into a format that ML models can ingest.  
Assumptions: the data is in a `pandas.DataFrame`, missing values are possible, and you’ll feed it into a scikit‑learn pipeline.

**Approach**

1. Identify categorical columns (`df.select_dtypes(include='object')` or `cat`).  
2. Decide on encoding: *ordinal* (if natural order) or *one‑hot*.  
3. Use `pandas.CategoricalDtype` to enforce consistent categories, then transform with `get_dummies()` or `sklearn.preprocessing.OneHotEncoder`.  
4. Store the encoder for inference.

**Depth**

```python
import pandas as pd
from sklearn.preprocessing import OneHotEncoder

cat_cols = df.select_dtypes(include='object').columns.tolist()

# 1️⃣ Ensure consistent categories (handles unseen levels)
cat_dtype = pd.api.types.CategoricalDtype(categories=None, ordered=False)
df[cat_cols] = df[cat_cols].astype(cat_dtype)

# 2️⃣ One‑hot encode
enc = OneHotEncoder(handle_unknown='ignore', sparse=False)
X_cat = enc.fit_transform(df[cat_cols])

# 3️⃣ Combine with numeric features
X_num = df.drop(columns=cat_cols).values
X_final = np.hstack([X_num, X_cat])
```

- **Complexity:** O(n * k) where `k` is number of unique categories per column.  
- **Trade‑off:** One‑hot inflates dimensionality; use hashing or target encoding for high‑cardinality features.

**Edge Cases**

- Missing values → encode as separate category (`df[col].fillna('missing')`).  
- New levels at inference → `handle_unknown='ignore'` keeps shape consistent.  
- Ordinal columns mis‑encoded → leads to spurious numeric ordering; verify domain knowledge.

**Optimize & Communicate**

Explain that using `pandas.CategoricalDtype` guarantees deterministic encoding, while `OneHotEncoder(..., sparse=False)` keeps the result dense for small datasets but switch to sparse if memory is a concern. Highlight that this pipeline can be wrapped in a `ColumnTransformer`, making it production‑ready and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
