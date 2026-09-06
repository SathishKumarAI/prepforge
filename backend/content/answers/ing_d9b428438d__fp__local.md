---
qid: ing_d9b428438d__fp__local
question: 'Explain: What We Learned Building Cloud Agents — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 474
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:41-05:00'
sources: []
---

**What we learned building cloud agents**

The core problem the authors tackle is *autonomous decision‑making under uncertainty* in a highly dynamic environment (the cloud).  Their agent must:  

1. **Sense** current resource utilisation, user demand, and cost signals.  
2. **Plan** an action sequence that balances conflicting objectives—minimising latency, maximising throughput, and minimising spend.  
3. **Act** by provisioning or de‑provisioning VMs, containers, or services in real time.

The solution is a hierarchical reinforcement learning (RL) architecture.  At the lowest level, an RL policy receives a *state vector* \(s_t\) comprising metrics and cost data, outputs an action \(a_t\) (e.g., “scale up by two instances”), and receives a reward \(r_t = -(\lambda_{\text{latency}} + \beta_{\text{cost}})\).  The policy is trained to maximise expected discounted return \(G_t=\sum_{k=0}^\infty \gamma^k r_{t+k}\).

Why must it work this way?  
- **Temporal credit assignment**: Cloud dynamics unfold over minutes; a single action can influence future states far ahead.  The discount factor \(\gamma\) captures the trade‑off between short‑term and long‑term gains.  
- **Non‑stationarity**: Demand patterns shift, so the policy must continually update—hence online learning with replay buffers that sample from recent trajectories.  
- **Safety constraints**: By augmenting the reward with penalty terms for violating SLA thresholds, the agent learns to stay within operational envelopes.

A subtle insight often missed is *state abstraction through learned embeddings*.  Instead of hand‑crafting features (CPU%, memory%), the authors train an autoencoder jointly with RL.  This forces the policy to operate on a compressed manifold that preserves only the dynamics relevant to reward, dramatically reducing sample complexity and enabling transfer between data centres.

In short, building cloud agents boils down to framing resource orchestration as an online optimisation problem over stochastic trajectories, solved by end‑to‑end learned policies that respect safety while exploiting temporal structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
