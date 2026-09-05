---
qid: ing_fca05591f2__eli5__local
question: 'Explain: Model Output — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 228
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:51-05:00'
sources: []
---

Imagine you’re reading a story where each page is written by a very smart “ghost writer.” The ghost writer (the GPT‑2 model) looks at the sentence that just finished and then predicts what the next word should be. It does this by keeping two things in mind:  

1. **What it has seen so far** – like a memory of all the previous pages, stored as numbers called *embeddings*.  
2. **How words usually follow each other** – learned rules (attention) that tell it which past words are most relevant for guessing the next one.

When you ask GPT‑2 to finish “The cat sat on the …,” the ghost writer scans its memory of the sentence, weighs how often “mat” or “sofa” appear after “on the,” and then chooses the word with the highest probability. That chosen word is the *model output*. It’s a quick decision made by comparing many possibilities, just as you might choose a word that feels most natural to finish a sentence in your head.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
