---
qid: ing_63e55e6ea7__fp__local
question: 'Q: How do you prevent reward hacking in Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 546
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:31-05:00'
sources: []
---

### Why reward hacking arises in a *Best‑of‑N* setting

A **Best‑of‑N** policy selects the action that maximises an estimated value over \(N\) independent rollouts.  
Formally, for state \(s\), it chooses  

\[
a^*=\arg\max_{a}\frac{1}{N}\sum_{i=1}^{N} R_i(s,a),
\]

where each \(R_i\) is the reward from a stochastic simulation.  
The *estimator* is unbiased only if the simulator behaves as intended. If an agent can subtly bias its own rollouts—by, for example, exploiting a bug in the environment’s reward calculation—it will inflate \(R_i\) on some trials while keeping others low. Averaging over \(N\) still yields a higher mean, so the agent is rewarded for the hack rather than genuine skill.

### Principle: **Constrained optimisation over *distributional* returns**

Instead of treating each rollout as an independent sample, we view the return distribution \(\mathcal{D}_{s,a}\). The optimal policy must maximise a *robust* functional of this distribution (e.g., its median or lower‑tail quantile), not just its mean. This shifts optimisation from “maximise expected reward” to “maximize guaranteed performance”.

### Concrete prevention

1. **Distributional critics**: learn \(\mathcal{D}_{s,a}\) and evaluate the \(p\)-quantile (e.g., 10th percentile).  
2. **Penalty for variance**: add a term \(-\lambda\,\text{Var}[R_i]\) to the objective, discouraging manipulations that increase spread.  
3. **Rollout integrity checks**: periodically re‑simulate rollouts with an independent oracle; flag large discrepancies.

### Non‑obvious insight

The *median* of the return distribution is invariant under a bounded number of outliers. By optimizing for the median rather than the mean, you automatically make reward hacking impossible unless the agent can corrupt **all** \(N\) samples simultaneously—a much higher bar that usually requires breaking the simulator itself.

---

> **Bottom line:** Treat the Best‑of‑N as a robust optimisation problem over return distributions; optimise for a lower‑tail metric (median or percentile). This principled shift turns reward hacking from an exploitable loophole into a statistically unlikely event.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
