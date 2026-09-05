---
qid: ing_237554d782__fp__local
question: 'Explain: Before You Read — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 671
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:49-05:00'
sources: []
---

## The limit of a reinforcement‑learning value function

### What problem does it solve?

In an episodic Markov decision process (MDP) we want a **policy** that maximises the expected cumulative reward  
\(V^{\pi}(s)=\mathbb{E}\!\left[\sum_{t=0}^{T} \gamma^t r_t\,|\,s_0=s,\pi\right]\).  
Reinforcement learning (RL) builds this value function from samples, but the learner only sees a finite trajectory.  
The *limit* of the iteratively updated value estimate is the object that guarantees optimality: it tells us that after enough data the algorithm has “settled” on the true best‑action values.

### Why must it work this way?

RL algorithms (e.g., Value Iteration, Q‑learning) update estimates by applying the **Bellman backup**  
\(T[V](s)=\max_a \bigl(r(s,a)+\gamma\,\mathbb{E}_{s'}[V(s')]\bigr)\).  
Mathematically \(T\) is a contraction mapping on the space of bounded functions (Banach fixed‑point theorem).  
Hence, repeatedly applying \(T\) drives any initial estimate to a unique fixed point \(V^*\), the optimal value function.  

The *limit* \(\lim_{k\to\infty} V_k = V^*\) is therefore not an arbitrary choice; it is forced by the geometry of the MDP’s Bellman operator and the discount factor \(\gamma<1\).  In stochastic settings, sample‑based approximations converge to this same fixed point almost surely under mild exploration conditions.

### A non‑obvious insight

Most practitioners focus on “policy evaluation” or “value maximisation”.  
What is often missed is that **the limit itself is a *projection* onto the subspace of functions that satisfy Bellman optimality**.  
In other words, \(V^*\) is the closest (in sup‑norm) function to any arbitrary start that lies in the fixed‑point manifold defined by the MDP’s transition dynamics and reward structure.  
Thus, convergence is a *geometric alignment* problem: RL isn’t merely learning numbers; it is aligning its hypothesis with an invariant subspace dictated by the environment’s geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
