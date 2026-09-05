---
qid: ing_1fedbf6846__eli5__local
question: 'Explain: Hilbert Curve — Google\u2019s S2, geometry on the sphere, cells
  and Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 231
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:44-05:00'
sources: []
---

Imagine you’re trying to find a quick way to walk around a globe while staying in one continuous line—like tracing a never‑ending “snake” that touches every spot on the Earth without lifting your pen. A **Hilbert curve** is that snake, but instead of a flat paper it lives on the sphere. Google’s S2 library builds this by first cutting the sphere into 12 big triangles (the “cells”), then repeatedly splitting each triangle into four smaller ones. As you zoom in, the order in which you visit these tiny cells follows a Hilbert pattern: it keeps neighboring cells close together, so nearby places on Earth stay near each other in the list.

This ordering lets computers quickly look up everything that’s geographically close—useful for mapping apps and location‑based searches. The “geometry on the sphere” just means all those triangles sit snugly on the curved surface instead of flat squares. In short, S2 turns the 3‑D globe into a tidy, one‑dimensional snake that keeps distance relationships intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
