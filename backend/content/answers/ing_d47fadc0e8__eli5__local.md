---
qid: ing_d47fadc0e8__eli5__local
question: Why Scale by Square Root of d_k? — Attention Mechanisms
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 233
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:37-05:00'
sources: []
---

In a transformer’s “attention” you first turn each word into a pair of vectors: **query** and **key**.  
Imagine each key is a tiny magnet that attracts the query if they point in the same direction. The raw dot‑product of two 512‑dimensional magnets can grow very large – roughly proportional to the number of dimensions (about 512). When those numbers get big, the softmax step that turns them into probabilities becomes “flat”: every word looks almost equally likely, so learning is slow.

To keep the magnet strengths at a friendly size, we divide by the square root of the key’s dimension, √512 ≈ 22.6.  
Think of it as putting each magnet in a small cup that limits how much it can pull; the cup’s size depends on how many magnets you have. This keeps the attention scores balanced, lets gradients flow well, and makes training stable—just like keeping your coffee pot from boiling over when you add more beans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
