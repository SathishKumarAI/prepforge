---
qid: ing_f1f2e878e2__faang__local
question: 'Explain: Standardizing Categories — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 586
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:07-05:00'
sources: []
---

**Clarify**  
The task is to explain how a beginner can clean a messy CSV that contains categorical columns (e.g., “Gender”, “State”) and standardize those categories using Python.  
Assumptions:  
- The file fits in memory.  
- Categorical values are strings, sometimes misspelled or mixed‑case.  
- We want deterministic mapping to a canonical set of labels.

**Approach**  
1. Read the CSV with `pandas`.  
2. Identify categorical columns (dtype `object`).  
3. For each column:  
   * Strip whitespace and lower‑case all entries.  
   * Define a mapping dict from common variants → canonical label.  
   * Replace values via `map`, using `fillna` for unmapped rows.  
4. Optionally encode categories (e.g., ordinal or one‑hot) for ML models.

**Depth**  
```python
import pandas as pd

df = pd.read_csv('data.csv')

cat_cols = df.select_dtypes(include='object').columns

variants = {
    'gender': {'m': 'Male', 'male': 'Male',
               'f': 'Female', 'female': 'Female'},
    'state':  {'ny': 'NY', 'new york': 'NY',
               'ca': 'CA', 'california': 'CA'}
}

for col in cat_cols:
    df[col] = df[col].astype(str).str.strip().str.lower()
    mapping = variants.get(col, {})
    df[col] = df[col].map(mapping)
    # If still NaN → unknown
    df[col].fillna('Unknown', inplace=True)

# One‑hot example
df_encoded = pd.get_dummies(df, columns=cat_cols)
```
Complexity: O(n × m) where *n* is rows and *m* categorical columns; memory stays linear.  
Trade‑offs: hardcoded mapping vs. fuzzy matching (e.g., `fuzzywuzzy`) – the former is fast but brittle.

**Edge Cases**  
- Empty strings → `Unknown`.  
- Completely new categories not in mapping → flagged for review.  
- Numeric values stored as strings → cast to NaN then handle separately.  

**Optimize & Communicate**  
1. Automate extraction of unique values per column and suggest mappings via frequency tables—speeds up the manual step.  
2. Log unmapped values to a file for audit.  
3. Provide unit tests: check that known variants map correctly, unknowns become `Unknown`, and no NaNs remain in categorical columns.  

This structured pipeline ensures reproducibility, clear communication of assumptions, and robust handling of messy data—key qualities the FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
