---
qid: ing_b07be9f39e__eli5__local
question: 'Explain: Learned Absolute — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 257
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:54-05:00'
sources: []
---

**Learned Absolute Positional Embeddings**

Imagine a word “cat” walking on a straight hallway that has numbered tiles: 1, 2, 3… The hallway’s numbers tell the model where each word sits in the sentence. In a transformer, instead of just using the number itself, we give the model a *learned absolute positional embedding*: a small secret code that maps every tile (position) to a unique vector (a tiny list of numbers). Think of it like giving each tile its own fingerprint that the model learns over time.

These fingerprints are added to the word’s own “meaning” vector before the transformer starts mixing words together. By learning these fingerprints, the model remembers where each word is in the sentence—just as a person can recall which spot on the hallway they were standing in when hearing a story. This helps the model keep track of order without having to recompute positions every time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
