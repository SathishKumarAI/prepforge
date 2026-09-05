---
qid: ing_77d8be5ab1__eli5__local
question: Which modules do you target with LoRA, how do you pick the rank, and what
  are the actual memory savings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 230
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:46:27-05:00'
sources: []
---

Imagine a giant library where every book is a layer of an AI model.  
LoRA (Low‑Rank Adaptation) doesn’t rewrite each book; it adds a tiny, adjustable bookmark inside the page that can shift the meaning just enough for a new task.  

**Which parts get bookmarks?**  
We put them in the big, heavy matrices that sit between words and meanings—those are the model’s *weight matrices*.  
**How many bookmarks (rank) do we need?**  
Think of rank as how many different “shifts” you allow: a small number keeps the bookmark light but may miss subtle nuances; a larger number gives more flexibility but uses more memory.  
In practice, ranks of 8–32 work well for most language models.  

**Memory savings?**  
Instead of storing millions of extra weights, LoRA stores only a few thousand new numbers per matrix—often cutting the added memory by **10‑ to 100‑fold** while keeping performance close to training from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
