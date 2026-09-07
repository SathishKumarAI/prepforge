---
qid: ing_2be9b9d178__faang__local
question: 'Explain: Pushing Pandas Further with include , .agg() , and groupby'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 452
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:06-05:00'
sources: []
---

**Clarify**  
You want to extend pandas’ grouping capabilities beyond simple `mean`/`sum`. Specifically: use the `include=` argument in `groupby`, chain `agg()` for multi‑aggregate, and combine them with custom functions. Confirm that the data is a DataFrame, columns are numeric where needed, and you’re comfortable with lambda syntax.

**Approach**  
1. Call `df.groupby(['colA', 'colB'], include=['numeric','datetime'])`.  
2. Pass a dictionary or list to `.agg()`: `{colC: ['mean', np.std], colD: custom_func}`.  
3. Optionally rename columns with `rename_axis`/`reset_index`.

**Depth**  
```python
import numpy as np

def skewness(x):
    return x.skew()

result = (
    df.groupby(['category','region'], include=['numeric'])
      .agg({'sales': ['sum', 'mean'],
            'profit': [skewness, np.std],
            'date': lambda d: d.max()})
      .reset_index()
)
```
- `include` filters which column types participate in the groupby (e.g., only numerics).  
- The dictionary syntax lets each column have its own list of aggregations.  
- Custom functions can be any callable; pandas automatically passes a Series.

**Edge Cases**  
- Non‑numeric columns with custom ops → `TypeError`.  
- Missing values: aggregates ignore NaNs by default; use `skipna=False` if needed.  
- Duplicate column names after aggregation require MultiIndex handling.

**Optimize & Communicate**  
- For large datasets, compute aggregates in Cython or via `numba`‑accelerated functions to avoid Python loops.  
- Explain that chaining keeps the pipeline readable and leverages pandas’ vectorized internals.  
- Summarize: use `include=` for type filtering, `.agg()` with dict/list for multiple stats, and custom callables for domain logic—all while maintaining O(n) complexity per group.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
