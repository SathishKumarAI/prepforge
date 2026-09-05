---
qid: ing_b3dccc1170__eli5__local
question: Why does scaled dot-product attention divide by √d_k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 233
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:12-05:00'
sources: []
---

Think of attention like a chef tasting many soups (the key vectors) to decide which one should be served with the main dish (the query).  
The “scale” is how loudly the chef listens: if the voices are too loud, every soup sounds equally intense and the chef can’t pick a clear favorite.  
In math terms, the dot product of two \(d_k\)-dimensional vectors grows roughly with \(\sqrt{d_k}\). Imagine each vector as a string of \(d_k\) notes; more notes mean higher volume.  
Dividing by \(\sqrt{d_k}\) is like turning down the sound so that all soups are compared at a fair level, regardless of how many notes (dimensions) they contain.  

**Definition:**  
- **\(d_k\)**: the dimensionality of each key (and query) vector – basically how many numbers describe it.  

This scaling keeps the attention scores stable and lets the model learn which keys truly match the query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
