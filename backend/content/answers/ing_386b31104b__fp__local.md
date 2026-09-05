---
qid: ing_386b31104b__fp__local
question: 'Explain: Do the simple thing that works — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 397
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:25-05:00'
sources: []
---

### Why “do the simple thing that works” is a career‑building strategy at Anthropic

1. **The core problem** – Anthropic’s mission is to build large language models (LLMs) that are *safe* and *alignable*.  
2. **Why simplicity matters** – Safety constraints can be expressed as a *distribution shift* between the training data and deployment scenarios. A simple, well‑understood algorithm guarantees a bounded shift: if you change one variable at a time, you know exactly how performance will degrade.  
3. **Optimization principle** – The loss surface of a massive neural network is highly non‑convex; local minima are abundant. A *simple* approach (e.g., fine‑tuning on a small, curated dataset) acts as a strong regularizer that keeps the model near a known good region of parameter space, reducing catastrophic forgetting and bias amplification.  
4. **Information‑theoretic view** – Each added layer or hyperparameter introduces new degrees of freedom, increasing *model capacity* but also *entropy* in the weight distribution. Simple models have lower entropy, so their predictions are easier to explain and audit—critical for interpretability audits that Anthropic performs daily.  
5. **Non‑obvious insight** – The true advantage of simplicity is not just fewer parameters but a *smaller hypothesis space*. In high‑dimensional settings this reduces the risk of spurious correlations that adversarial users could exploit, thereby tightening the safety envelope without expensive data or compute.

In short, at Anthropic “doing the simple thing that works” translates to choosing the minimal architecture and dataset that still satisfies safety constraints. This guarantees tractable optimization, interpretable outputs, and a lower attack surface—exactly what safe AI demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
