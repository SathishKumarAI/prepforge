---
qid: ing_d30b87f4e9__star__local
question: 'Explain: Sinusoidal (Original Transformer) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 390
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:41-05:00'
sources: []
---

**Situation:**  
During my last internship at a startup developing an open‑source language model, the team noticed that the attention layers were treating all tokens as if they had no notion of order. This made the generated text incoherent after just a few sentences, and our perplexity score was hovering around 70—way above the target of 35.

**Task:**  
I was tasked with re‑introducing positional awareness into the transformer so that the model could understand token positions without relying on recurrent architectures or additional memory. The goal was to keep training speed high while improving context understanding.

**Action:**  
I implemented the sinusoidal positional encoding from the original Transformer paper. For each position *pos* and dimension *i*, I calculated:
`PE(pos, 2i) = sin(pos / 10000^(2i/d_model))`
`PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))`.
I added these embeddings to the token embeddings before feeding them into the multi‑head self‑attention. To validate, I compared perplexity on a held‑out validation set and ran ablation tests varying the embedding dimension and frequency scaling factor. I also benchmarked GPU memory usage; the sinusoidal approach added negligible overhead (~0.5 GB) versus learned positional embeddings which increased memory by ~2 GB.

**Result:**  
After integration, perplexity dropped from 70 to 32 within three training epochs, and the model produced coherent paragraphs up to 200 tokens long. The project was then released as a lightweight, position‑aware LLM library that other teams adopted. I learned how elegant mathematical tricks like sinusoidal encodings can replace heavier learnable parameters while preserving model efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
