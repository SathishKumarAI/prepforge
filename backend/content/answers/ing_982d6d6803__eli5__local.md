---
qid: ing_982d6d6803__eli5__local
question: 'Explain: It''s like, oh, let''s add another 10 — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 219
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:53-05:00'
sources: []
---

Imagine you’re cooking a big pot of soup for a crowd. Each spoonful you stir (a *batch*) mixes the flavors, but if you only stir once every minute, the soup will stay uneven—some parts are too salty, others bland. In machine learning we “stir” by feeding the computer data in small groups called **mini‑batches** so it can learn steadily.

Now suppose you have 10 extra spoons (think of them as additional GPUs or servers). You can stir ten times faster: each spoon tackles a different batch at the same time. The soup reaches a consistent taste much quicker, and you can keep adding more spoons if the crowd grows. That’s scaling training—adding more parallel “stirrers” so the model learns faster without waiting for one slow processor to finish. Just like the kitchen, the goal is to mix all ingredients evenly while handling a larger load efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
