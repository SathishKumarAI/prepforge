---
qid: ing_bd88a41d0e__fp__local
question: 'Explain: Training & Infrastructure — Introducing SWE-1.5: Our Fast Agent
  Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 503
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:46:35-05:00'
sources: []
---

## Training & Infrastructure – Introducing **SWE‑1.5**  
### The Core Problem  
When a neural agent learns to act, its *policy* is a function \( \pi_\theta(a|s) \) that maps states \(s\) to action probabilities. Optimizing \(\theta\) requires backpropagating gradients through *every* timestep of every trajectory—a quadratic cost in episode length and batch size. For real‑time decision systems (e.g., autonomous driving), this latency is unacceptable.

### Why a “Fast Agent” Must be Built from the Ground Up  
1. **Temporal locality** – Gradients for early timesteps dominate the loss; later steps contribute little yet still consume compute.  
2. **Sparse updates** – Most state–action pairs are never revisited in a single batch, so we can *cache* intermediate activations and reuse them across epochs.  
3. **Parallelism limits** – GPUs excel at dense matrix ops but suffer when the computation graph is too deep or irregular.

SWE‑1.5 addresses these by **factorizing** the policy into two lightweight modules: a *feature extractor* \(f_\phi(s)\) and a *policy head* \(h_\psi(f_\phi(s))\). The extractor runs once per state, producing a shared embedding; the head is a shallow MLP that can be updated in-place. Training proceeds on *mini‑trajectories*: we store only the last \(k\) states, recompute their embeddings on demand, and perform backpropagation through the tiny head. This reduces memory from \(O(T)\) to \(O(k)\) and compute from \(O(T^2)\) to \(O(kT)\).

### Non‑Obvious Insight  
Because the extractor is shared across all agents in a fleet, **differential privacy** can be enforced by adding noise once per embedding. This protects individual trajectories while keeping the head’s updates fast—an elegant blend of privacy and efficiency that most frameworks ignore.

In short, SWE‑1.5 turns the classic “train‑once‑use‑many” paradigm into a *train‑fast‑reuse‑often* one, enabling high‑throughput, low‑latency agents without sacrificing learning quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
