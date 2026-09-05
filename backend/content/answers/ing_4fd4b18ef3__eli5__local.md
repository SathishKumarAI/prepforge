---
qid: ing_4fd4b18ef3__eli5__local
question: Explain how a Mixtral-style sparse mixture-of-experts model works. Why does
  a model with ~47B parameters run at the cost of a ~13B one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 250
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:43:22-05:00'
sources: []
---

Think of a library that only opens certain rooms for each book you ask about.  
In a **Mixtral‑style sparse mixture‑of‑experts** model, the “books” are inputs (images, sentences), and the “rooms” are small expert networks inside a huge building.

When you feed an input, two things happen:

1. **Router** – A tiny helper looks at the input and decides which experts should read it.  
   *Expert* = a compact neural network that specializes in a narrow pattern (e.g., faces, numbers). Only 2–4 of them are chosen for each token.

2. **Experts** – The selected experts process the token and send their result back. All other experts stay closed, so they don’t waste computation.

Because most of the 47 B parameters live in these many experts but only a few are active per step, the model can be *larger* yet still run at roughly the same cost as a 13 B dense model—just like a library that lets you skip half its rooms each time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
