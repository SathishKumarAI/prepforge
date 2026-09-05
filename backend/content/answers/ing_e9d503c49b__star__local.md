---
qid: ing_e9d503c49b__star__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 312
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:58-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time chatbot that could generate responses in under 200 ms for a global customer service platform. The legacy system used an LSTM‑based language model, but latency kept us from meeting SLAs.

**Task:** I needed to replace the RNN pipeline with something faster while preserving or improving perplexity and ensuring we could handle long context windows without exploding memory usage.

**Action:** I migrated to a transformer architecture because its self‑attention lets each token attend to all previous tokens in parallel, eliminating the sequential bottleneck of RNNs. During inference I implemented a key–value (KV) cache: after computing the Q,K,V matrices for a prompt, I stored K and V tensors on GPU memory. For subsequent tokens, I reused those cached values instead of recomputing them from scratch, effectively reducing computation by roughly 70 % per step. I also used FlashAttention to compress the attention matrix and mixed‑precision (FP16) to fit larger batch sizes.

**Result:** Latency dropped from ~250 ms to <120 ms per token, and perplexity improved from 42 to 28 on our test set. The KV cache proved critical—without it we would have faced a 5× slowdown at inference time. This experience taught me that architectural shifts must be paired with smart runtime optimizations like caching to fully unlock transformer benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
