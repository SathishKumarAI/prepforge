---
qid: ing_68b8032f66__fp__local
question: 'Explain: Anti-Patterns to Avoid'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 546
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:10-05:00'
sources: []
---

**Anti‑patterns in AI: why they’re deadly and how to sidestep them**

At its core an AI system is a *probabilistic mapping* \(p(y|x)\) that we learn from data. Every anti‑pattern is a shortcut that breaks this mapping’s integrity, usually by violating the assumptions of statistical learning.

1. **Data‑driven overfitting** – Treating every spike in training loss as evidence of generalization.  
   *Why it fails*: Over‑parameterised models will interpolate any noise; without regularisation they learn the idiosyncrasies rather than underlying structure, violating the bias–variance trade‑off.

2. **Feature engineering paralysis** – Relying on hand‑crafted features because “the data is too sparse.”  
   *Why it fails*: Hand‑crafted descriptors impose a prior that may be misaligned with the true manifold; they often discard useful higher‑order interactions, reducing capacity to capture the geometry of \(p(y|x)\).

3. **Evaluation myopia** – Optimising a single metric (accuracy, F1) on one split.  
   *Why it fails*: Metrics are proxies for downstream utility; optimizing them without considering calibration or robustness leads to models that perform well in lab but poorly under distribution shift.

4. **Model‑agnostic “one‑size‑fits‑all”** – Choosing a single architecture regardless of task complexity.  
   *Why it fails*: Different tasks inhabit different regions of the function space; a universal network may be too shallow for highly non‑linear manifolds or too deep for linear ones, wasting capacity and hurting generalisation.

5. **Black‑box deployment** – Shipping a trained model without interpretability or audit trails.  
   *Why it fails*: In regulated domains, unseen biases can cause legal harm; the lack of traceability violates the principle that models should be *explainable* to satisfy accountability constraints.

---

### Non‑obvious insight

The most subtle anti‑pattern is **“post‑hoc sanity checks”**—adding heuristic filters after training (e.g., clipping outputs, rule‑based overrides). These act like a *cognitive bias* that masks underlying distributional errors; the system appears robust while its core probabilistic mapping remains fragile. A principled fix is to embed constraints into the learning objective itself (e.g., by adding penalty terms for violating known invariances), ensuring that robustness is baked in rather than patched later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
