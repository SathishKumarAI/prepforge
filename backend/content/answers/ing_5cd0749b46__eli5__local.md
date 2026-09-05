---
qid: ing_5cd0749b46__eli5__local
question: 'Q: What is DoRA, and why would you use it over standard LoRA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 213
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:30-05:00'
sources: []
---

Imagine your neural network as a huge library where every book (weight) tells the model how to behave.  
**LoRA** is like adding a few extra “sticky notes” that only tweak certain pages; it keeps most of the original books untouched and saves memory.  

**DoRA** (Dynamic Orthogonal Reparameterization) takes this idea further. It’s as if those sticky notes can change shape on their own, rotating around a special axis so they stay balanced and don’t interfere with each other. Because DoRA’s notes are “orthogonal” (mutually independent), the library can update many parts at once without clashing, often giving better performance than static LoRA.

Use DoRA when you need faster adaptation or higher accuracy in fine‑tuning, especially on limited hardware. It trades a tiny bit more computation for smarter, non‑overlapping tweaks that keep the core books stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
