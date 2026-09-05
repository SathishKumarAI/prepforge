---
qid: ing_dae2d3ae2e__eli5__local
question: 'Explain: You want to serve a 70B-parameter model on a single 80 GB GPU.
  Walk me through whether it fits and what single-stream tokens/sec you''d expect.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 282
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:50-05:00'
sources: []
---

Imagine the model as a giant Lego tower that needs to be stored on one shelf inside your computer.  
A 70‑billion‑parameter model is like a tower with **70 billion little bricks**. Each brick holds a number (the parameter) and we usually keep two copies of every number in memory: one for the current value and one for its gradient during training, so we need about **140 GB** just to hold the numbers.  

Your GPU has only **80 GB**, so it can’t fit all those bricks at once. Even if you try clever tricks (splitting the model across multiple GPUs or loading parts on demand), a single 80‑GB card simply lacks enough space for a full 70‑B model.

Because of that, you can’t run a “single‑stream” (continuous) inference pipeline on one GPU; you would need at least two or more GPUs to hold the whole tower. If you did split it across two GPUs, each could process roughly **10–20 tokens per second** when serving text, depending on how fast your software moves data between cards. In short: 80 GB is too small for a 70‑B model; you need more memory (or multiple GPUs) to serve it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
