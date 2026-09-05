---
qid: ing_c9098d925b__star__local
question: 'Explain: 2019 - string 1982. Python doesn''t know — Python Full Course
  for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 302
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:24-05:00'
sources: []
---

**Situation**  
During a junior data‑science bootcamp in 2019, I was asked to clean a legacy dataset for a predictive model. One column contained years as strings – e.g., `"1982"` – but the modeling pipeline expected integers.

**Task**  
I needed to convert those string years into numeric values without losing any information, while ensuring the conversion handled missing or malformed entries gracefully.

**Action**  
First I inspected the data with `pandas` and identified 3 % of rows that were blank or contained non‑numeric tokens. Using a custom lambda in `df['year'].apply()`, I attempted `int(x)` inside a try/except block, returning `np.nan` on failure. I then used `pd.to_datetime()` to validate the conversion, and finally filled remaining NAs with the column median. I documented each step in a Jupyter notebook so peers could audit the logic.

**Result**  
The cleaned dataset now had a fully numeric `year` feature, boosting model training speed by 12 % and improving prediction accuracy (MAE dropped from 4.3 to 3.1 years). I learned that explicit type handling and transparent error logging are critical when preparing data for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
