---
qid: ing_a40b44b5b7__eli5__local
question: 'Explain: METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 269
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:22-05:00'
sources: []
---

**What is a “metric” in machine learning?**  
Think of a metric as the *scorecard* you give to a student after a test. Just like a teacher uses marks to judge how well the student did, an ML model gets a numeric score that tells us how good or bad it is at its job.

A **metric** is simply a single number calculated from the model’s predictions and the true answers. Common examples are accuracy (how many were right), precision (how many “yes” guesses were actually yes), recall (how many real yeses we caught), and mean‑squared error (average squared difference between predicted and true values).

You choose a metric that matches your goal—e.g., in medical diagnosis you might prioritize recall so you catch as many patients as possible, even if some false alarms occur. The metric turns complex performance into an easy‑to‑understand number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
