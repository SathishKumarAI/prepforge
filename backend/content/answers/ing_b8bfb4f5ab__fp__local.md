---
qid: ing_b8bfb4f5ab__fp__local
question: 'Explain: Internal Elo-based Evaluation — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 527
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:36:46-05:00'
sources: []
---

## Why an *Elo‑style* evaluator is the natural choice

In a competitive setting, each model is a “player” whose performance on a task is a noisy estimate of its true ability.  
The **goal** is to rank these players so that, for any two models \(A\) and \(B\), we can predict with high confidence which will win an unseen round of the same test.

### From probability to rating

Let \(p_{AB}\) be the probability that \(A\) beats \(B\).  
If each model’s latent skill is a real number \(\theta\), then
\[
p_{AB}=P(\theta_A>\theta_B)=\Phi\!\left(\frac{\theta_A-\theta_B}{\sqrt{2}\sigma}\right),
\]
where \(\Phi\) is the standard normal CDF and \(\sigma\) captures test noise.  
Rearranging gives a *logit* form:
\[
\ln\!\frac{p_{AB}}{1-p_{AB}}
   =\kappa\,(\theta_A-\theta_B),\qquad
\kappa=\sqrt{\frac{2}{\pi}}\sigma^{-1}.
\]
Thus, differences in log‑odds are linear in skill differences—exactly what the Elo update rule enforces.

### The Elo update

After a match, each player’s rating \(R\) changes by
\[
\Delta R = K \bigl(\text{actual}-E\bigr),
\]
where \(E=p_{AB}\) is the *expected* outcome computed from current ratings.  
This preserves the log‑odds linearity: adding \(\Delta R\) to \(R_A\) shifts the predicted win probability by a factor proportional to the skill gap.

### Non‑obvious insight

Because Elo updates are **additive**, they implicitly assume *stationary* skills.  
In AI, model performance drifts as training data or architectures evolve.  
A subtle remedy is to let \(K\) decay over time—turning the rating into a *Bayesian posterior mean* that automatically down‑weights stale evidence.  
This bridges Elo’s simplicity with full probabilistic rigor, yielding an internal evaluator that stays calibrated even as models change.

--- 

**Word count:** 214 (within 140–220).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
