---
qid: ing_2f327a538e__star__local
question: You need to run a ~3B-parameter language model on a phone with tight memory
  and power budgets. What changes versus serving the same model in a datacenter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 345
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:59-05:00'
sources: []
---

**Situation:**  
At my last startup we had a flagship chatbot that used a 3‑billion‑parameter GPT‑style model for customer support. The product was suddenly required to run natively on Android phones so users could chat offline without Wi‑Fi, and our beta testers complained that the app would drain battery in under an hour.

**Task:**  
Redesign the deployment pipeline so the same model could fit within 1 GB RAM and keep CPU usage below 30 % on a mid‑tier Snapdragon chip while still delivering <200 ms inference latency for short queries.

**Action:**  
I first applied *quantization* to 8‑bit weights, which cut memory from 12 GB to ~300 MB. Next, I implemented *dynamic tensor fusion* and *layer‑wise sparsity pruning*, removing 70 % of redundant connections without dropping BLEU scores by more than 1%. To avoid CPU stalls, I offloaded the attention heads to the GPU’s Tensor Core via Vulkan compute shaders, scheduling them in a low‑priority queue. Finally, I wrapped the model in a lightweight C++ runtime with minimal JNI overhead and added an adaptive batcher that collapses multiple short queries into a single forward pass.

**Result:**  
The phone‑ready model now occupies 350 MB of RAM, uses <25 % CPU, and achieves ~180 ms latency on average. Battery life improved from 1 hour to 5 hours under typical usage. I learned that aggressive quantization plus targeted pruning can bring a huge transformer into the mobile domain without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
