---
qid: ing_f27ed9e17a__fp__local
question: 'Explain: Model Routing and Portfolio Management — Hiring an AI Platform
  Engineering Leader: A 2026 Job Spec | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 636
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:24-05:00'
sources: []
---

**Model routing** is the *decision problem* of assigning a request to one of many deployed models (or model versions) so that overall service quality and cost are optimized.  
In practice, every inference call carries two costs:

| Cost | Origin |
|------|--------|
| **Latency** | Inference time + network hop |
| **Compute budget** | GPU/TPU cycles or cloud credits |

The *objective* is to minimize a weighted sum of these costs while respecting SLA constraints.  
Mathematically, for request \(r\) we choose model \(m\in \mathcal{M}\):

\[
\min_{m} \; w_{\text{lat}}\,L(r,m)+w_{\text{comp}}\,C(m)
\]

subject to \(S(r,m)\geq S_{\min}\).

This is a *constrained combinatorial optimisation* that can be solved by dynamic programming or online learning (e.g., bandit algorithms). The deeper principle: **the routing policy is an instance of the multi‑armed bandit with context**, where each arm is a model and the context encodes request features.

**Portfolio management** extends this to *model evolution*. A platform must:

1. Track performance drift over time (concept shift).
2. Decide when to retire, roll out, or version‑upgrade models.
3. Allocate compute budget across the portfolio.

This becomes a **Markov Decision Process (MDP)**: state = current portfolio health; action = upgrade/rollback; reward = long‑term cost savings. Solving it yields an *optimal lifecycle policy* that balances exploration of new architectures against exploitation of proven models.

### Non‑obvious insight  
Most teams treat routing and portfolio as separate layers, but **they share the same uncertainty**: the true quality of a model on unseen data is unknown until it’s used. By coupling their policies—e.g., letting routing decisions also inform portfolio updates—the platform can *learn faster* and reduce both latency spikes and over‑provisioning.

---

## 2026 Job Spec: AI Platform Engineering Leader

| Skill | Why it matters |
|-------|----------------|
| **Distributed ML Ops** | Deploy, monitor, and scale hundreds of models across edge/central clusters. |
| **Probabilistic Decision Systems** | Build routing/portfolio policies that treat model quality as a latent variable. |
| **Reinforcement Learning & Bandits** | Implement online learning for real‑time routing decisions. |
| **Observability & Telemetry** | Design metrics (latency, accuracy drift, compute cost) to feed the MDP solver. |
| **Cloud‑Native Architecture** | Leverage serverless/Knative + GPU pods for elastic scaling. |

The ideal candidate will architect a *policy‑driven* platform where routing and portfolio decisions are co‑optimized, ensuring that every inference not only meets SLA but also contributes to long‑term model health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
