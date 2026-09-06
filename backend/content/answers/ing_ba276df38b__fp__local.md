---
qid: ing_ba276df38b__fp__local
question: 'Explain: Reference — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 526
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:29-05:00'
sources: []
---

### From the Problem to a Predictive Model  

When a user opens **Zomato/Swiggy**, the app must decide which restaurants and dishes to display so that the user’s next order arrives quickly, is tasty, and maximizes revenue.  
This is an *online recommendation* problem: for each request we observe a partial context \(x\) (location, time, past orders, device type) and must output a ranked list of candidates \(\{r_i\}\). The objective is to maximize expected utility  

\[
U = \sum_{i} P_{\text{order}|x,r_i}\;v(r_i)\;-\;\lambda\,t_{\text{delivery}}(x,r_i)
\]

where \(P_{\text{order}}\) is the probability a user orders item \(r_i\), \(v(r_i)\) its value to the platform, and \(t_{\text{delivery}}\) the delivery time.  

#### Why the Formulation Must Work  
1. **Probabilistic Decision‑Making**: We cannot observe future choices; we need a distribution over possible outcomes.  
2. **Utility Trade‑off**: Revenue alone ignores user satisfaction (long waits). The linear penalty \(\lambda t\) enforces *optimal transport* of orders—shorter routes reduce churn, just as in vehicle routing problems.  
3. **Feature‑Driven Generalisation**: By learning \(P_{\text{order}}\) from data, the model generalises to unseen restaurants or time slots, mirroring the bias–variance trade‑off in statistical learning.

#### Deeper Principle: *Bandit‑Inspired Bayesian Optimization*  
The system can be seen as a contextual bandit where each arm (restaurant) has a reward distribution conditioned on context. Bayesian optimisation over this space yields an exploration–exploitation balance that maximises cumulative utility—exactly what the platform wants in real time.

#### Non‑Obvious Insight  
Most people treat recommendation as a ranking problem, but the *delivery‑time penalty* can be embedded directly into the learning objective rather than post‑processing. By training with a joint loss \( \mathcal{L} = -\log P_{\text{order}} + \lambda\,t_{\text{delivery}}\), the model learns to internalise logistics constraints, leading to *self‑optimising* recommendations that adapt instantly as traffic patterns shift—something pure ranking models miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
