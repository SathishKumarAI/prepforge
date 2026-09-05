---
qid: ing_06201cca39__fp__local
question: 'Explain: DoorDash — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 451
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:40-05:00'
sources: []
---

**Why the “DoorDash‑FAANG” question appears in interviews**

At its core, DoorDash (and other logistics/consumer‑tech firms) is a *matching* problem: given a fleet of drivers and a stream of orders, we want to assign each order to a driver so that some objective—delivery time, revenue, or driver satisfaction—is optimized. That objective can be expressed as a **cost function** over the bipartite graph (orders ↔ drivers). The fundamental challenge is that the graph changes in real time: new orders arrive, drivers become unavailable, traffic patterns shift. Thus we need an algorithm that is both *online* and *scalable*.

The question typically asks you to design a **real‑time assignment policy** or analyze its performance guarantees. You must reason about:

1. **Online matching theory** – e.g., the classic “secretary problem” or “Karp–Vazirani–Vazirani (KVV) algorithm.”  
2. **Approximation ratios** – how close can we get to the offline optimum? The KVV algorithm achieves a \(1-1/e\) guarantee for unit‑weight bipartite matching, which is tight under standard complexity assumptions.  
3. **Practical constraints** – capacity limits (drivers can take only one order at a time), stochastic arrival rates, and fairness among drivers.

A non‑obvious insight: *you don’t need to solve the full combinatorial optimization every millisecond.* Instead, you can maintain a **greedy priority queue** of “potential matches” sorted by a surrogate score (e.g., estimated delivery time). When an order arrives, you pop the highest‑scoring driver that satisfies constraints. This yields near‑optimal assignments with \(O(\log n)\) update time and is amenable to distributed implementation.

In summary, the DoorDash‑FAANG question tests your ability to translate a real‑world logistics problem into an online matching framework, apply theoretical guarantees, and bridge them to scalable engineering solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
