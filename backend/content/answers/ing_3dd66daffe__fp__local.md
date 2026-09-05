---
qid: ing_3dd66daffe__fp__local
question: 'Explain: Agent Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 565
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:57-05:00'
sources: []
---

**Agent Patterns – a principled taxonomy**

At its core an *agent* is an autonomous process that observes a state space \(S\), selects actions \(A\), and receives feedback (rewards or penalties). The problem the agent solves is to maximise expected cumulative reward under uncertainty. To structure this optimisation, researchers abstract recurring solution motifs into *patterns*. Each pattern embodies a minimal set of assumptions about perception, decision‑making, learning, and interaction that guarantees solvability.

| Pattern | Key Assumptions | Typical Use |
|---------|-----------------|-------------|
| **Reactive** | No internal state; mapping \(S\to A\) via simple rules. | Real‑time control where delays are critical. |
| **Deliberative** | Maintains a symbolic model of the world; plans via search. | Planning in known environments (e.g., board games). |
| **Hybrid** | Combines reactive reflexes with deliberative planning, often through a *policy hierarchy*. | Complex robotics that need fast reactions plus long‑term goals. |
| **Learning‑based** | Uses data to approximate the mapping \(S\to A\); no explicit model. | Reinforcement learning in high‑dimensional spaces. |

The *why* behind each pattern follows from optimisation theory:

1. **Reactive agents** minimise latency: their policy is a closed‑loop function, so the Bellman optimality equation collapses to a trivial mapping.
2. **Deliberative agents** tackle combinatorial explosion by explicitly exploring a search tree; they solve the *Bellman backup* offline, trading time for accuracy.
3. **Hybrid agents** exploit *hierarchical decomposition*: fast low‑level reflexes handle stochastic disturbances, while high‑level planners enforce constraints—this mirrors the principle of *separation of concerns* in control theory.
4. **Learning‑based agents** approximate the optimal value function \(V^*(s)\) by minimizing a loss derived from Bellman residuals; this is an instance of *function approximation* under the *curse of dimensionality*.

**Non‑obvious insight:**  
Patterns are not just design recipes—they correspond to different *representations of uncertainty*. Reactive patterns encode uncertainty implicitly in hand‑crafted rules, deliberative patterns make it explicit via a world model, and learning agents treat uncertainty as statistical noise to be averaged out. Thus, choosing a pattern is tantamount to selecting how the agent will *internalise* probability: whether as deterministic triggers, explicit beliefs, or learned expectations. This perspective unifies seemingly disparate architectures under the umbrella of *probabilistic reasoning*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
