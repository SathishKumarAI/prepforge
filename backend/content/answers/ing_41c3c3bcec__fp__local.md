---
qid: ing_41c3c3bcec__fp__local
question: 'Explain: Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 475
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:24:33-05:00'
sources: []
---

**SWE‑1.5: A Rapid‑Inference Agent for Cognitive Workflows**

At its core, an intelligent agent must *translate* high‑level intentions into concrete actions while respecting constraints that change on the fly. Traditional reinforcement learning (RL) tackles this by learning a value function \(V(s)\) or policy \(\pi(a|s)\) over a discrete action space. However, when the environment contains **continuous sensory streams** and **real‑time decision windows**, two bottlenecks appear:

1. **Policy evaluation latency** – sampling from a deep network every millisecond is prohibitive.
2. **Sample inefficiency** – learning to act optimally in high‑dimensional spaces requires vast data.

SWE‑1.5 circumvents both by **factorizing the policy into two stages**:

* **Fast inference layer (FIL)**: a lightweight, fixed‑structure network that maps raw observations \(o_t\) to *macro‑actions* \(\mu_t\) via a deterministic embedding. It is trained offline with supervised learning on a curated dataset of expert demonstrations, thus eliminating the need for online exploration.
* **Adaptive refinement module (ARM)**: a lightweight recurrent controller that receives the macro‑action and the current state \(s_t\), then performs a *gradient‑free* search over a low‑dimensional action manifold. This is essentially a local linearization of the environment dynamics, solved analytically in closed form.

The key insight is that **macro‑actions encode the manifold’s principal directions**; ARM only needs to fine‑tune within this subspace, drastically reducing dimensionality and computation. Consequently, SWE‑1.5 achieves *real‑time* decision making (sub‑10 ms inference) while retaining near‑optimal performance on benchmark cognitive tasks such as navigation, dialogue planning, and adaptive control.

> **Non‑obvious takeaway:** By separating the *global* policy from the *local* refinement, we trade off a modest offline training cost for an asymptotically linear inference time in the action dimension—a principle that can be ported to any RL setting where latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
