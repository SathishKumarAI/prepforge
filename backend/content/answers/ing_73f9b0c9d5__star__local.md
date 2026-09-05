---
qid: ing_73f9b0c9d5__star__local
question: 'Explain: Evidence and criticism — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:20-05:00'
sources: []
---

**Situation:**  
At my previous company we built an adaptive e‑learning platform for medical students. The product was gaining traction, but user engagement dropped after the first week—students logged in only 20 % of days and quiz scores plateaued around 65 %.  

**Task:**  
I was tasked with increasing long‑term retention and daily active usage by at least 30 % while keeping server load manageable.  

**Action:**  
I introduced a spaced repetition algorithm inspired by research from Wikipedia’s “Evidence and criticism” section: the forgetting curve, optimal spacing intervals, and decay functions. I implemented an exponential decay model (Ebbinghaus) with a dynamic interval calculator that adjusted based on each student’s recall confidence and quiz performance. To counter criticisms about over‑simplification, I added contextual cues and spaced practice of related topics to mitigate interference effects. On the backend I used Redis for real‑time scheduling and Python‑scikit‑learn to personalize decay rates.  

**Result:**  
Within three months, daily active usage rose to 48 % (a 140 % increase) and average quiz scores improved to 78 %. A/B testing confirmed that the spaced repetition feature outperformed a static review schedule by 22 % in retention after one month. I learned that blending empirical evidence with iterative user feedback is key when applying psychological models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
