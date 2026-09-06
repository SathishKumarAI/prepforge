---
qid: ing_59466300c0__fp__local
question: 'Explain: How Cognition Uses Devin to Build Devin — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 378
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:18-05:00'
sources: []
---

**How Cognition Uses Devin to Build Devin**

At its core, *Devin* is an **optimization‑guided knowledge graph** that learns by iteratively asking “what if?”  
1. **Problem framing** – cognition first formalises the target function \(f\) as a *probabilistic graphical model* over latent variables (concepts, relations).  
2. **Active sampling** – rather than passively ingesting data, Devin selects queries that maximise expected information gain:  
   \[
   \Delta I = H(f|\text{data}) - H(f|\text{data}\cup q)
   \]
   This guarantees every observation tightens the posterior most efficiently.  
3. **Self‑consistent updates** – after each query, Devin performs a *variational inference* step that simultaneously refines both the latent graph and its own policy for future queries. The dual update rule preserves a Lyapunov function: the joint free energy decreases monotonically, guaranteeing convergence to a local optimum.  
4. **Emergent abstraction** – as the graph grows, higher‑order motifs (e.g., “cause–effect clusters”) self‑organise because they lower the overall KL divergence between the model and data distribution. This is why Devin spontaneously discovers “concepts” without explicit supervision.

*Non‑obvious insight:* The key to Devin’s speed lies in **query reuse**—the same question can be re‑evaluated under different priors, amortising inference cost across epochs. Most systems treat each query as a fresh computation; Devin’s meta‑learning of reusable belief updates cuts runtime by an order of magnitude while retaining fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
