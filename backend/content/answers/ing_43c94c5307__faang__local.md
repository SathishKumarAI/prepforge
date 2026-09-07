---
qid: ing_43c94c5307__faang__local
question: 'Explain: How to Clean Messy CSV Files with Python: A Beginner’s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 628
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:07-05:00'
sources: []
---

**Clarify**

You need a reproducible pipeline that can ingest any “messy” CSV—missing delimiters, inconsistent quoting, stray whitespace, duplicate headers—and output a clean DataFrame ready for ML.  
Assumptions to confirm:  
* The file is small enough to fit in memory (≈ 10‑100 MB).  
* You’re using `pandas` and Python 3.8+.  

**Approach**

1. **Load with robust options** – use `pd.read_csv(..., error_bad_lines=False, warn_bad_lines=True)` or the newer `on_bad_lines`.  
2. **Trim whitespace** – strip spaces from column names and string columns (`df.columns = df.columns.str.strip()`).  
3. **Standardize separators** – detect delimiter via `csv.Sniffer` if unknown.  
4. **Handle missing values** – fill or drop (`df.dropna()` or `df.fillna(method='ffill')`).  
5. **Deduplicate rows/columns** – `df = df.loc[:,~df.columns.duplicated()]`.  

**Depth**

```python
import pandas as pd, csv, io

def clean_csv(path):
    # 1. Detect delimiter
    with open(path, 'r', encoding='utf-8') as f:
        sample = f.read(1024)
    delim = csv.Sniffer().sniff(sample).delimiter

    # 2. Read with error handling
    df = pd.read_csv(path, delimiter=delim,
                     on_bad_lines='skip',
                     dtype=str)          # read all as str to avoid dtype issues

    # 3. Strip whitespace
    df.columns = df.columns.str.strip()
    for col in df.select_dtypes(include=['object']).columns:
        df[col] = df[col].str.strip()

    # 4. Deduplicate columns
    df = df.loc[:, ~df.columns.duplicated()]

    # 5. Handle missing values (example: drop rows with >30% NaNs)
    thresh = int(0.7 * len(df.columns))
    df.dropna(thresh=thresh, inplace=True)

    return df
```

Complexity is **O(n m)** for `n` rows and `m` columns; memory linear in file size.

**Edge Cases**

* Non‑UTF8 encoding → specify `encoding='latin1'`.  
* Mixed delimiters → fallback to manual split.  
* Binary data or huge files → stream line by line instead of loading all at once.

**Optimize & Communicate**

Explain that the pipeline is modular: each step can be swapped (e.g., use `dask` for out‑of‑core). Highlight trade‑offs—strict error handling vs. speed—and emphasize logging each cleaning action so downstream ML experiments remain reproducible. This structured response showcases problem framing, systematic solution design, and depth in implementation—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
