---
qid: ing_00dec92513__fp__local
question: 'Explain: Design the safety architecture for a learned whole-body policy
  operating near people.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 467
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:12-05:00'
sources: []
---

**Why it matters**

A whole‑body policy learns to move an entire robot arm, torso and feet in continuous space. Near humans, any small prediction error can lead to collision or injury. The problem is *real‑time safety*: we must guarantee that the robot’s trajectory never violates a hard constraint (e.g., distance to a person < 0.3 m) while still allowing useful motion.

**Fundamental design principle**

Treat safety as an *optimization constraint* on top of the learned policy. The policy outputs a nominal acceleration \(a_{\text{nom}}\). We solve a tiny quadratic program (QP) each control cycle:

\[
\min_{a}\ \|a - a_{\text{nom}}\|^2
\]
subject to
\[
A\,q + B\,v + C \le 0,
\]

where \(q,v\) are current state, and the inequality encodes collision avoidance (using signed distance fields), joint limits, and dynamic feasibility. The QP is *convex* and has a closed‑form solution in milliseconds, guaranteeing that the executed command satisfies all hard constraints.

**Why it works**

- **Separation of concerns**: learning handles high‑level task planning; optimization guarantees safety regardless of policy errors.
- **Probabilistic robustness**: by adding a margin \(\epsilon\) to distance constraints we hedge against sensor noise and model uncertainty.
- **Geometric intuition**: the feasible set is an intersection of half‑spaces defined by contact normals; projecting onto this polytope removes unsafe components while staying as close as possible to the learned intent.

**Non‑obvious insight**

The QP’s *slack variables* can be interpreted as a *real‑time safety margin*: if the nominal policy would violate constraints, slack increases smoothly, allowing the robot to “slow down” rather than abruptly stop. This keeps dynamics continuous and avoids jerky motions that could themselves be unsafe or uncomfortable for humans.

In short, a learned whole‑body controller combined with an online convex safety filter yields provably safe operation near people while preserving high performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
