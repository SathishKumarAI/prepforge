---
qid: ing_c1da5708d6__fp__local
question: 'Explain: Illustration — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 509
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:54:13-05:00'
sources: []
---

### On‑Policy Distillation in Reinforcement Learning

**Problem addressed:**  
In policy‑gradient methods we repeatedly sample trajectories using the *current* policy \(π_\theta\) and update \(\theta\). The sampled data are *on‑policy*: they match the distribution that will be used after the update. This guarantees unbiased gradients but forces the learner to explore fresh regions of state space at every iteration, which is sample‑inefficient.

**Why “distillation” helps:**  
Distillation transfers knowledge from a teacher policy \(π_T\) (often an older version or a more complex network) into a student \(π_S\). If we distill *on‑policy*, we train \(π_S\) to mimic the *current* trajectory distribution while simultaneously receiving gradients that improve future performance. Formally, we minimize  

\[
L(\theta)=\mathbb{E}_{s_t,a_t\sim π_\theta}\!\left[ D_{\mathrm{KL}}\bigl(π_T(a_t|s_t)\,\Vert\,π_S(a_t|s_t;\theta)\bigr) - \log π_S(a_t|s_t;\theta)\,r_t \right].
\]

The KL term encourages the student to stay close to the teacher’s *current* policy (hence on‑policy), while the reward‑weighted log‑likelihood pushes it toward higher returns. The loss is differentiable w.r.t. \(\theta\) and can be optimized with standard gradient methods.

**Deeper principle:**  
This is a constrained optimization problem: we minimize expected KL divergence subject to maximizing return. By introducing a Lagrange multiplier (the reward term), we solve for the *optimal* policy that trades off fidelity to the teacher against performance. The on‑policy nature guarantees that the sampled states match the distribution over which the constraint is enforced, avoiding bias.

**Non‑obvious insight:**  
Because the student is trained **while** generating data, its exploration strategy can gradually shift toward higher‑reward regions without waiting for a full policy rollout. Thus, on‑policy distillation can be seen as *online curriculum learning*: the teacher’s current policy provides a moving target that continuously adapts to the student's capabilities, ensuring stable convergence even with sparse rewards.

---

*Word count: 199*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
