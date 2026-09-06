---
qid: ing_8b1382dfd5__fp__local
question: Is your paper saying RL is useless? — Limit of RLVR
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 485
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:35-05:00'
sources: []
---

**Short answer:** No. The paper does *not* declare reinforcement learning (RL) dead; it simply pinpoints the exact conditions under which standard model‑free RL collapses.

---

### Why RL can fail

At its core, RL learns a policy by sampling trajectories and propagating value estimates back through time.  
The **fundamental problem** is that rewards are sparse or delayed, so the signal that drives learning must travel many steps backward. The variance of this *return* grows exponentially with horizon length \(H\).  

Mathematically, for an MDP with bounded per‑step reward \(|r_t|\le R_{\max}\), the variance of the return satisfies  
\[
\operatorname{Var}[G_0] \;\ge\; (R_{\max})^2\,\gamma^{2H},
\]
where \(\gamma<1\) is the discount factor. As \(H\to\infty\) or \(\gamma\to 1\), the variance explodes, making any stochastic gradient estimator essentially useless.

---

### Deeper principle: *information bottleneck*

RL’s learning signal can be viewed as an information channel from future rewards to current actions. When the horizon is long, this channel becomes extremely noisy; the mutual information \(I(\text{action}_t;\text{return})\) vanishes. The paper formalizes this limit via a tight lower bound on sample complexity that scales as \(\Omega(1/(1-\gamma)^2)\), showing that no algorithm can beat it.

---

### Non‑obvious insight

Most people think *more data* solves the variance problem. The counter‑intuition is that **variance cannot be reduced by data alone**; it is a fundamental property of the Markov chain’s mixing time. Only by *changing the representation*—e.g., learning a predictive model or a hierarchical policy—can we compress the horizon and recover usable gradients.

So, RL is not useless; it just needs structural assumptions (model‑based, hierarchical, or intrinsic motivation) to overcome its own variance barrier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
