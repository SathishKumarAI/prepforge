---
qid: ing_cd4fd982ec__fp__local
question: 'Explain: Agent Memory and State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 546
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:05-05:00'
sources: []
---

### Why an AI needs *memory* and a *state*

An intelligent agent interacts with an environment that is generally **non‑Markovian**: the future depends on past events, not only on the current observation.  
Mathematically, we want to solve

\[
\pi^*=\arg\max_{\pi}\mathbb{E}_{\tau\sim \pi}\Big[\sum_{t} r_t\Big]
\]

where \(r_t\) depends on a history \(h_t=(o_1,a_1,\dots,o_t)\).  
If we restrict the policy to depend only on the current observation \(o_t\), we implicitly assume the **Markov property**. That assumption is false for almost every real‑world task (e.g., navigation, dialogue), so the optimal policy cannot be expressed without a *state* that aggregates relevant past information.

#### Deriving the state

Let \(\phi(h_t)\) be an embedding of history into a low‑dimensional vector. The Bellman equation becomes

\[
V^\pi(\phi(h_t)) = r_t + \gamma\,\mathbb{E}_{o_{t+1}}\big[V^\pi(\phi(h_{t+1}))\big]
\]

where \(h_{t+1}=h_t\cup(o_{t+1},a_t)\). The function \(\phi\) is the **memory**: it compresses history while preserving all information relevant to future reward. This compression is an instance of *information bottleneck*—we keep only what matters for maximizing expected return.

#### Non‑obvious insight

Many practitioners treat memory as a “black box” (e.g., LSTMs). The deeper point is that **memory should be learned jointly with the policy**, not pre‑specified. Because the optimal \(\phi\) depends on the reward structure, a fixed recurrent architecture can *under‑compress* or *over‑compress*, leading to suboptimal exploration or catastrophic forgetting. Training the memory end‑to‑end aligns its geometry with the value landscape, yielding sharper gradients and faster convergence. This explains why techniques like *recurrent policy gradients* often outperform hand‑crafted feature windows even on simple tasks.

In short: memory is a learned state representation that transforms non‑Markovian histories into Markovian states, grounding optimal control in the underlying information geometry of the task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
