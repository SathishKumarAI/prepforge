---
qid: ing_93dad8f7cc__faang__local
question: 'Explain: Converting Age to a Number — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 531
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:57-05:00'
sources: []
---

**Clarify**  
We’re given a CSV where the “Age” column contains mixed types: integers, strings like `"25 years"`, blanks, and even non‑numeric tokens (`"unknown"`). The goal is to produce a clean numeric `age` field for downstream ML models.

**Approach**  
1. Load with `pandas.read_csv`.  
2. Inspect the column (unique values, dtypes).  
3. Define a vectorized parser that:  
   * strips whitespace, lower‑cases, removes trailing words (“years”).  
   * replaces known non‑numeric tokens (`""`, `"unknown"`) with `NaN`.  
   * casts to float/int.  
4. Apply the parser via `Series.apply` or `np.vectorize`.  
5. Validate: check `isna()` distribution and simple stats.

**Depth**  
```python
import pandas as pd, numpy as np

def clean_age(val):
    if pd.isna(val): return np.nan
    s = str(val).strip().lower()
    # strip known suffixes
    for suf in [" years", " year"]:
        if s.endswith(suf): s = s[:-len(suf)]
    try:
        return float(s)
    except ValueError:   # e.g., 'unknown', ''
        return np.nan

df['age_clean'] = df['Age'].apply(clean_age)
```
Complexity is **O(n)** over rows; memory overhead minimal. Using `vectorize` keeps it fast but still Python‑level.

**Edge Cases**  
* Mixed delimiters (“30yrs”, “ 45 ”).  
* Negative or zero ages (data errors).  
* Extremely large numbers (possible overflow).  
Test by injecting such values and asserting the output is `NaN` or within realistic bounds.

**Optimize & Communicate**  
- Pre‑compile regex to strip suffixes for speed.  
- Cache results of repeated string patterns with a dictionary lookup.  
- Log counts of cleaned vs. dropped rows so stakeholders see data quality impact.  
When presenting, walk through the parsing logic step‑by‑step, show sample before/after, and discuss trade‑offs between strictness (dropping ambiguous entries) versus retention (imputing). This demonstrates clear problem framing, systematic solution design, technical depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
