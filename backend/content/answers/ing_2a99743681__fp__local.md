---
qid: ing_2a99743681__fp__local
question: 'Explain: The Assumption That Turned Out to Be Wrong'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 430
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:35:31-05:00'
sources: []
---

**The “IID” Assumption That Turned Out Wrong**

At its core ML seeks a function \(f\) that maps inputs \(x\) to outputs \(y\). The classic training recipe assumes *independent and identically distributed* (IID) samples: each \((x_i,y_i)\) is drawn from the same unknown distribution \(P(x,y)\), and the joint probability factorises as \(\prod P(x_i,y_i)\).  
Why did this seem reasonable? In statistics, IID guarantees that empirical averages converge to expectations (law of large numbers) and that risk minimisation on a training set approximates population risk—an optimisation principle.  

In practice, however, data are *non‑IID*: sensor drift, user behaviour changes, batch effects, or adversarial manipulation break both independence and stationarity. Modern deep nets thrive precisely because they learn **invariant representations** that tolerate such shifts. The failure of IID is not a flaw in the optimisation framework; it reflects that real‑world generative processes are *structured* rather than random draws.

A non‑obvious insight: **IID is an artefact of early statistical theory, not a universal truth about learning systems.** When we relax IID and treat data as coming from a *manifold* with latent factors (e.g., time‑varying distribution \(P_t(x,y)\)), the optimisation objective becomes one of *robustness*: minimise worst‑case risk over plausible shifts. This perspective unifies transfer learning, domain adaptation, and continual learning under a single geometric principle: models should approximate a function that is stable across neighborhoods in data space, not merely fit a single distribution snapshot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
