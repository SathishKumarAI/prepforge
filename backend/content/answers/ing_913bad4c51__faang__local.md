---
qid: ing_913bad4c51__faang__local
question: 'Explain: Cleaning Text Columns — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 501
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:06-05:00'
sources: []
---

**Clarify**  
You’re asked how a data scientist would clean a CSV whose text columns contain typos, mixed‑case, stray punctuation, and inconsistent whitespace. Confirm: *Which columns are textual?* *What format should the cleaned output follow?* *Are there any domain‑specific rules (e.g., preserving “U.S.”)?*

**Approach**  
1. Load with `pandas.read_csv`.  
2. Identify problematic columns via a quick preview (`df.describe(include='object')`).  
3. Create a reusable cleaning pipeline: lowercasing, stripping whitespace, removing non‑ASCII, normalizing punctuation, and optionally spell‑checking or stop‑word removal.  
4. Apply the function column‑wise with `apply`.  
5. Validate by sampling rows before/after and checking for NaNs.

**Depth**  
```python
import pandas as pd
import re
from unidecode import unidecode

def clean_text(s):
    if pd.isna(s): return s
    s = str(s).lower()
    s = unidecode(s)                       # drop diacritics
    s = re.sub(r'\s+', ' ', s.strip())     # collapse whitespace
    s = re.sub(r'[^\w\s]', '', s)          # remove punctuation
    return s

df = pd.read_csv('data.csv')
text_cols = df.select_dtypes(include='object').columns
df[text_cols] = df[text_cols].applymap(clean_text)
df.to_csv('cleaned_data.csv', index=False)
```
Complexity: O(n * m) where n is rows, m text columns. Memory: single‑pass in pandas.

**Edge Cases**  
- Empty strings → become NaN if `dropna` used.  
- Numeric strings (e.g., “123”) get lowercased but unchanged; may need conversion.  
- Domain terms with punctuation (“U.S.”) are lost unless excluded via a whitelist regex.

**Optimize & Communicate**  
For large files, use `chunksize` to stream or Dask for parallelism. Explain trade‑offs: full pipeline vs. selective cleaning based on column importance. Conclude by showing a before/after diff and stressing that the function is modular so new rules can be added without rewriting the entire script.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
