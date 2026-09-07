---
qid: ing_16f23c82f6__faang__local
question: 'Explain: Cleaning Currency Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 640
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:45-05:00'
sources: []
---

**1️⃣ Clarify**  
We have a CSV of financial data where the *currency* column is garbled—mixed symbols (`$`, `USD`), commas, spaces, and sometimes missing values. The goal: produce a clean column with a standardized ISO‑4217 code (e.g., `"USD"`) for downstream ML models.

**2️⃣ Approach**  
1. Load the file with **pandas** (`read_csv`).  
2. Build a mapping table: `{ "$": "USD", "usd": "USD", "US Dollar": "USD", ... }`.  
3. Use `str.extract` or regex to pull out currency symbols/words, then replace via the map.  
4. For rows still `NaN`, attempt inference from other columns (e.g., country code).  
5. Validate that all entries match a 3‑letter pattern (`^[A-Z]{3}$`).  

**3️⃣ Depth**  
```python
import pandas as pd
df = pd.read_csv('data.csv')

mapping = {
    '$': 'USD', 'usd': 'USD',
    '€': 'EUR', 'eur': 'EUR',
    '£': 'GBP', 'gbp': 'GBP',
    # add others…
}
# Normalize case and strip whitespace
df['currency'] = df['currency'].astype(str).str.strip().str.lower()
# Extract symbol/word via regex
pattern = r'[\$€£]|[a-z]{3}'
df['clean_cur'] = df['currency'].str.extract(pattern, expand=False)
df['clean_cur'] = df['clean_cur'].map(mapping).fillna(df['clean_cur'])
# Fallback: use country column if available
if 'country_code' in df.columns:
    df.loc[df['clean_cur'].isna(), 'clean_cur'] = \
        df.loc[df['clean_cur'].isna()]['country_code']
df['clean_cur'] = df['clean_cur'].str.upper()
assert df['clean_cur'].str.match(r'^[A-Z]{3}$').all()
```
Complexity: O(n) time, O(1) extra space aside from the map.

**4️⃣ Edge Cases**  
- Mixed symbols (`$USD`): regex captures `$`.  
- Multiple currencies in one cell: take first match.  
- Completely missing values: flag for imputation or exclusion.  
- Unexpected symbols: log and skip to avoid silent errors.

**5️⃣ Optimize & Communicate**  
*Improvements*: cache compiled regex; vectorize mapping with `pd.Series.map`.  
*Narration*: “I’ll first ingest the data, then create a deterministic lookup that normalizes all known variants into ISO codes. Any remaining blanks I’ll infer from contextual columns or flag for review.”  

This structured plan satisfies FAANG interview expectations: clear problem restatement, systematic approach, technical depth with complexity analysis, edge‑case awareness, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
