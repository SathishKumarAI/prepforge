---
qid: ing_0b025c000e__eli5__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 330
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:52:57-05:00'
sources: []
---

Imagine you’re a chef with one big kitchen (your 8‑B base model) and dozens of customers who want their own special sauce (fine‑tuned versions). Instead of cooking each sauce from scratch, you keep the core recipe on the stove and let each customer add only a few unique spices. In AI terms, that’s *parameter‑efficient fine‑tuning*: each custom model changes just a tiny slice of the 8‑B network—maybe a few million “spice” parameters—while sharing the bulk of the weights.

With a handful of GPUs, you run many of these small spice‑sets in parallel. You load the base model once into GPU memory and stream different sets of new parameters to it for each customer’s inference or training step. The kitchen can handle dozens of orders as long as the shared core fits on the GPUs and the added spices don’t exceed the remaining RAM.

What usually breaks first is the GPU’s memory budget: when you try to keep too many custom spice‑sets active at once, the memory overflows and training stalls. The next bottleneck is compute speed; each extra fine‑tune adds a tiny but cumulative load on the GPUs, so after a certain number of customers the system slows noticeably. Thus, efficient sharing keeps most costs low, but memory limits and processing time are the first to bite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
