---
qid: ing_c0f8ecfb7d__star__local
question: 'Explain: Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 341
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:11-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a language‑learning app that needed to keep users engaged over months. The retention metric had fallen from 65% to 48% after the first week, and our analytics team pointed out that learners were forgetting new words too quickly.

**Task:**  
I was tasked with designing an algorithm that would schedule review sessions for vocabulary items so that each word stayed in long‑term memory while minimizing the number of reviews per day.

**Action:**  
I implemented a spaced repetition system based on the SM2 algorithm. Using Python and PostgreSQL, I stored each item’s *EF* (Easiness Factor) and last‑review timestamp. After every user response I calculated a new EF with the formula:  
`EF' = EF + 0.1 – (5–grade)*(0.08+grade*0.02)`  
and scheduled the next review by multiplying the previous interval by the updated EF. I added a “forget‑rate” threshold to bump items that were consistently answered incorrectly, and used Redis for caching active review queues so users saw fresh content in real time.

**Result:**  
Within three months, our first‑week retention rose from 48% to 72%, and overall daily engagement increased by 35%. The system also reduced the average number of reviews per user by 18%, freeing up server resources. I learned that combining a proven psychological model with careful data engineering can deliver measurable business impact while keeping users motivated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
