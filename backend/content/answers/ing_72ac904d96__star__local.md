---
qid: ing_72ac904d96__star__local
question: 'Explain: History — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 325
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:47-05:00'
sources: []
---

**Situation:**  
While working on a language‑learning app, I noticed our retention rates dropped after the first week: only 45 % of users recalled new vocab by day 7. The team was debating whether to add more flashcards or change the review schedule.

**Task:**  
I needed to design a spaced‑repetition algorithm that would boost long‑term recall without overwhelming users, and prove its effectiveness with data.

**Action:**  
I dove into the literature—starting with the 1974 paper by Hermann Ebbinghaus on forgetting curves, then traced how the concept evolved into the Leitner system of boxes (mid‑20th century) and later the SM2 algorithm used in Anki. I mapped those ideas onto our stack: using a binary tree to schedule intervals that grow exponentially (1 h → 4 h → 24 h → 7 d), backed by SQLite for persistence. I added a Bayesian update on user performance to adjust the interval multiplier, and logged every review event.

**Result:**  
After a two‑month A/B test, users in the new cohort had a 68 % recall rate at day 30—up from 45 %. Engagement rose 22 %, and churn dropped by 15 %. I learned that grounding a feature in proven cognitive science not only delivers measurable gains but also gives the team confidence to iterate on the algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
