---
qid: ing_d8625cb007__fp__local
question: 'Explain: Memory (The Experience) — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 422
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:27-05:00'
sources: []
---

**Memory as a *belief‑state updater* for agents**

When an autonomous system acts, it must predict how its actions will change the world and what observations it will receive next. The *fundamental problem* is that the true state of the environment is usually hidden or partially observable. To decide optimally, the agent needs to maintain a **belief** over all possible states—a probability distribution conditioned on past actions and observations.

This belief can be updated recursively:

\[
b_{t+1}(s') = \eta\, O(o_{t+1}\mid s') \!\sum_{s} P(s'\mid s,a_t)\, b_t(s),
\]

where \(P\) is the transition model, \(O\) the observation likelihood, and \(\eta\) a normalising constant. The update rule follows directly from Bayes’ theorem; it *optimises* information gain by weighting each hypothesised state according to how likely it explains both the dynamics and the new data.

**Why this works**  
1. **Causality:** Actions influence future states, so we must propagate uncertainty through \(P\).  
2. **Observability:** Observations prune inconsistent hypotheses via \(O\).  
3. **Efficiency:** Representing the belief as a distribution (e.g., particle filter, Kalman) lets us approximate high‑dimensional histories with low‑dimensional summaries.

**Non‑obvious insight**  
Memory is *not* merely a replay buffer; it is an *optimisation problem* that trades off *model fidelity* against *computational tractability*. By constraining the belief representation (e.g., to Gaussian families), we implicitly assume that the underlying dynamics are *locally linear*, which often yields near‑optimal performance even in highly nonlinear settings. This hidden assumption explains why many practical agents perform well despite severe memory compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
