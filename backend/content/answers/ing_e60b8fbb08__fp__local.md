---
qid: ing_e60b8fbb08__fp__local
question: 'Explain: Price a dedicated endpoint: estimate cost per million output tokens
  for a 70B model, and explain the throughput - latency trade.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 769
total_tokens: 956
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:07:51-05:00'
sources: []
---

**Cost per million output tokens**

A 70 B‑parameter model (≈ GPT‑3.5) runs on a single A100/RTX‑8000 GPU.  
OpenAI’s pricing is roughly **$0.02 / 1 000 tokens for input** and **$0.04 / 1 000 tokens for output** (the ratio follows the compute cost per token).  
For one request that emits *N* output tokens we incur:

\[
C_{\text{out}} = \frac{N}{10^6}\times \$0.04,
\qquad
C_{\text{in}} = \frac{\langle T_{\text{prompt}}\rangle}{10^6}\times \$0.02.
\]

With a minimal prompt of 100 tokens the overhead is only \(0.000002\) $; thus **the cost per million output tokens is ≈ \$0.04**—a figure that grows linearly with output length but is almost independent of the prompt size for typical use cases.

---

**Throughput–latency trade‑off**

Let  
- \(t_{\text{token}}\) = compute time per token (≈ 2 ms on an A100),  
- \(B\) = batch size,  
- \(Q\) = queueing delay.  

Inference latency for a single request:

\[
L = Q + B\,t_{\text{token}}.
\]

Throughput is the reciprocal of the time to process one *batch*:

\[
T = \frac{B}{B\,t_{\text{token}}} = \frac{1}{t_{\text{token}}},
\]

which is **independent of batch size** once the GPU kernel is fully occupied.  

The non‑obvious insight: *kernel launch overhead and memory copy latency dominate for very small batches*. Increasing \(B\) beyond ~8–16 requests flattens the latency curve while keeping throughput constant; pushing \(B\) higher yields no benefit until the GPU’s memory bandwidth saturates, after which latency rises again. Thus the sweet spot is where batch size maximizes GPU occupancy without incurring extra queuing or transfer costs—often a few dozen requests for a 70 B endpoint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
