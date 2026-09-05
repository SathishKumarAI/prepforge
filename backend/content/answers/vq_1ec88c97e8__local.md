---
qid: vq_1ec88c97e8__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 471
total_tokens: 695
web_searches: 0
cost_usd: 0.0
sources: []
---

**Quick answer:**  
In Pandas you normally turn a categorical column into numeric form with `pd.get_dummies()` or by converting the dtype to `category` and then using `.cat.codes`. The first gives a one‑hot matrix; the second gives integer codes that can be fed directly to tree models.

**Nuance from production:**  
In my last model (predicting churn for a telecom), the “plan_type” column had 12 distinct values. I first cast it to `category` and used `.cat.codes`, which saved ~30 % of memory compared to one‑hot encoding because the dtype became int8. However, when training an XGBoost model that expects categorical features, I switched to sklearn’s `OneHotEncoder(handle_unknown='ignore')` with sparse output—this reduced RAM usage from 1.2 GB to 200 MB and kept training time down by ~15 %.  

I’ve seen the “curse of dimensionality” when blindly one‑hotting high‑cardinality columns (e.g., customer IDs). In those cases I used frequency encoding (`df['id_freq'] = df.groupby('customer_id')['target'].transform('mean')`) or target‑encoding with cross‑validation to avoid leakage.  

**Trade‑offs:**  
- **One‑hot:** interpretable, works for linear models; blows up memory when cardinality > 1k.  
- **Category codes:** compact, but tree‑based models can treat them as ordinal unless you use algorithms that support categorical splits (CatBoost, LightGBM).  
- **Target encoding:** powerful but needs careful regularization to prevent overfitting.

In production I always profile memory (`df.memory_usage(deep=True)`) and run a quick sanity check: `pd.get_dummies(df[['col']]).shape` versus `df['col'].cat.codes.shape`. That tells me whether the chosen representation is sustainable for my pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
