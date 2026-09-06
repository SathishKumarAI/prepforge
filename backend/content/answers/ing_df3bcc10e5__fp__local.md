---
qid: ing_df3bcc10e5__fp__local
question: 'Explain: Time Management — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 388
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:25-05:00'
sources: []
---

**Time‑Management Whiteboard Exercises – a principled view**

The core problem is *resource allocation*: we have a finite horizon \(T\) and a set of tasks \(\{x_i\}\), each with a benefit function \(b_i(t)\) that decays (or grows) over time. The objective is to maximise total benefit  
\[
\max_{\tau_i} \sum_i b_i(\tau_i) \quad \text{s.t.}\;\sum_i\tau_i=T,\;\tau_i\ge0 .
\]
A whiteboard exercise forces the solver to **linearise** this non‑convex problem by drawing a *time‑budget line* and iteratively shifting time between tasks, thereby visualising marginal gains \(b'_i(\tau_i)\). This mirrors the Lagrange multiplier condition \(b'_i(\tau_i)=\lambda\) for optimality: when all tasks’ marginal benefits equal the shadow price \(\lambda\), no further improvement is possible.

Why this works: it turns abstract calculus into concrete geometry. By sketching *efficiency frontiers* (benefit vs time) we see that the optimal allocation lies on the upper envelope, not inside it. A non‑obvious insight people miss is that **inter-task synergy** can be captured by adding a *coupling term* \(c_{ij}\tau_i\tau_j\); the whiteboard lets you spot such cross‑terms early and decide whether to batch tasks.

Thus, time‑management whiteboard exercises are not just brainstorming—they are a visual optimisation protocol that reveals hidden constraints, marginal trade‑offs, and synergy potentials in a single glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
