---
qid: ing_a097150d83__eli5__local
question: When is Data High Dimensional and Why Might That Be a Problem?
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 265
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:21-05:00'
sources: []
---

Imagine you’re packing for a trip. If you only bring a few items—say a shirt, pants, and shoes—you can easily keep track of everything; the suitcase is low‑dimensional. But if you try to fit twenty different gadgets, each with its own weight and size, the suitcase becomes high‑dimensional: it has many “dimensions” (attributes) that interact in complicated ways.

In data science, a *high‑dimensional* dataset means each observation (a row) has many features (columns). For example, an image of 256 × 256 pixels has 65,536 dimensions. When the number of dimensions is large relative to the number of observations, several problems arise:

1. **Curse of Dimensionality** – distances between points become less meaningful; patterns blur.
2. **Overfitting** – models learn noise instead of real signals because they can fit almost any pattern in many dimensions.
3. **Computational Cost** – more calculations and memory are required.

Thus, just like a cluttered suitcase makes it hard to find what you need, high‑dimensional data can make analysis difficult, less reliable, and resource‑heavy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
