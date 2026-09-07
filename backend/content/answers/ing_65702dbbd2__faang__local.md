---
qid: ing_65702dbbd2__faang__local
question: 'Explain: Getting the Baseline with df.describe() — 7 Steps to Automating
  Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 530
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:16-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise walk‑through of how to generate a “baseline” descriptive report for any DataFrame using `df.describe()`. I’ll assume the data is numeric (or categorical where appropriate) and that we want an automated pipeline that can be reused across projects.

---

### 1. Load & Inspect
```python
import pandas as pd
df = pd.read_csv(path)
print(df.head())
```
Confirm columns, missingness, dtypes.

### 2. Clean / Convert Types  
*Cast numeric columns to `float64`/`int64`.  
*For dates: `pd.to_datetime`.

### 3. Compute Descriptive Stats  
```python
desc = df.describe(include='all')
```
This returns count, mean, std, min, 25%, 50%, 75%, max for numeric; and unique, top, freq for objects.

### 4. Add Custom Aggregates  
Define a function `custom_stats(col)` that returns median, IQR, skewness, kurtosis (via SciPy). Apply via `df.apply(custom_stats)`.

### 5. Handle Missing Values  
Compute missing rate per column: `(df.isna().mean()*100).round(2)`. Append as new row/column to the report.

### 6. Export & Visualize  
*Export to CSV or Excel (`desc.to_csv('baseline.csv')`).  
*Quick plots (histograms, boxplots) using `seaborn` for sanity checks.

### 7. Automate in a Class / Script  
Encapsulate steps in a `BaselineReport(df)` class with methods: `clean()`, `stats()`, `export()`. Add optional parameters (e.g., which stats to include).

---

**Depth** – Complexity is O(n·m) for m columns and n rows; all operations are vectorized, so memory‑intensive only when holding intermediate DataFrames. Trade‑off: adding custom stats increases CPU but gives richer insight.

**Edge Cases** – Empty DataFrame, all NaNs in a column, non‑numeric data types that `describe` ignores. Test by feeding synthetic DataFrames covering these scenarios.

**Optimize & Communicate** – I’d mention lazy evaluation with Dask for huge datasets, and caching the report to avoid recomputation. In an interview, I would narrate each step clearly, showing how modular functions facilitate debugging and reuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
