---
qid: ing_23afc4e8c8__faang__local
question: 'Explain: If you have duplicates in the data — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 423
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:02-05:00'
sources: []
---

**Clarify**  
We’re asked how duplicate rows affect a supervised learning pipeline and what we should do about them.  
*Assumptions I’d confirm:*  
1. Duplicates are exact copies of feature‑label pairs, not near‑duplicates.  
2. The dataset is split into train/validation/test sets before deduplication.

**Approach**  
1. Identify duplicates (e.g., `df.duplicated()`).  
2. Decide whether to drop or keep them based on the modeling goal:  
   * If duplicates represent genuine repeated observations, keep them; they’re part of the distribution.  
   * If they’re artifacts of data collection, remove them to avoid bias.

**Depth**  
*Effect on training:*  
- **Bias & variance:** Excessive duplicates inflate the apparent size of a class or feature value, leading to over‑confidence and under‑estimation of uncertainty.  
- **Modeling algorithms:** Tree‑based models are robust; linear models may overfit to repeated rows.  
*Implementation:*  
```python
# Remove exact duplicate rows
df_unique = df.drop_duplicates()

# Or keep one copy
df_keep_one = df[~df.duplicated(keep='first')]
```
Complexity: `O(n)` time, `O(k)` memory for hash‑set of seen rows.

**Edge Cases**  
- Near‑duplicates with slight noise still bias the model; consider clustering or distance‑based deduplication.  
- If duplicates span both train and test sets, you risk data leakage—ensure deduplication occurs before splitting.

**Optimize & Communicate**  
- Automate duplicate checks in data ingestion pipelines.  
- Log the count of removed rows for auditability.  
- For large‑scale data, use distributed hashing (e.g., Spark `dropDuplicates`).  

By handling duplicates thoughtfully, we preserve model integrity and maintain trustworthy performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
