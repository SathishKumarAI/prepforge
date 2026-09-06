---
qid: ing_80352b738f__fp__local
question: 'Explain: let''s see how the dispatch system works — UBER System design
  | OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 440
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:08-05:00'
sources: []
---

### Dispatch in ride‑hailing systems: a principled view  

**What problem is it solving?**  
A dispatcher must match *dynamic* supply (drivers) with *dynamic* demand (passengers) under latency constraints while respecting fairness, revenue, and user experience. Formally we seek a mapping  
\[
d_t:\mathcal{P}_t\times \mathcal{D}_t\to\{0,1\}
\]
that maximizes expected utility
\[
U=\sum_{p\in\mathcal{P}_t}\sum_{d\in\mathcal{D}_t} d_t(p,d)\bigl(r(d)-c(p,d)\bigr)
\]
subject to capacity and service‑level constraints.

**Why must the system be distributed?**  
The state space (hundreds of thousands of drivers, millions of requests) is too large for a single coordinator. The *law of diminishing returns* in communication latency forces a hierarchical design: edge nodes handle local clustering; a global optimizer reconciles conflicts via a lightweight consensus protocol.

**Core principle: stochastic optimization under uncertainty**  
Drivers’ future positions are random variables with known transition kernels (e.g., from historical GPS). The dispatcher solves a *Markov decision process* in real time, approximated by *rolling‑horizon* linear programming. This guarantees that the expected reward is close to optimal while keeping computation tractable.

**Non‑obvious insight:**  
Many designs treat the driver pool as homogeneous, but the **entropy of driver locations** is a better predictor of future matching quality than raw density. By maintaining a *location entropy map*, the system can pre‑allocate “reserve” drivers to high‑entropy zones, reducing pickup time variance more effectively than naive density‑based allocation.

In short, dispatch is an online stochastic optimization problem solved by distributed hierarchical clustering, rolling‑horizon linear programming, and an entropy‑aware reserve strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
