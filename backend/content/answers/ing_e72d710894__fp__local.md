---
qid: ing_e72d710894__fp__local
question: 'Explain: Principles of Context Engineering — Don\u2019t Build Multi-Agents
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 388
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:10:47-05:00'
sources: []
---

**Context Engineering in ML: why “single‑agent” cognition beats a swarm**

The core problem any model solves is *mapping* an input distribution \(P(x)\) to a target distribution \(Q(y|x)\). A single, well‑regularised network already learns a *function* that integrates all relevant features into one internal representation. Adding extra agents—each with its own parameters and local loss—does not increase the expressive power of the composite function; it merely multiplies computational cost and introduces new non‑convexities.

From an optimization standpoint, the gradient signal for the global objective is a *vector field* over parameter space. When multiple agents receive independent gradients, they drift apart in this high‑dimensional landscape, creating interference that slows convergence or traps the system in spurious minima. The “winner‑takes‑all” phenomenon (the best agent dominates) erodes diversity and collapses to a single hypothesis anyway.

Information‑theoretically, every additional agent must encode a *subset* of the joint distribution \(P(x,y)\). If agents are not coordinated, their outputs become redundant; mutual information between them is low, so the ensemble’s entropy does not increase proportionally. Thus, a well‑tuned single model achieves higher *effective capacity* per parameter than a loosely coupled swarm.

**Non‑obvious insight:** The bottleneck in multi‑agent setups isn’t the number of agents but the *communication channel*. Even with perfect aggregation, if the shared representation is too coarse (e.g., only logits), the ensemble cannot reconstruct fine-grained context that a single deep network learns internally. Hence, context engineering should focus on richer internal states and disciplined regularisation rather than proliferating agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
