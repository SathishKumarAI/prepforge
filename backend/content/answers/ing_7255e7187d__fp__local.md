---
qid: ing_7255e7187d__fp__local
question: 'Explain: Back of the Envelope Calculation in System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 360
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:07:26-05:00'
sources: []
---

In a system‑design interview the *back‑of‑the‑envelope* (BOE) is the first sanity check you perform on an ML pipeline.  
It starts from the **fundamental problem**: “how many predictions can I deliver per second while keeping latency below X ms?” From this requirement you derive a chain of constraints:

1. **Throughput** → `P = B × C` (predictions per second = batch size × compute cores).  
2. **Latency** → `L ≈ T_inference + T_queue + T_network`.  
3. **Memory footprint** → `M = S_model + S_batch`.

These equations are simple algebraic rearrangements of the underlying physics: CPU cycles, memory bandwidth, and network round‑trip times. They embody *optimization* (minimizing latency subject to throughput) and *information theory* (the batch size is bounded by the entropy of input features).  

A BOE forces you to **choose units** early—bytes per sample, ops per inference, seconds per request—so that later detailed design can use consistent metrics. It also reveals hidden bottlenecks: a model that needs 1 GB RAM will never fit on an edge device regardless of compute power.

**Non‑obvious insight:** The *batch size* is often the lever you overlook. Increasing it reduces CPU utilization per inference but raises latency linearly; decreasing it does the opposite. Thus, BOE exposes the trade‑off curve before you write code, saving weeks of debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
