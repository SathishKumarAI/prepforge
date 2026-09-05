---
qid: ing_d30b87f4e9__eli5__local
question: 'Explain: Sinusoidal (Original Transformer) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 287
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:39-05:00'
sources: []
---

Think of a transformer as a big choir where each singer sings the same song, but they need to know **where** they are in the line—first verse, second chorus, etc.—so their voices blend correctly.  
Instead of giving every singer a separate number card (which would be slow and memory‑heavy), the original transformer uses a *sinusoidal key* that’s like a musical staff with evenly spaced notes. For each position \(p\) in the sequence, we compute two numbers:  

- \(\text{pos}(p)_i = \sin(p / 10000^{2i/d})\)  
- \(\text{pos}(p)_{i+1} = \cos(p / 10000^{2i/d})\)

Here \(d\) is the hidden dimension size. The sine and cosine waves have different frequencies, so each position gets a unique “wave pattern.” When the model adds these patterns to the word embeddings, every layer can later learn how to use them to compare positions without having to store an extra table.  

So the sinusoidal encoding is like giving each singer a tiny, pre‑written musical phrase that tells everyone exactly where they stand in the song—simple, reusable, and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
