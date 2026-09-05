---
qid: ing_d5e4433aad__star__local
question: 'Q: Why is LLM generation slower than classification?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:30-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with adding a chatbot feature to our customer‑support portal. The bot had to respond instantly to user queries while also generating natural language explanations for complex issues.

**Task:**  
I needed to implement two models: a lightweight classification model that routed the query to the correct FAQ, and an LLM that could produce detailed answers when the FAQ didn’t cover the question. Both had to meet a 2‑second response window under peak load.

**Action:**  
I profiled each inference pipeline on our GPU cluster. The classifier was a single‑layer CNN with batch‑norm; its forward pass required only ~0.3 ms per request. For the LLM I used a transformer decoder (≈12 layers, 110M params) and noticed that token generation involved sequential decoding: each new token depended on all previous ones, so we had to run another full forward pass for every output token. I also switched from eager execution to TorchScript to reduce overhead, but the core bottleneck remained the autoregressive nature of the model.

**Result:**  
The classifier consistently hit <0.5 ms, while the LLM averaged ~15 ms per token (≈300 ms for a 20‑token answer). This trade‑off forced us to implement caching and early stopping heuristics, cutting average latency to ~120 ms. I learned that LLMs are inherently slower because each token’s generation depends on prior context, unlike parallelizable classification passes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
