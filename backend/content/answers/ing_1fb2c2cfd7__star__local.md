---
qid: ing_1fb2c2cfd7__star__local
question: 'Explain: Things That Surprise People — Together AI Interview Guide 2026:
  Open-Model Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013
  techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 361
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:39-05:00'
sources: []
---

**Situation** – I was leading a proof‑of‑concept at my previous company to deploy an open‑source transformer (Llama‑2) into our customer‑facing chatbot, but the model’s latency hit 1 s per request on our GPU cluster and we couldn’t meet the SLA of 200 ms.  

**Task** – Reduce inference time by ≥5× while keeping memory usage under 8 GB per GPU and preserving accuracy for enterprise‑grade security compliance.  

**Action** – I rewrote the forward pass as a custom CUDA kernel that fused layer‑norm, self‑attention, and feed‑forward ops into one launch, eliminating kernel‑launch overhead. I then added speculative decoding: the model pre‑computes top‑k token logits for 4 steps ahead, caches them, and only re‑runs when beam search diverges. For safety, I wrapped the kernel with a tensor‑core path that uses BF16 precision, and I instrumented each stage with NVIDIA Nsight to confirm GPU occupancy stayed >90 %.  

**Result** – Latency dropped from 1 s to 180 ms per request on a single RTX‑A6000, with only a 0.4 % loss in perplexity. We deployed the model in production for 12 enterprise clients, cutting inference cost by ~70 % and meeting regulatory audit requirements. This experience taught me how to balance low‑level CUDA optimizations with higher‑level decoding strategies to meet real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
