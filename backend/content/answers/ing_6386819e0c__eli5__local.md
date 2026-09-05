---
qid: ing_6386819e0c__eli5__local
question: 'Q23: What is speculative decoding and when would you use it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 206
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:48-05:00'
sources: []
---

**Speculative decoding** is like a chef tasting soup while cooking, guessing the final flavor before finishing the dish.  
When an AI writes text, it predicts one word at a time. In speculative decoding, the model **tries out several possible next words in parallel**, each leading to its own short “branch” of sentences. It then checks which branch looks most promising (by how likely the whole sentence feels) and keeps that one, discarding the rest.  

You use it when you want a *faster* answer on a fast machine: the model can work on many guesses simultaneously, choosing the best without waiting for each word to finish sequentially. It’s especially handy in real‑time chat or gaming, where speed matters more than perfect precision. The trade‑off is that if the parallel branches miss the right path, you might lose a subtle nuance, but overall it keeps the conversation moving quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
