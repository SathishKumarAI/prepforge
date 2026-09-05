---
qid: ing_ccaeb4915a__eli5__local
question: 'Explain: The way to the cells — Google\u2019s S2, geometry on the sphere,
  cells and Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 186
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:30-05:00'
sources: []
---

Imagine you’re trying to give a map of Earth to a robot that can only read straight lines on paper. Google’s S2 does this by wrapping the globe in a set of nested “cells” like a honeycomb, each cell being a tiny patch of surface. Think of the cells as LEGO bricks that fit together perfectly; every point on Earth sits inside one brick. To turn the 3‑D shape of the sphere into a simple list, S2 orders these bricks along a space‑filling path called a Hilbert curve—like tracing a single continuous snake that never lifts its pen. The robot follows this snake to visit every LEGO brick in a smooth, predictable order, making it easy to locate any spot on Earth with minimal backtracking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
