---
qid: ing_0bc3831073__star__local
question: 'Explain: Algorithms — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:08-05:00'
sources: []
---

**Situation:**  
At my previous company we built a language‑learning app that had over 150 k users, but engagement dropped after the first week—users were forgetting new vocabulary quickly.

**Task:**  
I was tasked with designing an algorithm to keep learners reviewing words just before they slipped from memory, thereby boosting long‑term retention and daily active usage.

**Action:**  
I implemented a spaced‑repetition scheduler inspired by the classic SM‑2 algorithm. Using Python’s Pandas for data handling, I stored each word’s *ease factor*, *interval*, and *review count* in a lightweight SQLite DB. For every review session, the system calculated the next interval as:
```
next_interval = current_interval * ease_factor
```
When users answered correctly, the ease factor was nudged up (e.g., +0.1); incorrect answers reset the interval to 1 day and decreased the ease factor. I integrated this logic into our Flask backend, exposing an API that the React front‑end called after each quiz round. To keep latency low, I pre‑computed next review dates in a Celery task queue.

**Result:**  
Within three months, daily active users rose by 27 %, and the average time between reviews matched the optimal decay curve predicted by research (≈70 % recall at day 7). The team adopted this model across all courses, and we saw a 15 % lift in subscription renewals. I learned that marrying cognitive science with clean data pipelines can produce measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
