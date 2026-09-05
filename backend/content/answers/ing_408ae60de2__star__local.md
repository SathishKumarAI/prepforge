---
qid: ing_408ae60de2__star__local
question: 'Explain: Experience Rating — Cohere Software Engineer Interview Experience
  - United States, United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 391
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:29-05:00'
sources: []
---

**Situation:** At my previous company, the internal hiring portal had a low completion rate—only 35% of candidates finished the interview process. Management suspected that the experience ratings were inaccurate and not reflecting real candidate sentiment.

**Task:** I was tasked to design an automated “experience rating” model that could predict candidate satisfaction scores in real time, so we could surface problematic sections and improve retention by at least 10%.

**Action:** I gathered historical survey data (5‑point Likert scales) and interview metadata (duration, question difficulty, interviewer sentiment). Using Python’s scikit‑learn, I engineered features like average response time per question, variance in scores across interviewers, and natural language embeddings from the candidate’s feedback text via Cohere’s own embedding API. I trained a Gradient Boosting Regressor, tuned hyperparameters with Optuna, and validated it using 5‑fold cross‑validation (R² = 0.78). The model was deployed to our Flask microservice, exposing a `/predict_rating` endpoint that ran in under 50 ms per request.

**Result:** After rollout, the average completion rate rose from 35% to 47%, and survey scores improved by 1.2 points on the Likert scale. I learned how to blend structured interview metrics with NLP embeddings to create a robust, low‑latency rating system that directly impacted hiring efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
