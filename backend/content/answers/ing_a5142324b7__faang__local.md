---
qid: ing_a5142324b7__faang__local
question: 'Explain: Implementing Reward-to-Go Policy Gradient ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:55-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how a *reward‑to‑go* (RTG) estimator is used in policy‑gradient RL. Confirm the setting: an episodic task, a stochastic policy πθ(a|s), and that we want to reduce variance of the gradient estimate while keeping it unbiased.

**Approach**  
1. Define the return \(R_t = \sum_{k=t}^{T} r_k\).  
2. Replace the global return in REINFORCE by the RTG: use \(R_t\) as the advantage estimator.  
3. Compute the gradient \(\nabla_\theta J = \mathbb{E}\big[\sum_t R_t\,\nabla_\theta\log πθ(a_t|s_t)\big]\).  
4. Optionally center or normalize \(R_t\) (baseline subtraction, V‑function estimate).

**Depth**  
- *Variance reduction*: RTG re‑weights each timestep by future rewards only, so early actions are weighted less if they have little influence on later returns.  
- *Unbiasedness*: because \(E[R_t|s_t] = Q(s_t,a_t)\), the expectation of the estimator equals the true policy gradient.  
- *Implementation*: during a trajectory, accumulate rewards backwards to compute each \(R_t\). Complexity is O(T) per episode; memory linear in T.

**Edge Cases**  
- High‑variance environments where rewards are sparse → RTG still unbiased but may need baselines.  
- Non‑episodic tasks: use discount factor γ and truncate at a horizon.  
- Deterministic policies: log‑derivative trick fails, so RTG only applies to stochastic π.

**Optimize & Communicate**  
Use a learned value baseline \(V(s_t)\) to form the advantage \(A_t = R_t - V(s_t)\), which further reduces variance without biasing. Explain that this is essentially the *actor‑critic* method with a critic providing RTG‑based advantages. Conclude by noting that RTG is a simple, general variance‑reduction trick widely used in modern policy‑gradient libraries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
