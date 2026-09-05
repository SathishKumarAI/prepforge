---
qid: ing_bdfe5060ac__eli5__local
question: 'Explain: Input Encoding — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 276
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:20-05:00'
sources: []
---

Think of GPT‑2 as a very long sentence‑builder that first has to “read” the text it will write.  
**Input encoding** is like giving the model a set of colored Lego blocks that represent each word and its position in the sentence.

1. **Tokenization** – The book is split into small pieces (tokens). A token can be a whole word, part of a word, or punctuation.  
2. **Word‑piece embeddings** – Each token gets turned into a numeric vector (“the block’s color”). These vectors capture meaning and are learned from data.  
3. **Position encodings** – Since the same word can mean different things depending on where it appears, we add another small vector that tells the model *where* the block sits in the sentence (first, middle, last).  

The final input to GPT‑2 is the sum of the token vector and its position vector. This combined “block” carries both identity and order, letting the transformer know not only what words are present but also how they line up, so it can predict the next block in the chain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
