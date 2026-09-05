---
qid: ing_c3dc308ba4__eli5__local
question: 'Explain: Covering regions — Google\u2019s S2, geometry on the sphere, cells
  and Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 235
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:24-05:00'
sources: []
---

Imagine a planet made of dough that you want to divide into bite‑sized pieces so every part can be catalogued without overlap. Google’s **S2** does exactly that for the Earth: it first cuts the globe into six large “faces” (like slicing a cube around the sphere), then each face is split recursively into smaller squares called **cells**. Think of these cells as tiny pizza slices that together cover the whole pie.

To keep track of where each slice lives, S2 orders them along a space‑filling path called a **Hilbert curve**—a snake that visits every cell exactly once while staying close to its neighbors. It’s like walking through a library by following a spiral that never jumps between distant shelves; you can quickly find any book (cell) just by knowing its position on the spiral. This clever geometry lets mapping services locate places, compute distances, and render maps efficiently, all while treating the curved surface of Earth as a neatly indexed grid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
