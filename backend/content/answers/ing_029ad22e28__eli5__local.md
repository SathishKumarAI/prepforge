---
qid: ing_029ad22e28__eli5__local
question: 'Explain: Top-P (Nucleus) Sampling — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 191
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:39:14-05:00'
sources: []
---

Imagine you’re at a buffet and want to choose your next bite of food. **Top‑P (nucleus) sampling** is like setting a “taste budget” for the dish you pick: you look at all the possible foods (words) that could come next, sort them by how tasty they are (their probability), and then keep adding them until their combined tastiness reaches a chosen threshold \(p\). Once you’ve reached that threshold, you ignore the rest of the menu—those dishes that would only add a little extra flavor—and randomly pick one from the remaining “nucleus” of foods. In AI language generation, this means the model considers only the most likely words whose total probability mass is about \(p\), then chooses one at random, giving text that feels natural without being overly predictable or wildly off‑track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
