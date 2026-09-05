---
qid: ing_b2d467c564__eli5__local
question: 'Explain: A journey up the Stack — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 204
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:26-05:00'
sources: []
---

Imagine building a giant Lego tower that can read and write stories. Each layer of the tower is a *transformer block*—a tiny calculator that looks at every word in a sentence and decides how important it is, like a detective weighing clues. The tower’s base (the “stack”) starts with raw words turned into numbers (*embeddings*). As you climb higher, each block re‑examines the whole story, passing its refined view to the next layer. By the time the topmost block finishes, it has a polished understanding of context and can predict the next word, just as a seasoned writer would. The illustration shows this process step by step: words become numbers → layers share attention maps → final layer produces probabilities for new words. Each step is a small but crucial elevator ride that turns raw text into fluent language generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
