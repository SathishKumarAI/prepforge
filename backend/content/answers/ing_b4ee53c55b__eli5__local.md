---
qid: ing_b4ee53c55b__eli5__local
question: 'Explain: Self-Attention (without masking) — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 227
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:32-05:00'
sources: []
---

Imagine you’re reading a mystery novel and every sentence is a clue.  
Self‑attention in GPT‑2 is like a detective who can instantly look back at **all** previous clues to decide how important each one is for understanding the current line.

For each word (the “current clue”), the model creates three short vectors:  

* **Query** – what it’s looking for right now.  
* **Key** – what each earlier word offers.  
* **Value** – the actual content of that earlier word.

The detective takes the Query, compares it with every Key (a quick dot‑product), and turns those comparisons into a weight that says “this earlier clue matters 70% here.”  
It then multiplies each Value by its weight and adds them up. The result is a single enriched representation for the current word, informed by all past words.

So self‑attention lets GPT‑2 weigh every previous piece of text when forming its next prediction—just as a detective weighs every clue to solve the mystery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
