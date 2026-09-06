---
qid: ing_8aa0fee3cb__fp__local
question: 'Explain: OpenAI System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 476
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:18-05:00'
sources: []
---

### Why the OpenAI “System‑Design” stack looks the way it does

At its core, a modern LLM is a **probabilistic inference engine** that must evaluate  
\(P(\mathbf{y}\mid\mathbf{x})=\prod_{t} P(y_t\mid y_{<t},\mathbf{x})\) for billions of tokens per second.  
Two constraints dominate:

| Constraint | Reason | Design consequence |
|------------|--------|--------------------|
| **Throughput** | Real‑time inference (chat, code‑completion) | Parallel transformer blocks with *tensor‑parallel* and *pipeline‑parallel* decomposition; 8–16 GB per GPU. |
| **Latency** | End‑to‑end user response < 200 ms | Layer‑wise caching of key/value states; flash‑attention that keeps O(N²) cost linear for short prefixes. |
| **Scalability** | Training on > 10⁵ GPUs | Sharded optimizer (LAMB/AdamW) with *gradient checkpointing* to keep memory in check. |
| **Reliability** | Multi‑region deployment | Stateless request routing; vector‑based sharding of model shards across data centers, enabling graceful failover. |

The deeper principle is **divide‑and‑conquer over the transformer’s computational graph**: each layer can be parallelized independently (tensor‑parallel) while different depths are pipelined across machines. This matches the *sequential* dependency of language modeling but breaks the quadratic bottleneck.

> **Non‑obvious insight:**  
> The *key/value cache* is not just a speed trick; it turns inference into an **online learning problem**. By reusing past activations, we reduce effective sequence length from \(L\) to \(\log L\), which is why modern systems can handle 10k‑token prompts with the same latency as 1k tokens.

Thus, the architecture is a direct instantiation of *probabilistic inference + parallel linear algebra* optimized for the tight coupling of latency and throughput that real‑world ML services demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
