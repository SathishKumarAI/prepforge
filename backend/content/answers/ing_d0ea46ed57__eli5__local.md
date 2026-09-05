---
qid: ing_d0ea46ed57__eli5__local
question: 'Explain: The Anatomy of a Few-Shot Example — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:28-05:00'
sources: []
---

Imagine you’re learning to bake a new cake by watching just a handful of videos, not reading a full cookbook.  
*Few‑shot learning* is like that: the AI sees a small number (a “few”) labeled examples—say three recipes with ingredients and results—and then tries to guess the outcome for a new recipe it hasn’t seen before.  

*In‑context learning* takes it one step further. The AI doesn’t change its internal knowledge; instead, it treats those few example recipes as part of the conversation. It reads them first, remembers their pattern, and then immediately uses that pattern to answer a fresh question—like predicting the flavor of an unseen cake—all within the same prompt.  

So, think of a quick recipe demo (few‑shot) versus giving the AI a live cheat sheet during a cooking show (in‑context). Both let it solve new problems with only a few hints, but the second does so on the fly without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
