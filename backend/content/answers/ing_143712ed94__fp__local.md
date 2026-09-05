---
qid: ing_143712ed94__fp__local
question: 'Explain: Problem Statement — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 371
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:10-05:00'
sources: []
---

### Why “Problem Statement” matters for whiteboard exercises

Whiteboard sessions are the *design sprint* of artificial‑intelligence research: you sketch a model, tweak hyper‑parameters, and iterate in seconds.  
The **problem statement** is the *objective function* that turns this sketch into an optimization problem.  
Without it, you are optimizing nothing but ink—your diagram may be elegant, yet it solves no real question.

1. **Define the target metric** (accuracy, F1, latency).  
2. **Specify constraints** (data size, privacy, computational budget).  
3. **Identify the decision variables** (architecture depth, learning rate, feature set).

These three components map directly onto a constrained optimization problem:  
\[
\max_{\theta} \; \mathcal{L}(D;\theta)\quad
\text{s.t.}\; g_i(\theta)\le 0,\; h_j(\theta)=0 .
\]

Because the whiteboard is *interactive*, the statement must be **decomposable**: each sub‑problem (e.g., “how to handle class imbalance”) becomes a local constraint, allowing you to reason about trade‑offs without recomputing the whole model.

#### Non‑obvious insight  
A well‑crafted problem statement turns the whiteboard from *illustration* into a **predictive experiment**. By treating each sketch as a hypothesis that can be empirically validated (e.g., “adding attention will reduce error by X%”), you embed statistical rigor into an otherwise informal setting, ensuring that your rapid iterations are grounded in measurable outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
