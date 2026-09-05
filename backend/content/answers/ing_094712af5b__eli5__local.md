---
qid: ing_094712af5b__eli5__local
question: 'Do the GPU memory math: why can''t you full-fine-tune a 7B model on a single
  24 GB GPU with Adam?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 268
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:26-05:00'
sources: []
---

Think of training a 7‑billion‑parameter model like baking a giant cake that is split into many layers (the parameters).  
Each layer has two “ingredients”: the *weights* you are learning and the *Adam optimizer’s extra pieces*—the first‑moment estimate (m) and second‑moment estimate (v).  

If you only had one kitchen counter of 24 GB, you could put the cake layers on it. But Adam also wants to keep a copy of each layer for both m and v, so now you need **three times** the space: weights + m + v.  
A 7B model already needs about 30–35 GB just for its weights (8 bytes per parameter in float64, or 16 GB in float32). Adding two more copies pushes the total far beyond a single 24‑GB GPU.

So, even though you could fit the raw weights on one card, Adam’s extra “moment” buffers double the memory demand. That’s why full fine‑tuning of a 7B model requires either a larger GPU or tricks like gradient checkpointing to reduce memory usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
