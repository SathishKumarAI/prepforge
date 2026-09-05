---
qid: vq_4755d664a7__fp__local
question: What is the correct way to iterate over a Pandas DataFrame?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 408
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:33:16-05:00'
sources: []
---

Iterating over a **Pandas** `DataFrame` is not just a syntactic convenience; it’s the bridge between row‑wise logic and vectorised algebra.  
At its core, a DataFrame is an *ordered* collection of columns (Series). Each column is a contiguous block of memory that Pandas can operate on en masse. When you write

```python
for col in df:
    ...
```

you’re iterating over the **column names** – essentially stepping through each vector. This works because the underlying C implementation stores column objects in a list, so the loop is O(n) where *n* is the number of columns.

If you need to process rows, two principled options exist:

1. **Vectorised operations** – let NumPy/Pandas apply functions across an entire axis (`df.apply`, `df.transform`). This exploits contiguous memory and SIMD instructions.
2. **`itertuples()`** – returns namedtuples that reference the original data without copying. It’s O(rows) *and* cache‑friendly because each tuple reads a row’s columns in one pass.

Why not `iterrows()`? That yields Series objects, which allocate new Python objects per iteration; it breaks the vectorised design and incurs heavy overhead.

**Non‑obvious insight:**  
When you iterate with `itertuples()`, Pandas reuses the same underlying buffer for each tuple. This means *the values are views*, not copies—mutating them changes the original DataFrame. Many developers mistakenly think they’re safe to modify, but any in‑place change will bleed through.

In summary:  
* iterate columns with a simple `for` loop;  
* iterate rows via `itertuples()` for speed and memory safety;  
* prefer vectorised methods whenever possible, because that is what Pandas was built around.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
