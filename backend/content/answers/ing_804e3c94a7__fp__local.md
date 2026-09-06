---
qid: ing_804e3c94a7__fp__local
question: 'Explain: How would you evaluate an autonomous software engineering agent?
  Explain why SWE-bench pass rates mislead.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 478
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:17-05:00'
sources: []
---

### Evaluating an Autonomous Software Engineering Agent  
The *fundamental problem* is that the agent must **solve open‑ended design tasks** while satisfying constraints (correctness, performance, maintainability). To assess it we need a metric that reflects **expected utility** over the space of real projects, not just isolated test cases.  

1. **Task distribution modeling** – treat each engineering problem as a point in a high‑dimensional feature space (language, domain, size).  
2. **Utility function** – define *U* = α·correctness + β·efficiency + γ·maintainability, where the weights come from stakeholder priorities.  
3. **Expected utility** – integrate U over the task distribution: \(E[U] = \int U(x) p(x)\,dx\).  
4. **Sample‑based estimation** – generate a diverse corpus via stochastic program synthesis or crowdsourced real projects; evaluate the agent on each and compute the empirical mean of *U*.

This approach is rooted in **information theory**: we estimate the agent’s policy entropy relative to an optimal human policy, thereby quantifying how much information it exploits.  

---

### Why SWE‑Bench Pass Rates Mislead  
SWE‑Bench aggregates a handful of fixed benchmarks and reports a binary “pass” flag. This reduces the evaluation to a *hard threshold* on correctness alone:

- **Distribution shift**: The benchmark’s tasks are a tiny, curated slice of the real‑world distribution; success there doesn’t imply high \(E[U]\).  
- **Overfitting to the test set**: Agents can learn brittle shortcuts that exploit the limited surface patterns.  
- **Ignorance of auxiliary qualities**: Performance, scalability, and code quality are invisible in a pass/fail metric.

A non‑obvious insight is that *pass rates implicitly reward low‑entropy policies*—agents that consistently produce the same “correct” answer for many inputs, sacrificing diversity needed to generalize. Thus, a high SWE‑Bench score can coexist with poor utility on novel projects, misleading stakeholders about real deployment readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
