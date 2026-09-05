---
qid: ing_a73b0ef518__eli5__local
question: Isn't it common sense that RL should turn pass@ k into pass@1?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 209
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:51-05:00'
sources: []
---

Think of a student who can answer any of ten questions on a test (that’s *pass‑@10*).  
Now imagine the same student is allowed only one try – they must pick the single best question to answer. That’s *pass‑@1*.  

Reinforcement learning (RL) is like giving that student a “coach” who, after each attempt, tells them how close they were and nudges them toward better choices. But RL can’t magically turn every 10‑question strategy into a perfect one‑question pick. It still needs to learn which question looks most promising, and it learns this gradually by trial and error.

So while RL can help improve the chance of getting *pass‑@1* right, it doesn’t guarantee it instantly; you must train the model carefully and let it explore before converging on a single best answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
