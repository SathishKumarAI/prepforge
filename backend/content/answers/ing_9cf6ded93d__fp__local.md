---
qid: ing_9cf6ded93d__fp__local
question: 'Explain: ML System Design & Modeling — Data Science & AI Interview Prep
  | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 366
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:03-05:00'
sources: []
---

**ML system design & modeling for an interview** is not a checklist of “pick the right algorithm.”  
It’s a *causal chain* from problem → data → model → deployment, each link constrained by the same optimisation principle: **minimise expected loss while respecting resource limits and safety constraints**.

1. **Problem framing** – define the decision‑theoretic objective (e.g., revenue per user) and the *information structure*: what variables can be observed, at what latency, and with what uncertainty.  
2. **Data pipeline** – treat data as a stochastic process; you must estimate its distribution accurately enough that downstream loss estimates are unbiased. Hence ask about sampling bias, drift, feature‑engineering cost, and how to maintain *data lineage*.  
3. **Model selection & regularisation** – the bias–variance trade‑off is just a form of *regularised risk minimisation*; choose capacity such that the model’s posterior variance (over data) does not exceed the cost of overfitting.  
4. **Evaluation strategy** – cross‑validation must mimic deployment distribution; explain why time‑series split or causal inference tests are necessary.  
5. **Deployment & monitoring** – treat the system as a feedback loop; concept drift turns into a *control problem* where you continuously re‑optimise under resource constraints.

**Non‑obvious insight:** interviewers often probe whether you can *quantify* how much additional data or compute will reduce expected loss—i.e., you must discuss *learning curves* and the diminishing returns of scaling. Demonstrating that you can reason about this trade‑off shows mastery over both theory and practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
