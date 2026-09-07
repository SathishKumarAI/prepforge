---
qid: ing_c15ce3b28e__faang__local
question: 'Explain: Saving the Clean CSV — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 727
total_tokens: 974
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:46-05:00'
sources: []
---

**Clarify**  
You want a robust routine that takes an arbitrary “messy” CSV (missing headers, stray whitespace, bad delimiters, non‑UTF8 chars) and outputs a clean, UTF‑8, headered file ready for downstream ML pipelines. Assume the data fits in memory and we’re using Python 3.x with `pandas`.

**Approach**  
1. Detect/standardize delimiter (`csv.Sniffer`).  
2. Read into `pandas.read_csv` with `engine='python'`, handling errors (`error_bad_lines=False`).  
3. Strip whitespace from headers and cells; replace non‑ASCII with a placeholder or remove.  
4. Infer column dtypes, cast where possible (e.g., numeric columns).  
5. Drop rows/columns that are all NaN or have >X% missing.  
6. Persist as UTF‑8 CSV (`to_csv`).

**Depth**  
```python
import csv, pandas as pd

def clean_csv(path_in, path_out, na_thresh=0.2):
    # 1. Guess delimiter & skip initial junk lines
    with open(path_in, 'rb') as f:
        sample = f.read(1024)
    delim = csv.Sniffer().sniff(sample.decode(errors='ignore')).delimiter

    df = pd.read_csv(
        path_in,
        delimiter=delim,
        engine='python',
        skip_blank_lines=True,
        dtype=str  # read all as str first
    )

    # 2. Strip whitespace & non‑ASCII
    df = df.applymap(lambda x: ''.join(c for c in str(x).strip() if ord(c) < 128))

    # 3. Header cleanup
    df.columns = [c.strip().lower().replace(' ', '_') for c in df.columns]

    # 4. Convert numeric columns
    for col in df.columns:
        try:
            df[col] = pd.to_numeric(df[col])
        except ValueError:
            pass

    # 5. Drop empty rows/cols
    df.dropna(axis=0, how='all', inplace=True)
    df.dropna(axis=1, how='all', inplace=True)

    # 6. Threshold missingness
    thresh = int(len(df) * na_thresh)
    df.dropna(thresh=thresh, axis=1, inplace=True)

    df.to_csv(path_out, index=False, encoding='utf-8')
```
Complexity: O(n m) time, O(m) extra memory for dtype conversion.

**Edge Cases**  
* Commas inside quoted fields → `Sniffer` handles.  
* Mixed delimiters (tab+comma) → fallback to `python` engine or manual split.  
* Extremely large files → switch to chunked reading (`chunksize`).  
* Binary blobs → drop columns where all values fail numeric cast.

**Optimize & Communicate**  
- Use `dtype=str` initially to avoid partial parsing errors, then convert in bulk.  
- Parallelize conversion with `dask` for >10 GB files.  
- Log every step (original vs cleaned row counts) so downstream ML teams can audit data hygiene.  

This pattern balances safety (catching rogue rows), speed (vectorized ops), and transparency—exactly what FAANG interviewers look for in a clean‑data pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
