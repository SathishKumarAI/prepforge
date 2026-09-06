---
qid: ing_95016462ee__fp__local
question: 'Explain: Research and application — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 511
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:22:02-05:00'
sources: []
---

**Spaced Repetition as an Active‑Learning Scheduler**

The core problem is *memory retention*: given a set of items \(x_i\), how to schedule review times \(\{t_{i,k}\}\) so that the probability \(P_i(t)\) of recalling item \(i\) at time \(t\) stays above a target while minimizing total study effort?  
Assume each recall attempt yields binary feedback (correct/incorrect). A simple dynamical model is the *forgetting curve*  
\[
P_i(t)=e^{-\lambda_i t},
\]
where \(\lambda_i\) is an item‑specific decay rate. After a successful recall, we reset \(t=0\); after failure we set a new decay rate \(\lambda'_i > \lambda_i\). The *optimal* inter‑visit interval \(\Delta t^*\) satisfies
\[
P_i(\Delta t^*) = \theta,
\]
with \(\theta\) the desired recall probability. Solving gives  
\[
\Delta t^* = -\frac{\ln \theta}{\lambda_i},
\]
which is precisely what spaced‑repetition algorithms (e.g., SM‑2, Anki) implement: schedule next review when the expected forgetting curve reaches the threshold.

**Why it must work that way**

1. **Information Theory:** The entropy of a memory trace decays exponentially; to keep mutual information above \(\theta\), we need periodic reinforcement at intervals proportional to \(1/\lambda_i\).  
2. **Optimization:** Minimizing total effort subject to recall constraints leads to the same exponential‑threshold rule via Lagrange multipliers.  
3. **Geometry of State Space:** The memory state moves along a one‑dimensional manifold; the scheduler projects onto this manifold, ensuring trajectories hit the “boundary” \(\theta\) exactly.

**Non‑obvious insight**

Most users treat spaced repetition as a heuristic. In fact, it is an *online Bayesian estimator* of each item’s decay rate: every recall updates a posterior over \(\lambda_i\), and the next interval is the posterior predictive mean that keeps \(P_i(t)\) at \(\theta\). Thus, spacing is not merely “spacing”; it is continual inference about how fast you forget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
