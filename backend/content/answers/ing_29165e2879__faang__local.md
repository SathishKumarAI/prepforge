---
qid: ing_29165e2879__faang__local
question: Explain GRPO. Why did DeepSeek drop the value network that PPO uses?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 653
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:19:13-05:00'
sources: []
---

**Clarify**  
You’re asking about *GRPO* (short for **Gradient‑Regularized Policy Optimization**) and why the recent DeepSeek paper chose to drop the value‑function baseline that is central to Proximal Policy Optimization (PPO). I’ll assume you want a concise, interview‑style explanation of the algorithmic trade‑offs.

**Approach**  
1. Define GRPO and its motivation.  
2. Contrast it with PPO’s actor–critic framework.  
3. Explain DeepSeek’s design choice to omit the value network.  
4. Summarize implications on sample efficiency, variance, and stability.

**Depth**  

| Component | GRPO (no value net) | PPO (with value net) |
|-----------|---------------------|----------------------|
| Objective | Pure policy gradient with a KL penalty: `L = E[π(a|s) * r] – λ D_KL(π‖π_old)` | Actor‑critic surrogate: `L = min(r_t(θ)A_t, clip(...))` where `A_t = R_t – V(s_t)` |
| Variance control | Relies on entropy regularization and KL clipping; higher variance but simpler updates. | Uses value function as a baseline to reduce gradient variance; lower sample complexity. |
| Implementation | One neural net (policy); fewer hyper‑parameters. | Two nets (actor + critic) plus extra target network maintenance. |

**Why DeepSeek dropped the value net**

1. **Simplicity & Parallelism** – Training a single policy network allows tighter GPU utilization and eliminates the need for bootstrapped targets or separate learning rates.
2. **Stability on Large‑Scale Tasks** – The value function can become a bottleneck when the state space is huge; errors in `V(s)` propagate to all advantage estimates, leading to divergence. Removing it sidesteps this issue.
3. **Empirical Findings** – Experiments showed that with a well‑tuned KL penalty and entropy bonus, the variance remained manageable on their benchmarks, and performance matched or exceeded PPO while cutting training time by ~30 %.

**Edge Cases**

- *Sparse rewards*: Without a baseline, gradients can explode; would need extra variance reduction (e.g., GAE).  
- *Highly stochastic environments*: The policy alone may struggle to learn stable behavior.  
- *Very deep networks*: KL clipping might be insufficient; hybrid approaches could help.

**Optimize & Communicate**

If I were presenting this in an interview, I’d emphasize that GRPO trades off a modest increase in variance for a cleaner training pipeline and stronger scalability—exactly the kind of engineering trade‑off FAANG teams value. I would also note that future work could re‑introduce a lightweight critic only when reward signals are sparse or environment dynamics change abruptly.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
