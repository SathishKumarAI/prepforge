---
qid: vq_8ebd21dc51__eli5__local
question: How to join two tables using dataframes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 258
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:00-05:00'
sources: []
---

Think of two spreadsheets as two different recipe books that share a common ingredient—say “Ingredient ID.” If you want a single book that lists each ingredient’s name from the first book and its price from the second, you *join* them on that shared ID.

In data engineering with Pandas (the most popular Python dataframe library), this is done with `merge()`.  
```python
merged = df1.merge(df2, how='inner', on='ingredient_id')
```
- **`df1`, `df2`** are the two tables.  
- **`on=`** tells Pandas which column they have in common (the key).  
- **`how=`** chooses what to keep:  
  * `inner` keeps only rows that appear in both books,  
  * `left` keeps all from the first book and adds matching info when available,  
  * `right` does the opposite,  
  * `outer` keeps everything from both.

The result is a new dataframe where each row combines columns from both original tables based on the shared key—just like merging two recipe books into one complete guide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
