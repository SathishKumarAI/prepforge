---
qid: ing_5a958a9af8__faang__local
question: 'Explain: Removing Duplicate Rows — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 386
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:11-05:00'
sources: []
---

**Clarify**  
You have a CSV where some rows are exact duplicates (same values in all columns). The goal is to read the file, drop those duplicates, and write a clean version back out. Assume the file fits into memory and that “duplicate” means bit‑wise equality across every column.

**Approach**  
1. Load with `pandas.read_csv`.  
2. Use `DataFrame.drop_duplicates()` which keeps the first occurrence by default.  
3. Write the result with `to_csv`, optionally resetting the index.

**Depth**  
```python
import pandas as pd

def dedupe_csv(src, dst):
    df = pd.read_csv(src)            # O(n) load
    clean = df.drop_duplicates()     # O(n) hash‑based dedup
    clean.to_csv(dst, index=False)   # write back
```
Complexity:  
- Time ≈ O(n) for reading + O(n) for hashing rows.  
- Space ≈ O(n) to hold the dataframe.  

Trade‑offs: If memory is tight, process in chunks and keep a hash set of seen rows; this increases I/O but reduces peak RAM.

**Edge Cases**  
- Empty file → returns empty CSV.  
- All rows duplicate → single row remains.  
- Different dtypes or whitespace differences may hide duplicates—consider `df.applymap(str.strip)` before dedupe.

**Optimize & Communicate**  
For very large files, switch to a streaming solution (`csv` module + set of tuples). Explain that pandas is optimal for typical datasets, but the chunked approach scales linearly with file size and keeps memory usage bounded. This demonstrates clear reasoning, complexity awareness, and practical trade‑offs—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
