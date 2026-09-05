---
qid: ing_830513dcea__eli5__local
question: 'Q: Why train an 8B model on 15T tokens if Chinchilla says 160B tokens is
  optimal?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 330
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:22-05:00'
sources: []
---

Imagine a student who has a big notebook (the **model**, with 8 billion pages) and wants to learn how to write stories. The **tokens** are the individual words or punctuation marks she reads from books. A *15 trillion‑token* curriculum is like giving her a moderate library of diverse novels—enough variety that she learns many styles, but still limited compared to a gigantic 160 trillion‑token library.

The Chinchilla paper says that, for a notebook with 8 billion pages, the best learning comes from about 160 trillion words. That’s because each page can absorb more detail when it sees far more examples. However, building such an enormous curriculum is costly and slow. In practice, training on 15 trillion tokens still lets the student grasp a wide range of patterns; the notebook learns useful tricks even if not as finely tuned as with 160 trillion words.

So:  
- **Model size** = number of pages (capacity).  
- **Tokens** = words read.  

Training on fewer tokens is cheaper and faster, but training on more tokens—ideally 160 trillion for an 8‑billion‑page notebook—makes the model smarter and less likely to miss subtle language nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
