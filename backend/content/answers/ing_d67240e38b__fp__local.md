---
qid: ing_d67240e38b__fp__local
question: 'Explain: Learning from Experience. — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 473
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:11-05:00'
sources: []
---

**Learning from Experience – \(Q^{*}\): exploring agent procedural memory**

In reinforcement learning the *environment* is a Markov decision process (MDP).  
An agent’s **procedural memory** is the function that maps states to actions; it must approximate the optimal action‑value function \(Q^{*}(s,a)\) without prior knowledge of transition dynamics.  

The fundamental problem is: *how can an agent infer \(Q^{*}\) solely from sampled trajectories \((s_t,a_t,r_{t+1},s_{t+1})\)?*  
Because the MDP satisfies the Bellman optimality equation,

\[
Q^{*}(s,a)=\mathbb{E}[\,r_{t+1}+\gamma \max_{a'} Q^{*}(s_{t+1},a')\,|\,s_t=s, a_t=a\,],
\]

the agent can iteratively improve any estimate \(Q(s,a)\) by **bootstrapping**—replacing the unknown future return with the best current guess.  
This yields the *temporal‑difference (TD)* update

\[
Q_{t+1}(s_t,a_t)=Q_t(s_t,a_t)+\alpha \bigl[r_{t+1}+\gamma \max_a Q_t(s_{t+1},a)-Q_t(s_t,a_t)\bigr].
\]

Mathematically, the update is a stochastic gradient step on the mean‑squared Bellman error; geometrically it projects the current value estimate onto the hyperplane defined by the observed sample.  
The convergence of this projection process relies on the contraction property of the Bellman operator (a deep principle from fixed‑point theory).  

**Non‑obvious insight:** *Exploration is not merely “trying new actions”; it is a deliberate injection of stochasticity that guarantees the trajectory distribution converges to the stationary distribution of the optimal policy, ensuring every state‑action pair receives infinitely many updates. Without exploration, the projected subspace can be improperly spanned, and the agent may converge to a local but suboptimal solution.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
