---
qid: ing_93dad8f7cc__fp__local
question: 'Explain: Converting Age to a Number — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 505
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:37-05:00'
sources: []
---

**Why “age” must become a numeric column**

When we model human‑related phenomena (e.g., churn prediction or health risk), the learning algorithm interprets **numerical features as ordered quantities**. If age is stored as a string—`“25 yrs.”`, `NaN`, or `"unknown"`—the algorithm treats each distinct token as a *categorical* value, discarding its ordinal meaning and inflating dimensionality.

---

### 1. Formalizing the problem  

Let \(X_{\text{raw}}\) be the raw age column.  
We need a mapping \(\phi : X_{\text{raw}} \rightarrow \mathbb{R}\) such that:

* \(\phi\) is **bijective** on valid ages (preserves uniqueness).  
* \(\phi\) is **continuous** over integer ages to respect ordering.  
* Missing or malformed entries are handled consistently.

This mapping is essentially a *data‑cleaning function* derived from the principle of **information preservation**: we keep as much ordinal information as possible while removing noise.

---

### 2. Derivation in Python  

```python
import pandas as pd
import re

def clean_age(series):
    # 1) Normalise whitespace & remove non‑digits
    s = series.str.replace(r'\s+', ' ', regex=True).str.strip()
    # 2) Extract digits; if none → NaN
    num = s.str.extract(r'(\d+)').astype(float)
    return num
```

*The regular expression `(\d+)` captures the first contiguous block of digits, ensuring that entries like `"  32 yrs."` or `"Age:45"` collapse to a single number.*  
Missing ages become `NaN`, which can be imputed later.

---

### 3. Non‑obvious insight  

**The choice of regex matters more than the cleaning step itself.**  
A naive pattern `\d+` silently drops leading zeros or misinterprets `"0"` as missing if you convert to `int`. Using `astype(float)` preserves zero and allows downstream imputation without accidental type coercion.  

Thus, a small change in the extraction regex can prevent subtle data loss that propagates into biased model predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
