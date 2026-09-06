---
qid: ing_b2ea414126__fp__local
question: 'Explain: Compensation Details Beyond Base and RSUs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 383
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:24:22-05:00'
sources: []
---

**Compensation Beyond Base & RSUs: A principled view**

At its core, a company’s total reward package is an *optimization problem* over two axes: **risk‑adjusted return to the employee** and **information asymmetry between employer and worker**.  
- **Base salary** fixes a safe payoff that compensates for opportunity cost; it is a *convex* function of effort, bounded below by market rates.  
- **RSUs (restricted stock units)** introduce a *non‑linear*, *performance‑linked* component: their value depends on firm equity growth, which is stochastic and correlated with the employee’s contribution.  

Beyond these, firms add:
1. **Cash bonuses** – linear in observable metrics (e.g., model accuracy, deployment speed). They directly reduce moral hazard by aligning short‑term effort with company goals.
2. **Stock options** – give employees upside potential beyond current valuation, exploiting the *time‑value* of equity and encouraging long‑term commitment.
3. **Benefits & perks** – lower personal cost (healthcare, remote work allowances) and signal a low‑risk environment, indirectly boosting productivity.

The **non‑obvious insight**: *options are not merely “extra money”; they encode a Bayesian update on the employee’s future value.* A well‑priced option set acts as a dynamic contract that adjusts the marginal incentive for effort as the posterior belief about firm growth shifts. This subtle coupling between risk‑adjusted equity and information asymmetry is why many high‑tech ML teams structure compensation with a blend of cash, RSUs, and options rather than any single component alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
