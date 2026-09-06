---
qid: ing_af3598f188__fp__local
question: 'Explain: Continuous batching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 501
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:04-05:00'
sources: []
---

**Continuous Batching in an LLM Gateway & Serving Platform**

At its core, a language‑model (LLM) inference engine is a *high‑throughput* linear algebra kernel: it multiplies large tensors and applies softmax. The bottleneck is not the model itself but the *input pipeline*: each request arrives as a small token sequence, causing many tiny matrix multiplications that under‑utilize GPUs or TPUs.

**Why batching?**  
Batching turns dozens of 1‑token queries into a single large tensor of shape \((B, L, D)\). The GPU can now amortise kernel launch overhead and exploit data locality. Mathematically, the expected latency per request is

\[
E[T] = \frac{C_{\text{setup}}}{B} + C_{\text{comp}}
\]

where \(C_{\text{setup}}\) is constant overhead and \(C_{\text{comp}}\) scales linearly with \(L\). Increasing \(B\) reduces the first term, lowering average latency.

**Continuous batching** differs from naïve “batch‑then‑serve” by *overlapping* request arrivals with ongoing batches. The gateway maintains a sliding window of pending requests and triggers a kernel launch when either:

1. A maximum batch size is reached (throughput bound), or  
2. A timeout expires (latency bound).

This dynamic policy is an instance of **online convex optimization**: the platform solves at each tick a small convex program that trades off waiting time versus GPU utilization, guaranteeing that no request waits longer than its SLA while keeping the queue length bounded.

**Non‑obvious insight:**  
Because transformer inference exhibits *sub‑linear* memory growth with sequence length (due to caching of key/value tensors), continuous batching can opportunistically merge long‑former requests with short ones without extra cost. A greedy scheduler that simply groups by size misses this synergy; the optimal policy deliberately mixes lengths, exploiting cache reuse to further reduce \(C_{\text{comp}}\).

In practice, continuous batching yields a 3–5× throughput improvement over static batching while keeping per‑request latency within acceptable limits—exactly what an LLM gateway must achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
