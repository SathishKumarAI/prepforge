---
qid: ing_fb3d08f454__fp__local
question: 'Explain: AI Agentic Design Patterns with AutoGen - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 363
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:09-05:00'
sources: []
---

**Why agentic design matters**

In a learning system the *problem* is to transform raw data into actions that maximise some reward, while respecting constraints (fairness, safety). The only way to guarantee this is to separate **control flow** from **knowledge representation**: the controller decides *what* to do; the knowledge module decides *how* it knows. This decomposition mirrors the principle of *optimality by modularisation* in control theory and Bayesian inference.

**AutoGen’s three core patterns**

| Pattern | Purpose | Core idea |
|---------|--------|-----------|
| **Delegation** | One agent delegates a sub‑task to another. | Treats each sub‑problem as an independent optimisation problem; the delegator only needs to specify the interface, not the internals. |
| **Coordination** | Multiple agents negotiate shared resources or conflicting goals. | Models joint action as a *Markov Decision Process* over agent states; coordination signals act as sufficient statistics that preserve global optimality. |
| **Meta‑control** | A higher‑level agent supervises lower‑level agents’ policies. | Implements *policy distillation*: the meta‑controller learns to predict which low‑level policy will minimise expected regret, reducing sample complexity via hierarchical reinforcement learning. |

**Deep insight**

Most people overlook that these patterns are *self‑consistent* with **information bottleneck theory**: each pattern forces an agent to compress only the *relevant* part of its input (the interface), discarding irrelevant details. This compression yields robustness to distribution shift and makes the overall system easier to verify—exactly what safety‑critical AI needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
