---
qid: vq_a6a020d2fd__eli5__local
question: In statistics, how are missing data treated?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 240
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:04-05:00'
sources: []
---

Imagine you’re baking a cake and someone forgets to add one cup of sugar. You have two choices:  
**1. Leave it out (delete the missing data).** The cake still turns out, but it’s lighter—your final recipe is based only on the ingredients that were actually added. In statistics this is called *listwise deletion* or *complete‑case analysis*. It’s simple but can bias results if the missingness isn’t random.  
**2. Guess what was there (impute).** You might estimate that cup of sugar by looking at how much sugar other cakes in your batch used, maybe taking an average. That’s *data imputation*: replacing a blank with a plausible value so every cake gets the same number of ingredients.

The “missing data” are just blanks in your dataset; “imputation” is filling them in, and “listwise deletion” is dropping any row that has a blank. Both methods aim to keep the analysis fair, but imputation usually preserves more information when done carefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
