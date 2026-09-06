---
qid: ing_a072436d3e__fp__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 391
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:58-05:00'
sources: []
---

**Why vertical scaling can backfire**

Vertical scaling—adding CPU, RAM, or I/O capacity to a single node—appears attractive because it keeps the data model simple: one machine holds all training samples and parameters. However, this simplicity hides several *information‑theoretic* bottlenecks.

1. **Capacity is finite**  
   The maximum achievable accuracy depends on how many gradients can be computed per second. If a single GPU or CPU core saturates its memory bandwidth, the model’s effective sample rate plateaus regardless of added RAM. In statistical terms, the *effective sample size* is capped by hardware throughput; beyond that point you’re merely spending more time per epoch without reducing variance.

2. **Single‑point failure & latency**  
   All data must traverse a single network path to reach the node. The probability that an outage occurs somewhere on that path grows linearly with the number of components, and the *latency* is bounded by the slowest link. In a distributed setting, you can aggregate multiple paths in parallel (redundant links), turning latency into \(O(\log N)\) rather than \(O(N)\).

3. **Diminishing returns from parallelism**  
   A deeper insight often missed: *Amdahl’s Law* applies to vertical scaling too. If 30 % of training time is spent on data loading, no amount of extra compute will reduce the overall runtime below that fraction. Horizontal scaling can shift this bottleneck—by sharding data across nodes, each node loads only a subset, making the “data‑loading” portion negligible.

In short, vertical scaling forces you to accept hard limits on throughput and resilience; horizontal scaling turns those limits into tunable, probabilistic trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
