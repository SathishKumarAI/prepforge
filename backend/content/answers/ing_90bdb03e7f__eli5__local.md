---
qid: ing_90bdb03e7f__eli5__local
question: 'Explain: Derive the KV cache memory formula and compute it for a concrete
  model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 333
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:26-05:00'
sources: []
---

Imagine a kitchen where you’re preparing many dishes (the transformer’s attention layers).  
Each dish needs to remember two things: the *keys* (what ingredients are needed) and the *values* (how much of each ingredient to use).  
The kitchen has a pantry that can hold a certain number of ingredient lists.  

**KV cache memory = number of dishes × (size of key + size of value)**  

In practice, for a transformer:

- Each token in a sequence creates one key and one value.
- A key or value is a vector of length *d* (the hidden dimension).
- If the model uses 32‑bit floats (4 bytes) and has *N* tokens per batch, the cache size is  

\[
\text{Cache} = N \times d \times 2 \times 4 \;\text{bytes}
\]

**Concrete example:**  
A GPT‑2 medium model has \(d = 768\).  
With a batch of 8 sequences, each holding 128 tokens, the cache is

\[
8 \times 128 \times 768 \times 2 \times 4
= 7{,}077{,}{,}888 \text{ bytes}
\approx 6.75 \text{ MiB}.
\]

So for every token you keep two 768‑length vectors in memory; the formula just counts how many tokens and how big each vector is.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
