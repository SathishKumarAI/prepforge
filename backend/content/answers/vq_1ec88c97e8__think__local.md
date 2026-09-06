---
qid: vq_1ec88c97e8__think__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 516
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:14:54-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - *Goal:* Understand how to represent, manipulate, and analyze non‑numeric (categorical) columns in a DataFrame.  
   - *Assumptions:* The user has basic Pandas knowledge; data may come from CSV/SQL; they want efficient memory usage and correct statistical handling.

**2. Adopt the “Categorical Series” mental model**  
   - Treat categorical data as a *Series* with a special `dtype='category'`.  
   - Remember that categories are an ordered set of unique values, each mapped to an integer code internally.

**3. Step‑by‑step reasoning**  
   1. Load the DataFrame.  
   2. Identify columns that should be categorical (e.g., status flags, labels).  
   3. Convert with `df['col'] = df['col'].astype('category')` or `pd.Categorical`.  
   4. Explore categories: `df['col'].cat.categories`, `df['col'].cat.codes`.  
   5. Use methods like `.cat.add_categories()`, `.cat.remove_categories()` to modify the set.  
   6. Leverage grouping and aggregation (`groupby('col')`) which becomes faster with categorical dtypes.  
   7. If ordering matters, specify `ordered=True` or provide an explicit order list.

**4. Common traps to avoid**  
   - *Unintended dtype conversion:* Converting a string column that already has many unique values will increase memory, not reduce it.  
   - *Missing categories:* Dropping levels with `.cat.remove_categories()` can silently lose data if not checked.  
   - *Incorrect ordering:* Using an unordered categorical when order matters (e.g., ordinal scales) leads to wrong comparisons.

**5. Sanity‑check & verbalize**  
   - Verify memory usage before/after conversion (`df.memory_usage(deep=True).sum()`).  
   - Print `df['col'].head()` and the categories list to ensure correctness.  
   - Explain that Pandas internally stores a small integer array plus a category mapping, which speeds up equality checks and reduces RAM for high‑cardinality columns.  

By following this structured approach, you can confidently convert, inspect, and exploit categorical data in Pandas while avoiding common pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
