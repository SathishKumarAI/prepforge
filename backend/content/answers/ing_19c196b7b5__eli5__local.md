---
qid: ing_19c196b7b5__eli5__local
question: 'Explain: Quantization for Training and Serving — Optimizing AI Inference
  at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 223
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:17:02-05:00'
sources: []
---

Imagine your AI model is a giant library of books (the neural network). Every book page is written in a very detailed, high‑resolution font that uses a lot of ink—this is like the full 32‑bit numbers used during training. When you want to read a book quickly on a small e‑reader (inference), you can switch to a lighter, crisper font that still looks fine but saves space and speeds up page turns; this is “quantization.”  

In practice, quantization first **compresses** the model’s weights from 32‑bit floats to fewer bits (e.g., 8‑bit integers). During training, you keep the heavy version for learning but also train a “compressed copy” so it learns to work well with the lighter numbers. When serving, the AI uses only this compressed copy—like reading the light font on the e‑reader—so inference runs faster and uses less memory without noticeably hurting accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
