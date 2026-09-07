---
qid: ing_07ebda39ed__faang__local
question: 'Explain: Converting Mixed Date Formats — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 529
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:33-05:00'
sources: []
---

**Clarify**  
You have a CSV where dates appear in many forms (e‑mail timestamps, ISO strings, “MM/DD/YY”, etc.). The goal is to standardize every date into one canonical format (e.g., `YYYY-MM-DD`) so downstream ML pipelines can reliably use the feature.

*Assumptions:*  
- Dates are stored as a single column named `date`.  
- Some entries may be missing or malformed.  
- You’re comfortable using Pandas and `datetime`.

**Approach**  
1. Read CSV into a DataFrame.  
2. Use `pd.to_datetime` with `errors='coerce'` to parse all values, letting invalid ones become NaT.  
3. If you know common patterns (e.g., “MM/DD/YY”), supply `format=` or use `date_parser`.  
4. Convert the parsed column to ISO format via `.dt.strftime('%Y-%m-%d')`.  
5. Persist cleaned DataFrame.

**Depth**  
```python
import pandas as pd

df = pd.read_csv('data.csv')
# First try auto‑parse
parsed = pd.to_datetime(df['date'], errors='coerce')

# Identify remaining NaT and attempt custom formats
mask = parsed.isna()
for fmt in ['%m/%d/%y', '%d-%b-%Y']:
    parsed.loc[mask, :] = pd.to_datetime(
        df.loc[mask, 'date'],
        format=fmt,
        errors='coerce'
    )

df['clean_date'] = parsed.dt.strftime('%Y-%m-%d')
```
Complexity: O(n) time, O(1) extra space.  
Trade‑off: Auto‑parse is fast but may misinterpret ambiguous dates; custom formats add robustness.

**Edge Cases**  
- All‑numeric strings like `20230901` → use `%Y%m%d`.  
- Timezone indicators (`Z`, `+02:00`) → handled by `to_datetime`.  
- Completely garbage → remains NaT; you may drop or impute.

**Optimize & Communicate**  
Explain that using `errors='coerce'` keeps the pipeline from crashing, and that custom formats are only attempted when necessary, keeping runtime low. Highlight that once cleaned, downstream ML models can treat dates as numeric (e.g., ordinal) or categorical without ambiguity. This systematic cleanup satisfies data quality expectations in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
