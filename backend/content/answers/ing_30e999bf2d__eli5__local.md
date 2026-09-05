---
qid: ing_30e999bf2d__eli5__local
question: 'Explain: KV cache: the thing that eats your GPU — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 224
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:27-05:00'
sources: []
---

Imagine a giant library where every book is an instruction for the next sentence you want to write. When you ask the AI a question, it first reads the “story so far” and then decides what page comes next. That “story so far” is stored in a special shelf called the **KV cache** (Key‑Value cache).  
*Key*: the hidden memory of every word already read.  
*Value*: how that word should influence future words.

During inference, the AI keeps this shelf on the GPU and reuses it for each new prompt or batch of prompts. The shelf is huge—often larger than the model itself—and occupies a lot of VRAM. If you run many queries at once (production), the cache fills up fast, making your GPU feel “eaten” because it has to hold all those keys and values in memory. Thus, the KV cache is essential for speed but also the main consumer of GPU resources during real‑time AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
