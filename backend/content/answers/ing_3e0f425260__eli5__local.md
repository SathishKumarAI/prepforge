---
qid: ing_3e0f425260__eli5__local
question: 'Explain: 4.2 Random Hadamard Transforms — Pretraining Large Language Models
  with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 241
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:25-05:00'
sources: []
---

Imagine a gigantic library of books (the language model) that you want to read quickly.  
A **Hadamard transform** is like flipping every page in the library through a mirror and then shuffling the pages with a fixed pattern—so each book’s text gets spread out evenly across all pages.  
Doing this **randomly** means we choose different mirror‑shifts for each shuffle, so no single pattern dominates.  

When training a large language model on GPUs (NVFP4 is a fast floating‑point format), we first apply several random Hadamard transforms to the data. This “pre‑mixes” the information, letting the network learn general patterns faster and with less memory, just as a shuffled deck lets you see every card type sooner.  

**Key terms:**  
- *Hadamard transform*: a fast way to mix up data using only additions and subtractions.  
- *Random*: choosing different mixing patterns each time.  
- *NVFP4*: a GPU-friendly 4‑bit number format that speeds up calculations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
