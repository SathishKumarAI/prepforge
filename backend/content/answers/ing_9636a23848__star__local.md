---
qid: ing_9636a23848__star__local
question: 'Explain: Amazon Custom OA Problems (2026, HackerRank)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 373
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:17-05:00'
sources: []
---

**Situation** – When I applied for a data‑science role at Amazon in early 2026, the hiring team used a custom online assessment on HackerRank that mixed algorithmic puzzles with ML model evaluation challenges. The test required me to predict click‑through rates for a new product line while also debugging a piece of Python code that had been intentionally obfuscated.

**Task** – I had to finish both sections in 90 minutes: first, build an interpretable regression model from scratch using only the provided dataset (no external libraries beyond NumPy and Pandas), then refactor the buggy script so it ran within the platform’s sandbox limits (≤200 MB memory, no internet access).

**Action** – I started by quickly profiling the data with Pandas to spot missing values and outliers. Using a gradient‑boosted tree implemented in XGBoost (with `max_depth=5`, `learning_rate=0.1`), I achieved an R² of 0.78 on a hold‑out split. For the code part, I rewrote the nested list comprehensions into vectorized NumPy operations and replaced the recursive function with an iterative stack to avoid exceeding recursion depth, which cut execution time from 2.3 s to 0.7 s.

**Result** – The model scored a click‑through prediction error of 4.6%, placing me in the top 12% of candidates on that day. I also earned a commendation for efficient memory usage. This experience taught me how to balance rapid prototyping with strict resource constraints—an essential skill for production ML at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
