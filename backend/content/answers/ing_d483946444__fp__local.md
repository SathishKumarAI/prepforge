---
qid: ing_d483946444__fp__local
question: What is the difference between short-term and long-term memory in agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 542
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:43-05:00'
sources: []
---

**Short‑term vs. long‑term memory in autonomous agents**

At the core of any learning agent is a *policy* π that maps observations o to actions a. To improve π, the agent must store information about past interactions so it can predict future rewards. The question is **how much** of this history to keep and how to encode it.

| Aspect | Short‑term memory (STM) | Long‑term memory (LTM) |
|--------|-------------------------|------------------------|
| **Purpose** | Capture *temporal dependencies* that are still relevant for the current decision. | Store *structural knowledge* that generalises across episodes and contexts. |
| **Capacity** | Finite, often bounded by a fixed buffer or recurrent hidden state (e.g., LSTM cells). | Effectively unbounded; learned embeddings or external memory modules grow with experience. |
| **Update rule** | Rapid, high‑frequency updates (online gradient steps) to track immediate dynamics. | Slower, meta‑learning or consolidation processes that integrate evidence over many episodes. |
| **Optimization target** | Minimise short‑horizon loss \(L_t = \mathbb{E}[r_{t:t+H}|\pi]\). | Minimise long‑horizon loss \(L_\infty = \mathbb{E}[R |\pi]\) where R aggregates over entire trajectories. |

The *why* follows from the bias–variance trade‑off in sequential decision making:

- **STM** reduces variance by conditioning on recent observations, but its expressivity is limited; it can’t capture patterns that span beyond its window.
- **LTM** increases expressiveness and reduces bias, yet incurs higher estimation error if updated too aggressively.

A deeper principle is *information bottleneck*: STM acts as a fast‑compressor of the most relevant recent bits (high mutual information with immediate reward), whereas LTM performs a slow compression that preserves long‑range predictive power.  

**Non‑obvious insight:** In many RL settings, **consolidating STM into LTM via episodic replay is not just a memory optimisation but an implicit regulariser**. By re‑sampling past trajectories and updating the policy with them, agents avoid catastrophic forgetting while implicitly enforcing consistency across time scales—something that pure online learning misses. This dual‑memory architecture mirrors biological systems where hippocampal short‑term traces are gradually transferred to neocortex for durable knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
