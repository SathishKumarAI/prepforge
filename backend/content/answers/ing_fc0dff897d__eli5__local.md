---
qid: ing_fc0dff897d__eli5__local
question: How do you estimate whether a model fits on a given GPU? Will a 70B model
  fit on one 80 GB card?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 252
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:03-05:00'
sources: []
---

Think of a GPU like a very big, very fast bookshelf that can hold books (the model’s weights).  
Each weight is a tiny piece of information; the whole book is the set of all those pieces.  
To know if the book will fit, you first count how many “pages” it has and then see how many pages the shelf can hold.

1. **Count the parameters** – every 70‑billion‑parameter model needs 8 bytes per parameter (float32) or 4 bytes (float16).  
2. **Add a safety margin** – GPUs also need space for activations, gradients and temporary buffers during training; usually you double the raw size.  
3. **Compare to GPU memory** – if the doubled size is below 80 GB, the model can run on that card.

So a 70B model in float32 needs about 560 GB just for weights; even with half‑precision it’s ~280 GB, plus overhead makes it impossible on an 80 GB GPU. A 70B model would require several GPUs or specialized memory‑efficient techniques.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
