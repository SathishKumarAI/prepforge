---
qid: vq_1ec88c97e8__star__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 364
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:49-05:00'
sources: []
---

**Situation:**  
While working on a customer churn prediction project for a telecom client, our training dataset had over 300,000 rows and more than 50 columns. Several fields—like “contract type,” “payment method,” and “internet service”—were strings but represented a limited set of categories.  

**Task:**  
I needed to convert these string columns into efficient categorical types for memory savings, faster group‑by operations, and to ensure the machine‑learning pipeline treated them as nominal variables rather than arbitrary integers.

**Action:**  
Using Pandas, I first inspected each column’s unique values with `df[col].unique()`. Then I applied `pd.Categorical` to convert them:  
```python
cat_cols = ['Contract', 'PaymentMethod', 'InternetService']
for c in cat_cols:
    df[c] = pd.Categorical(df[c], categories=sorted(df[c].unique()), ordered=False)
```
I verified the conversion with `df.dtypes`. For downstream modeling, I used `pd.get_dummies` on these categorical columns and checked that the resulting dummy matrix had the expected number of columns. I also benchmarked memory usage before and after: a drop from 3.2 GB to 1.7 GB.

**Result:**  
The data pipeline ran 40% faster, and the model training time decreased by 25%. The reduced memory footprint allowed us to run experiments on a single workstation instead of a cluster. I learned that properly categorizing text columns not only optimizes performance but also clarifies the semantics for both engineers and data scientists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
