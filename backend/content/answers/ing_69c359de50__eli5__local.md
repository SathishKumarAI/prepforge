---
qid: ing_69c359de50__eli5__local
question: 'Explain: 1.1.1. Ordinary Least Squares — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 245
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:25-05:00'
sources: []
---

Think of ordinary least squares (OLS) like fitting a straight ruler through a scatter of points on a graph.  
**What it does:** OLS finds the line that makes the total “error” between the line’s predictions and the actual data as small as possible. The error for each point is just how far up or down the point sits from the line, squared so that both above‑and‑below mistakes count positively.

In scikit‑learn, a **linear model** (e.g., `LinearRegression`) implements this ruler. You give it input features (the x‑axis values) and target labels (the y‑axis values). It learns two numbers: the slope (how steep the line is) and an intercept (where it crosses the y‑axis). Once trained, you can feed new inputs and the model will predict a y‑value by sliding along that learned line.

So OLS in scikit‑learn is simply “draw the best straight ruler through your data points so future predictions are as close as possible to reality.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
