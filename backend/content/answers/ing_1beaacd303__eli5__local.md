---
qid: ing_1beaacd303__eli5__local
question: 'Explain: Untied vs. Tied Embeddings — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 207
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:23-05:00'
sources: []
---

Imagine you’re writing a story with a secret codebook that turns each word into a number before the machine can read it.  
**Tied embeddings** mean you use the same codebook both for turning input words into numbers (the *input embedding*) and for turning the model’s output back into words (the *output embedding*). It’s like having one master key that opens every lock—smaller, faster, and you’re sure the two sides speak the same language.

**Untied embeddings** give the model its own separate codebook for each side. Now the input and output can use slightly different “keys.” This lets the transformer learn a richer way to translate between raw words and its internal thoughts, at the cost of a few more parameters.

So, tied = one key for both directions (compact), untied = two keys that can specialize (more expressive).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
