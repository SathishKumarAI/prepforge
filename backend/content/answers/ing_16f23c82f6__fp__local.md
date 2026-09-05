---
qid: ing_16f23c82f6__fp__local
question: 'Explain: Cleaning Currency Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 501
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:23-05:00'
sources: []
---

**Why we need to clean currency columns**

A CSV that comes from a spreadsheet or a web‑scraper is often *semi‑structured*: the same column may contain `$1,234.56`, `EUR 2 345,67`, `1234.56 USD` or even `N/A`.  
For any downstream model (regression, clustering, etc.) we need **numerical, homogeneous values**; otherwise the algorithm will treat each string as a separate category or throw an error.  

**Fundamental solution**

1. **Standardise the locale** – replace commas used as thousand separators with nothing and decimal commas with a dot (`re.sub(r'[,\s]', '', s)` → `re.sub(',', '.', s)`).  
2. **Strip currency symbols** – keep only digits, dots, and an optional leading minus sign (`re.sub(r'[^0-9.\-]', '', s)`).  
3. **Handle missing data** – map empty strings or “N/A” to `np.nan`.  
4. **Convert to float** – `pd.to_numeric(..., errors='coerce')`.

This pipeline is a *data‑cleaning* version of the classic **information bottleneck**: we discard irrelevant symbols (currency codes) while preserving the numeric signal that matters for learning.

**Non‑obvious insight**

Many novices drop rows where a currency value cannot be parsed. That removes the *outlier* information and biases the model toward the bulk distribution. Instead, keep those entries as `np.nan` and let an imputer (e.g., median or k‑NN) learn how to fill them based on other features—this preserves the variability in the data set and often improves predictive performance.

```python
import pandas as pd
import re

def clean_currency(series):
    s = series.astype(str).str.strip()
    s = s.replace({'N/A': None, '': None})
    s = s.str.replace(r'[^0-9.\-]', '', regex=True)
    s = s.str.replace(',', '.', regex=False)  # in case decimal comma survived
    return pd.to_numeric(s, errors='coerce')
```

Apply `clean_currency` to the column, then feed the numeric Series into your ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
