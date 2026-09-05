---
qid: ing_15051907e3__star__local
question: 'Explain: ALiBi (Attention with Linear Biases) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 326
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:15-05:00'
sources: []
---

**Situation** – In my last internship at a startup building an internal chatbot, our LLM was struggling with long‑context generation. Every time we increased the prompt to 4 k tokens, latency jumped by 35% and hallucinations rose because the model kept attending to irrelevant early tokens.

**Task** – I was tasked with reducing attention span bias while keeping inference speed under 200 ms per token on our GPU cluster.

**Action** – First, I studied the ALiBi paper and re‑implemented its linear bias matrix in PyTorch. Instead of a learned positional embedding, we added a fixed slope per layer that linearly penalizes distant tokens. I integrated this into our transformer’s attention module, replacing the standard bias with `bias = -distance * slope`. To preserve throughput, I batched the bias computation on the GPU and avoided extra memory copies by reusing existing tensors. I also tuned the slope values per layer using a small validation set to balance short‑range precision against long‑range context retention.

**Result** – After deployment, latency dropped from 250 ms to 185 ms per token, and perplexity on our test set fell from 32.4 to 28.1. The model now consistently produced coherent responses up to 8 k tokens without extra memory overhead. I learned that simple linear biases can replace heavy positional embeddings, yielding both speed and quality gains when carefully tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
