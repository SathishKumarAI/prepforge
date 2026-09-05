---
qid: ing_e82ba20a92__star__local
question: You're using pass@ k instead of majority vote—doesn't that make the results
  invalid?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 268
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:43-05:00'
sources: []
---

**Situation:** In a recent fraud‑detection project for an online marketplace, our model had to rank the top five suspicious transactions per user so we could alert analysts quickly. The initial approach used majority vote across ensemble models, but it produced many ties and inconsistent rankings.

**Task:** I needed to redesign the ranking mechanism to reduce ambiguity while keeping interpretability high, ensuring that each transaction’s confidence score was meaningful for downstream triage.

**Action:** I switched from a hard majority vote to a pass‑@k strategy: each model output a probability distribution over classes; we then summed probabilities across models and selected the top k transactions with the highest aggregated scores. To keep the process efficient, I implemented vectorized scoring in NumPy and cached intermediate sums. I also added a calibration step using Platt scaling on a hold‑out set to align the ensemble’s probability estimates with observed fraud rates.

**Result:** The new pass‑@k method cut false positives by 27 % (from 18 % to 13 %) while improving analyst throughput by 15 %. I learned that probabilistic aggregation can be more robust than majority voting, especially when models disagree on low‑confidence cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
