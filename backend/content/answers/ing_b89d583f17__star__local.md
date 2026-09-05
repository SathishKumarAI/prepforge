---
qid: ing_b89d583f17__star__local
question: Walk me through what happens inside the server when an LLM processes a request.
  Why are prefill and decode bottlenecked differently?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 379
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:29-05:00'
sources: []
---

**Situation** – At my previous startup we were rolling out a real‑time chatbot that used a 12B LLM. When our load testing hit 3k QPS, latency spiked to 2.5 s and the GPU memory was maxed out, so I had to investigate why.

**Task** – My goal was to identify the bottlenecks in the request pipeline and reduce per‑token latency by at least 30 % while keeping cost under budget.

**Action** – I profiled the inference server (TensorRT + Triton) and discovered that the *prefill* stage, where the model processes the entire prompt token sequence once, was GPU‑bound because each token required a full transformer pass. The *decode* phase, however, was CPU‑bound: it used a beam search routine that repeatedly sampled from logits with small batch sizes, so the GPU stayed idle waiting for CPU callbacks. I re‑engineered the decode loop to run on the GPU by batching 32 tokens per step and offloading the top‑k sampling to CUDA kernels. I also switched to an efficient rotary‑embedding implementation for prefill, cutting its runtime from 18 ms to 9 ms per token.

**Result** – Latency dropped from 2.5 s to 1.7 s at peak load, and GPU utilization rose from 45 % to 80 %. The cost savings were about $0.08 per request, translating to a 28 % reduction in monthly spend. I learned that prefill is inherently parallelizable but decode’s sequential sampling can become the real bottleneck if not offloaded properly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
