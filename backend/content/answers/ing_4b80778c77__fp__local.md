---
qid: ing_4b80778c77__fp__local
question: 'Explain: The Wires Between the GPUs — Behind the Scenes of Distributed
  Training and Why Your GPU Wiring Matters as Much as Your Strategy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 371
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:41-05:00'
sources: []
---

**Why the physical interconnect between GPUs dictates distributed‑learning performance**

At its core, training a deep network distributes two intertwined problems: *compute* (matrix multiplies) and *communication* (parameter exchanges). In a multi‑GPU cluster each device owns a shard of the weight tensors; after every forward–backward pass they must synchronize gradients or activations. The cost of this exchange is governed by the *bandwidth* \(B\), *latency* \(\ell\) and the *message size* \(S\). A naïve round‑trip time is  
\[
T_{\text{comm}} = \ell + \frac{S}{B}.
\]
When \(S\) grows with batch size or model depth, the term \(S/B\) dominates. Thus, even a perfectly engineered optimizer cannot beat the physical limits of the wire.

This leads to a *communication‑computation* trade‑off: if the GPU fabric can deliver > 10 GB/s (e.g., NVLink, InfiniBand), the network behaves as if all GPUs were one large tensor core; otherwise, training stalls on exchanges. Consequently, choosing 8‑bit quantized gradients or model parallelism is meaningless unless the underlying link sustains that bandwidth.

**Non‑obvious insight:** *Topology matters.* A ring of GPUs with low latency can outperform a fully connected mesh if the algorithm aggregates along the ring first (e.g., AllReduce). Designing for “hierarchical” communication—fast intra‑node links, slower inter‑node—matches how modern deep nets scale. Ignoring this alignment turns an elegant optimizer into a bandwidth bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
