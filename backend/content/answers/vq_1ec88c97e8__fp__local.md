---
qid: vq_1ec88c97e8__fp__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 553
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:50-05:00'
sources: []
---

**Why Pandas needs a special “categorical” type**

When we have a column that takes only finitely many distinct values (e.g., *species*, *status*), treating it as plain strings forces the engine to store each value separately for every row.  
Pandas’ `Categorical` solves this by representing the column as an integer array of **codes** plus a list of unique **categories**. The memory‑saving is \(O(k)\) instead of \(O(n\cdot|v|)\), where *k* is the number of distinct values and *n* the row count.

---

### From first principles

1. **Data compression** – If you encode “A” → 0, “B” → 1, …, every cell becomes a single byte instead of an arbitrary‑length string.
2. **Fast grouping/aggregation** – Groupby on categorical columns is \(O(n)\) because the codes are already sorted by value; the group keys come from the category list.
3. **Order preservation** – By default, categories are sorted lexicographically, but you can supply an explicit order (e.g., “low” < “medium” < “high”), turning a nominal variable into an ordinal one without numeric conversion.

---

### Practical steps

```python
import pandas as pd

df = pd.DataFrame({'color': ['red', 'blue', 'green', 'red']})

# 1. Convert to categorical (auto‑sorted)
df['color_cat'] = df['color'].astype('category')

# 2. Inspect the underlying representation
print(df['color_cat'].cat.categories)   # Index(['blue', 'green', 'red'])
print(df['color_cat'].cat.codes)         # array([2, 0, 1, 2])

# 3. Supply a custom order (ordinal)
order = ['low', 'medium', 'high']
df['status'] = pd.Categorical(df['status'],
                              categories=order,
                              ordered=True)

```

---

### Non‑obvious insight

> **The integer codes are *not* the actual data values; they’re merely an index into the category list.**  
> Because of this, you can safely perform arithmetic on the codes (e.g., `df['color_cat'].cat.codes + 1`) to create new features or re‑order categories without touching the original strings. This hidden “code space” is what enables many efficient algorithms in Pandas and downstream libraries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
