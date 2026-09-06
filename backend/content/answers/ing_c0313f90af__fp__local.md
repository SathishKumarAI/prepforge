---
qid: ing_c0313f90af__fp__local
question: How do you decide when an AI prototype is ready for production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 327
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:39-05:00'
sources: []
---

**When does a prototype cross the “ready‑for‑production” threshold?**  
Start from the *optimization objective* you set in the problem statement: accuracy, latency, cost, or some trade‑off of them. A prototype is finished when its **expected utility**—the weighted sum of these objectives under realistic data distributions—matches or exceeds that of an incumbent system by a statistically significant margin.  

Why this matters:  
1. *Data drift* turns a high‑accuracy model into a low‑utility one; you must evaluate the prototype on a held‑out stream that mirrors production conditions, not just cross‑validation folds.  
2. *System constraints* (GPU memory, inference time) are not captured by loss functions alone; embed them as penalty terms in the utility function or use constrained optimization to ensure feasibility before deployment.  

A non‑obvious insight: **Robustness metrics are often more predictive of production success than pure accuracy**. Small perturbations—sensor noise, adversarial inputs, or rare edge cases—can dominate failure rates. Measuring *expected performance under perturbation distributions* (e.g., via worst‑case analysis or distributional robustness) can expose brittleness that a clean test set hides.

In practice, the prototype is ready when:  
- its utility on a realistic validation stream meets the target with high confidence, and  
- robustness tests show no catastrophic degradation.  

Only then does the transition from research to production make statistical sense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
