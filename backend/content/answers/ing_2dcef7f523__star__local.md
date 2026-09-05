---
qid: ing_2dcef7f523__star__local
question: Isn't pass@ k meaningless since you could eventually guess the right answer
  through randomly sampling k times?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:06-05:00'
sources: []
---

**Situation:** In my senior capstone, we were building a recommendation engine for an online marketplace that needed to hit a 30 % lift in click‑through rate within three months.

**Task:** I had to evaluate different ranking models quickly so the team could iterate on feature engineering without waiting for full production runs. The metric we chose was pass@k, but several teammates argued it was meaningless because you could always “guess” the right answer by sampling k times.

**Action:** I explained that pass@k measures whether the correct item appears in the top‑k predictions **without replacement**—it’s a proxy for ranking quality. To make it actionable, I compared three models (matrix factorization, XGBoost, and a neural net) on a held‑out test set, reporting pass@1, @3, and @5. I then plotted precision–recall curves to show the trade‑off between k and recall. Finally, I ran an A/B test in production with k=10; the neural net’s pass@5 improved from 0.42 to 0.57, directly translating into a 12 % lift in CTR.

**Result:** The team adopted pass@k as a rapid, interpretable KPI that guided feature selection and helped us deliver the target lift ahead of schedule. I learned that while random sampling can hit k items, pass@k captures *ranking* quality—critical for user experience—and is far more informative than naïve accuracy metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
