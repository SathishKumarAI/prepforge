---
qid: ing_6395e40a8b__fp__local
question: 'Explain: Deriving the Simplest Policy Gradient ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 620
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:46-05:00'
sources: []
---

### Deriving the Simplest Policy Gradient – Part 3: Intro to Policy Optimization

The core problem is **maximising expected return** \(J(\theta)=\mathbb{E}_{\tau\sim p_\theta}[\sum_t r(s_t,a_t)]\) over policy parameters \(\theta\).  
Because the environment dynamics are unknown, we cannot compute gradients analytically; instead we estimate them from sampled trajectories.  

1. **Score‑function trick**:  
   \[
   \nabla_\theta J = \mathbb{E}_{\tau}\!\left[\sum_t r_t\,\nabla_\theta \log \pi_\theta(a_t|s_t)\right].
   \]
   This follows from differentiating under the expectation and recognising that \(\nabla_\theta p_\theta(\tau)=p_\theta(\tau)\nabla_\theta\log p_\theta(\tau)\).  

2. **Baseline subtraction**:  
   Adding a constant \(b(s_t)\) inside the sum does not bias the estimator but can reduce variance:
   \[
   \nabla_\theta J = \mathbb{E}\!\left[\sum_t (r_t-b(s_t))\,\nabla_\theta \log \pi_\theta(a_t|s_t)\right].
   \]
   The optimal baseline is the state‑value \(V^\pi(s_t)\), yielding the **advantage** \(A^\pi(s_t,a_t)=Q^\pi(s_t,a_t)-V^\pi(s_t)\).

3. **Monte‑Carlo estimator**:  
   Replace expectations with sample averages over \(M\) trajectories:
   \[
   \hat\nabla_\theta J = \frac{1}{M}\sum_{i=1}^M \sum_{t=0}^{T_i-1}
   (R_t^{(i)}-b(s_t^{(i)}))\,\nabla_\theta \log \pi_\theta(a_t^{(i)}|s_t^{(i)}).
   \]
   Here \(R_t^{(i)}=\sum_{k=t}^{T_i-1} r_k^{(i)}\) is the return from time \(t\).

**Non‑obvious insight:**  
The policy gradient estimator *does not* require knowledge of transition dynamics; it only needs samples of state–action pairs and rewards. This is why policy optimisation can be applied to highly stochastic or unknown environments—contrast this with value‑based methods, which rely on the Bellman equation that implicitly assumes known transition probabilities.

This derivation shows how **optimization (gradient ascent)**, **information theory (score function)**, and **probability (Monte Carlo estimation)** coalesce into a practical algorithm: REINFORCE.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
