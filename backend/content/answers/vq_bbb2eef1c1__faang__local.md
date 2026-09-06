---
qid: vq_bbb2eef1c1__faang__local
question: How can I rename a Pandas DataFrame's index or columns?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 447
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:37-05:00'
sources: []
---

**Clarify**  
You want to change the labels of either the rows (`index`) or columns (`columns`) of a `pandas.DataFrame`.  
Assumptions:  
1. You have an existing DataFrame (`df`).  
2. You know the new labels you wish to assign (list, array, or mapping).  

**Approach**  
1. Decide whether to rename **all** labels or just a subset.  
2. Use `df.index` / `df.columns` assignment for wholesale changes.  
3. For partial renames, use `df.rename()` with the appropriate axis and a mapping dictionary.

**Depth**  
```python
import pandas as pd

# 1) Replace entire index/columns
df.index = ['a', 'b', 'c']          # length must match df.shape[0]
df.columns = ['x', 'y', 'z']        # length must match df.shape[1]

# 2) Partial rename via mapping
df.rename(index={'old_a': 'new_a'}, columns={'col_old': 'col_new'}, inplace=True)

# 3) Using a list/array for all labels
df.index = pd.Index(['a', 'b', 'c'])
```
Complexity is **O(n)** where *n* is the number of labels, as pandas copies the label array.  
`inplace=True` mutates the original DataFrame; otherwise it returns a new copy.

**Edge Cases**  
- Mismatched lengths raise `ValueError`.  
- Duplicate names may lead to ambiguous column selection.  
- Renaming with non‑unique indexes can break alignment in joins/merges.  

**Optimize & Communicate**  
For large dataframes, prefer `df.rename()` (lazy mapping) over reassigning the entire index if only a few labels change—this saves memory and CPU. Always document changes; use `df.copy()` before destructive ops during debugging. This structured reasoning aligns with FAANG expectations for clarity, correctness, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
