---
qid: ing_baab3e94d9__fp__local
question: 'Explain: Questions that actually matter — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 447
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:32-05:00'
sources: []
---

**Why “Questions that actually matter” is the core of a mobile‑system‑design interview for ML**

1. **Fundamental Problem**  
   A mobile ML system must deliver *accurate inference* while satisfying *latency, energy, and privacy* constraints. These constraints are mutually exclusive: higher model size → more compute → longer latency & battery drain; lower compute → faster but less accurate.

2. **Why the interview focuses on “real” questions**  
   - **End‑to‑end pipeline**: data acquisition ↔ preprocessing ↔ inference ↔ post‑processing ↔ UI feedback.  
   - **System constraints**: CPU/GPU/TPU budgets, memory hierarchy, network connectivity.  
   - **Optimization goals**: minimize *expected cost* \(C = \alpha\,\text{latency} + \beta\,\text{energy}\) while keeping accuracy ≥ A₀.

3. **Deep‑learning insights that surface**  
   - *Model quantization* is not just a trick; it’s an instance of **information bottleneck**—you discard redundant bits to shrink the representation without losing predictive power.  
   - *Early exit* classifiers exploit the fact that many inputs are “easy”; the expected number of layers processed \(E[L]\) reduces latency linearly while preserving accuracy on hard samples.

4. **Non‑obvious insight**  
   Most candidates ignore **device‑specific kernel fusion**: merging multiple tensor ops into a single GPU launch cuts overhead by 30–50 %. The interview tests whether you can spot that the *algorithmic* complexity is only part of the story; hardware‑aware micro‑optimizations dominate real‑world performance.

In short, the interview probes your ability to translate a **probabilistic ML objective** into an **engineering plan** that respects mobile resource budgets while keeping the system robust and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
