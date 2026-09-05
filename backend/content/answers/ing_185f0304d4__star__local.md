---
qid: ing_185f0304d4__star__local
question: 'Explain: Success Rate — Cohere Software Engineer Interview Experience -
  United States, United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 321
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:27-05:00'
sources: []
---

**Situation** – While working as an ML engineer at Cohere, the hiring team wanted to reduce bias and improve efficiency in the software‑engineering interview pipeline. The existing process was manual: recruiters scored candidates on a 1–10 rubric, but inter‑rater variance was high and it took weeks to finalize offers.

**Task** – Build a predictive model that estimates each candidate’s likelihood of success (i.e., landing an offer) from their pre‑interview data—resume features, coding challenge scores, and interview video embeddings—and present actionable insights to recruiters.

**Action** – I gathered a 12‑month dataset of 4,500 candidates, cleaned missing values, and engineered features such as skill‑gap vectors and sentiment scores from interview transcripts. Using a LightGBM classifier with cross‑validation, I tuned hyperparameters via Optuna. I then integrated the model into Cohere’s internal dashboard (Python Flask + React) so recruiters could see a “Success Probability” score and top contributing factors in real time.

**Result** – The model achieved an 82 % AUC on hold‑out data, cutting interview turnaround by 35 %. Recruiters reported that the probabilistic insights reduced subjectivity, leading to a 12 % increase in offer acceptance rates. I learned how to translate raw ML outputs into practical tools that directly impact hiring outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
