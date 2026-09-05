---
qid: ing_148cee04e0__fp__local
question: When does multi-agent beat single-agent, and when does it make things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 457
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:57-05:00'
sources: []
---

**When a swarm of AIs outperforms one**

The core problem is *combinatorial search* over an enormous policy space.  
A single agent must encode all possible strategies in one network; the loss surface
becomes highly non‑convex, and exploration collapses into local minima.  
If we split the task among \(k\) agents that specialize on disjoint sub‑tasks or
different points of a latent strategy manifold, each agent optimizes a *lower‑dimensional*
objective with fewer spurious saddle points.  Formally, if the joint policy space
factorises as \(\Theta_1\times\dots\times\Theta_k\) and the reward decomposes into
\(R=\sum_i R_i\), then the gradient of each sub‑policy is orthogonal to the others,
reducing variance by a factor \(k\).  In high‑dimensional continuous control this
variance reduction translates to faster convergence and better generalisation.

**When cooperation hurts**

Cooperation introduces *coordination overhead*.  The joint policy must now learn
a coupling term that aligns independent updates; this effectively enlarges the loss
surface again.  Moreover, if the agents share a common critic (as in MADDPG),
the critic’s target becomes non‑stationary because each agent changes its own
policy, leading to “drift” and divergence—an instance of the *non‑Markovian* problem.
Finally, when tasks are inherently competitive or resource‑limited, the agents
may learn to subvert one another, yielding an emergent Nash equilibrium that is
worse than a single well‑tuned agent.

**Non‑obvious insight**

The decisive factor is *policy manifold dimensionality*: if the optimal policy lies on
a low‑dimensional manifold that can be spanned by several coordinated vectors,
splitting into agents reduces optimisation complexity; otherwise, it merely adds
coordination noise. This geometric perspective explains why multi‑agent systems excel
in sparse‑reward navigation but fail in tightly coupled manipulation tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
