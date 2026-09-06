---
qid: ing_c506d24764__fp__local
question: 'Explain: Related — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 406
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:40-05:00'
sources: []
---

**Understanding Latency – the Fundamental Bottleneck in Real‑Time ML**

At its core, *latency* is the time a model spends turning an input into an output.  
Mathematically it’s the composition of three deterministic delays:

1. **Data transfer time** \(T_{\text{net}}\) – bandwidth \(\times\) payload size.  
2. **Pre‑processing / decoding time** \(T_{\text{prep}}\) – often linear in input length.  
3. **Inference time** \(T_{\text{inf}} = f(\text{model depth}, \text{hardware GFLOPs})\).

The total latency is thus  
\(L = T_{\text{net}} + T_{\text{prep}} + T_{\text{inf}}\).  

Why must it be minimized? In interactive applications (speech‑to‑text, live translation) the human‑perceived delay is bounded by the *interactive threshold* (~200 ms). Exceeding this turns a smooth dialogue into a stilted one. From an optimization perspective, latency is the *dual* of throughput: decreasing \(T_{\text{inf}}\) typically increases resource usage (e.g., more FLOPs or memory), so we face a Pareto frontier.

A non‑obvious insight: **batching reduces per‑sample latency only if the model’s parallelism can be exploited**. In many serverless setups, each request is isolated; batching is impossible unless you redesign the architecture to aggregate requests first. Thus, for true low‑latency inference, one must engineer *both* the model (e.g., pruning, quantization) and the deployment pipeline (edge vs cloud, queueing policies).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
