---
qid: ing_93dad8f7cc__star__local
question: 'Explain: Converting Age to a Number — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 309
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:35-05:00'
sources: []
---

**Situation:**  
In my junior data‑science role at a health‑tech startup, I was handed a raw patient dataset from an external vendor. The “age” column had mixed formats—strings like “45y”, missing values marked as “unknown”, and some rows with negative ages due to erroneous entries.

**Task:**  
I needed to produce a clean, numeric age field for downstream modeling within two days so the analytics team could run cohort analyses without manual corrections.

**Action:**  
Using Python’s `pandas`, I read the CSV with `dtype=str` to preserve all quirks. I wrote a vectorized function that:
1. Removed non‑numeric characters via regex (`re.sub(r'\D', '', x)`).
2. Converted empty strings or “unknown” to `NaN`.
3. Replaced negative numbers with `NaN` and later imputed them using the median age per gender.
I applied this across the column, logged counts of each transformation step, and exported a cleaned CSV. I also added unit tests in `pytest` to catch future format changes.

**Result:**  
The dataset now had 98% valid numeric ages with an average imputation error below 1 year. The analytics team ran cohort reports in minutes instead of days, and I documented the pipeline for reproducibility—saving the startup roughly 20 hours of manual cleanup per month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
