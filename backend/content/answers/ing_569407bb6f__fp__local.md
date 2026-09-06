---
qid: ing_569407bb6f__fp__local
question: 'Explain: Paper flash cards — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 416
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:04-05:00'
sources: []
---

**Spaced‑repetition flashcards in machine learning**

The *learning problem* is: a learner must acquire and retain a large set of facts (e.g., vocabulary, equations) over time with minimal rehearsal effort.  
Mathematically we model each fact \(i\) as having an internal mastery state \(m_i(t)\in[0,1]\). When reviewed at time \(t\), the state updates via
\[
m_i(t^+)=m_i(t)+ (1-m_i(t))\,\Delta,
\]
where \(\Delta\) is a fixed learning increment. Forgetting follows exponential decay:
\[
m_i(t+\tau)=m_i(t)\,e^{-\lambda\tau},
\]
with rate \(\lambda>0\). The *optimal inter‑review interval* \(T^*\) balances these dynamics so that after each review the mastery is just below a threshold \(p_{\text{crit}}\), guaranteeing high recall probability. Solving
\[
m_i(t+T^*)e^{-\lambda T^*}=p_{\text{crit}}
\]
yields \(T^*= \frac{1}{\lambda}\ln\!\left(\frac{1-m_i(t)}{p_{\text{crit}}-m_i(t)}\right)\), a function of current mastery. This derivation shows why *spacing* must increase as mastery grows: early reviews are short, later ones long.

**Deep insight:** The algorithm is essentially an online *Bayesian filter* for latent skill states; each review updates the posterior over \(m_i\). Most implementations treat spacing heuristically (e.g., SM‑2), but a principled Bayesian formulation predicts that optimal intervals depend on individual forgetting rates \(\lambda_i\), explaining why adaptive systems outperform fixed schedules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
