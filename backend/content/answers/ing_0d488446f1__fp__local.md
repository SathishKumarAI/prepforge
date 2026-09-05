---
qid: ing_0d488446f1__fp__local
question: 'Explain: Execution model — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 343
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:18-05:00'
sources: []
---

**Execution model – Agentic Engineering (Neo Kim & Paul Hoekstra)**  

The core problem is that a learning system must *choose* which data‑processing step to execute next while still being open to future evidence. Traditional pipelines fix an order, so the model cannot react to new signals without retraining from scratch.  
We formalise this as a **sequential decision process**: at each time \(t\) we observe a state \(s_t\) (current predictions, uncertainty estimates, resource constraints), choose an action \(a_t\) (run a feature extractor, fine‑tune a layer, query human input), and receive a reward \(r_{t+1}\) (improved accuracy, reduced cost). The goal is to maximise expected cumulative reward.  

This turns learning into a **policy optimisation** problem, analogous to reinforcement learning but constrained by *data‑efficiency* rather than exploration. The policy must be *agentic*: it can intervene on its own internal architecture, not just its outputs.  
A key insight often missed is that the **policy’s action space is itself a hypergraph of model subcomponents**; optimizing over this combinatorial space yields emergent modularity—sub‑models specialise in different regimes without explicit supervision.  

Thus Agentic Engineering reframes training as an *adaptive execution* problem, grounded in sequential decision theory and yielding self‑organising architectures that evolve with data streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
