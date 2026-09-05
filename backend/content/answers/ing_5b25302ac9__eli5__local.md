---
qid: ing_5b25302ac9__eli5__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 346
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:42-05:00'
sources: []
---

**Data leakage** happens when a model learns from information that it shouldn’t have during training—like a student sneaking a peek at the answer key before an exam. Imagine you’re baking cookies and you accidentally let the recipe’s secret ingredient (the “answer”) mix into the dough for all batches; every cookie will taste the same, not because of skill but because of that hidden clue.

**Three subtle leaks**

1. **Timestamp bleed** – A model trained on sales data uses dates to predict next‑month demand. If a date column is included in both training and test sets, the model learns “next month” simply from the time stamp, not from real patterns.  
   *Detection:* Split the data by time first; ensure no overlapping years or months.

2. **Feature duplication** – A dataset contains a customer’s “total spend” and also “average order value” (which is spend divided by number of orders). The model can infer the number of orders directly, giving it extra power.  
   *Detection:* Check correlations; run a quick regression to see if one feature explains another.

3. **Target‑derived columns** – A health study creates a variable “risk score” that was calculated using the very outcome (e.g., heart attack) plus other risk factors. Using this score in training lets the model cheat.  
   *Detection:* Review data‑processing scripts; ensure no column references the target label during feature creation.

By spotting these hidden clues, you keep your AI honest and its predictions trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
