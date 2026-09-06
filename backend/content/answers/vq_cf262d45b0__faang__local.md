---
qid: vq_cf262d45b0__faang__local
question: How do you import a CSV file?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 420
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:29-05:00'
sources: []
---

**Clarify**  
You want to load tabular data from a CSV into memory for analysis or ML preprocessing.  
Assumptions: the file is UTF‑8, commas separate values, first row contains headers, no huge size that would require streaming.

**Approach**  
1. Pick a library (Python → `pandas`, R → `readr::read_csv`).  
2. Call the read function with proper options (`sep=','`, `header=True`).  
3. Convert to the desired data structure (DataFrame, NumPy array).  

**Depth**  
```python
import pandas as pd

# 1) Simple load
df = pd.read_csv('data.csv')          # defaults: sep=',', header=0

# 2) If large → use chunksize or dask for lazy loading
chunks = pd.read_csv('big.csv', chunksize=10_000)
for chunk in chunks:
    process(chunk)

# 3) Convert to NumPy if needed
X = df.drop(columns=['target']).values
y = df['target'].values
```
Complexity: O(n) time, O(n) memory.  
Trade‑offs: `pandas` is fast and feature‑rich; for streaming use `csv` module or `dask`.

**Edge Cases**  
- Missing values → `na_values`, `keep_default_na`.  
- Different delimiters → set `sep=';'`.  
- Quoted fields with commas → handled automatically.  
- Extremely large files → chunking or column‑wise reading.

**Optimize & Communicate**  
Explain that for production pipelines we’d add schema validation, log errors, and possibly cache the parsed file (e.g., Parquet). Convey reasoning: choose the right tool, handle size, ensure robustness to malformed rows. This demonstrates clear problem framing, systematic solution, and awareness of practical pitfalls—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
