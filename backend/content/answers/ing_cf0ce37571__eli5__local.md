---
qid: ing_cf0ce37571__eli5__local
question: 'Explain: The Decoder-Only Block — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 251
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:03:20-05:00'
sources: []
---

Imagine you’re reading a recipe card that only shows the first few steps and then keeps guessing what comes next. That’s a **decoder‑only block** in GPT‑2.  
*Decoder* means it looks only forward—each word is predicted from the words before it, never from future words. *Block* is just one layer of this prediction process.  

Inside the block, every new word you add becomes a tiny “signal” that travels through two parts: a **self‑attention** wheel that lets the model weigh all previous words (like checking earlier steps of a recipe), and a small neural net that turns those weighted signals into a fresh word guess. The output of one block is fed straight into the next, so after many blocks the model has built up a long chain of context, just like reading through an entire cookbook page by page.  

So, think of GPT‑2 as a recipe‑reading robot: it reads what’s already written, asks “what should follow?” at each step, and repeats until the whole sentence is finished.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
