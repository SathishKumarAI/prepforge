---
qid: ing_2d7a21a450__fp__local
question: 'Explain: 3.1 Agent Setting — MemoryGraft: Persistent Compromise of LLM
  Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 349
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:26-05:00'
sources: []
---

**3.1 Agent Setting – Memory‑Graft: Persistent Compromise of LLM Agents via Poisoned Experience Retrieval**

The fundamental problem is that a large‑language‑model (LLM) agent’s *policy* is not fixed; it adapts by replaying past experiences stored in its internal memory. In an open‑world setting, the agent continually receives new observations and rewards, which are logged as experience tuples \((s,a,r,s')\). The policy update rule \(θ_{t+1}=θ_t+\alpha\nabla_\theta J(π_\theta)\) depends on gradients computed from these stored experiences. Thus, if an adversary can inject a *poisoned* tuple into the memory—e.g., by manipulating the reward signal or mislabeling states—the gradient will be skewed toward malicious behavior.

This vulnerability arises from two deeper principles:

1. **Optimization bias** – Gradient descent is only as reliable as its training data; corrupt samples shift the loss surface, leading to a *local* optimum that favors the attacker’s objective.
2. **Information leakage via replay buffers** – The agent treats memory entries as evidence of environment dynamics; poisoning exploits this assumption by presenting false evidence.

A non‑obvious insight: *the act of storing experiences is itself an implicit policy commitment.* Even if the underlying model is robust, the mere fact that past actions are reinforced through replay means a single malicious entry can permanently bias future decisions. Countermeasures must therefore monitor not just the model weights but also the provenance and integrity of every stored experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
