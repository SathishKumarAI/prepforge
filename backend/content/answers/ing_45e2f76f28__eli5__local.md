---
qid: ing_45e2f76f28__eli5__local
question: 'Explain: Self-Attention Process — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 267
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:27:08-05:00'
sources: []
---

Imagine you’re writing a short story and each word is a note in a choir. **Self‑attention** is the choir director who lets every singer hear all the others and decide how much they should echo or mute each voice before the next sentence starts.

In GPT‑2, every word (token) first turns into a tiny vector—just a list of numbers that describes its meaning. For each pair of words, the model asks three questions:  
*What do I want to know about this other word?* (Query)  
*How much does that other word carry the information I need?* (Key)  
*What raw information does that other word hold?* (Value)

It multiplies Query and Key, scales it, then passes it through a soft‑max so the results become **attention weights**—percentages that add to 1. These weights tell how much each word should influence the current one. Finally, it sums the weighted Values to produce an updated representation of the original word.

So self‑attention is like the choir director letting every singer adjust their volume based on what everyone else says, creating a richer, context‑aware harmony before moving to the next part of the story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
