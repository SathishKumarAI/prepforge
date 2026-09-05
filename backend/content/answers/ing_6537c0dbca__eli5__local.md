---
qid: ing_6537c0dbca__eli5__local
question: Estimate the KV-cache memory to serve a 70B-class model at 128k context.
  What do you do when it doesn't fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 249
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:27-05:00'
sources: []
---

Think of the KV‑cache as a giant “memory notebook” that records every word the model has read so far, so it can quickly look up what happened earlier without re‑thinking from scratch.  
For a 70‑billion‑parameter model, each token needs about 4 KB of storage in this notebook (the key and value vectors).  
With a 128‑000‑token context window:  

- 128 k tokens × 4 KB ≈ **512 MB** of KV cache.

That’s the amount you’d want on hand for smooth inference.  

If your hardware can’t hold that whole notebook, you have two options:

1. **Reduce the context length** – trim the window to fit what fits in memory.  
2. **Compress or swap out parts** – keep only the most recent tokens in RAM and spill older ones to slower storage (disk or a dedicated GPU buffer), trading speed for capacity.

Either way, you’re simply ensuring the notebook never overflows while still letting the model remember enough to answer questions accurately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
