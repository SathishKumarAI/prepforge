---
qid: ing_9a876f490a__fp__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 671
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:34:21-05:00'
sources: []
---

**Why the fleet size matters**

A 13‑B parameter transformer needs roughly **2 GB of VRAM** plus workspace (≈4–6 GB total).  
The bottleneck for *throughput* is not the model size but the *token‑rate* that a single GPU can process.  
On an A100, a 13‑B GPT‑style net delivers about **500 tokens/s** when batched to ~16 requests (≈200 tokens each).  

1 M requests/day ≈ 115 req/s.  
Assuming an average payload of 200 tokens → **23 000 tokens/s** are required.

\[
N_{\text{GPUs}} = \frac{\text{tokens/s needed}}{\text{tokens/s per GPU}}
                 \approx \frac{23\,000}{500}
                 \approx 46
\]

So a modest **50‑GPU fleet (A100s or equivalent)** gives headroom for burst traffic, latency spikes, and model‑parallel pipelines.

**Key design points**

| Layer | Reasoning |
|-------|-----------|
| **Token batching** | Maximizes GPU utilization; single‑token inference would waste ~90 % of the compute. |
| **Model parallelism** | Splitting the 13‑B across 2–4 GPUs per request (e.g., Megatron‑style pipeline) keeps each GPU’s memory low and communication bounded, avoiding the “parameter‑per‑GPU” ceiling. |
| **CPU + networking buffer** | Tokenization & response assembly are lightweight; a single high‑core CPU can serve ~10 k req/s, so only one or two CPUs per rack are needed. |

**Non‑obvious insight**

The *real* scaling limit is the *inter‑GPU communication latency*. Even if each GPU can process 500 tokens/s locally, exchanging activations across a pipeline adds ~5–10 ms per stage. Therefore, instead of deploying many single‑GPU servers, it is more efficient to allocate **2–4 GPUs per inference instance** and let the model run in a *pipeline* on those GPUs; this reduces inter‑server network traffic and keeps overall latency below 200 ms for most workloads.

In short: ~50 high‑end GPUs (or equivalent) with a small CPU pool, using token batching and modest model parallelism, will comfortably sustain 1 M requests/day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
