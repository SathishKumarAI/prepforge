---
qid: ing_4aecf39894__fp__local
question: 'Explain: NVIDIA Custom Problems (2026) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 394
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:44:29-05:00'
sources: []
---

**Why “Custom Problem” questions appear on NVIDIA/FAANG interviews**

At the core, a *custom problem* is an engineered **optimization task** that blends domain‑specific constraints with generic learning objectives.  
When an interview asks you to design such a problem, it tests whether you can:

1. **Identify the true objective** – e.g., maximize inference throughput while keeping latency below 10 ms and GPU utilisation > 90 %.  
2. **Translate that into a formal model** – usually a mixed‑integer linear program or a constrained stochastic optimisation where the decision variables are batch sizes, layer fusion decisions, or memory layouts.  
3. **Exploit problem structure** – many of NVIDIA’s workloads exhibit *block‑diagonal* sparsity (different image resolutions share kernels) and *temporal locality* (consecutive frames in video). Recognising these allows you to decompose the optimisation into independent subproblems or use dynamic programming instead of a full‑blown solver.  

**A non‑obvious insight:**  
The *Pareto frontier* between latency and utilisation is often **non‑convex** because small changes in batch size trigger kernel launch overheads that jump discontinuously. Traditional gradient‑based methods fail here; instead, you should use **sample‑efficient Bayesian optimisation** over a discrete set of candidate batch sizes. This yields the best trade‑off with far fewer evaluations than an exhaustive grid search.

In summary, custom problem questions probe your ability to formalise performance constraints, leverage structural properties for efficient optimisation, and recognise that real‑world ML deployment is a constrained, non‑convex design space rather than a simple “train‑and‑test” loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
