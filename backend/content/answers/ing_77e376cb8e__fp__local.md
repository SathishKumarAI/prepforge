---
qid: ing_77e376cb8e__fp__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 479
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:19:43-05:00'
sources: []
---

**Why a “custom evaluator” is indispensable**

When an LLM is tasked with *solving* or *generating* content, the only thing we can observe directly is its textual output. The true objective—accuracy, relevance, safety—is latent. A custom evaluator acts as a bridge: it maps raw tokens to a scalar score that faithfully reflects the hidden goal.

**Fundamental problem**

We must estimate \(P(\text{desired outcome}\mid\text{model output})\) without enumerating all possible outputs. The evaluator is an estimator of this probability, built from a small labeled set or rule‑based logic. Its design hinges on **information bottleneck**: compress the high‑dimensional output into minimal features that retain predictive power for the target metric.

**Why it must be modular**

1. **Decoupling** – The model can evolve while the evaluator stays fixed, enabling reproducible benchmarking.
2. **Generalization** – A well‑structured evaluator (e.g., a classification head trained on human judgments) will adapt to new prompts with minimal retraining.
3. **Calibration** – By normalizing outputs into a probability distribution, we avoid biased reward signals that can mislead reinforcement learning.

**Deep insight**

Most practitioners treat the evaluator as a black box. The hidden gem is that *the evaluator’s loss surface encodes the geometry of the task space*. If two outputs are close in semantic vector space but diverge on the target metric, the evaluator will assign them different scores—effectively reshaping the latent manifold so that downstream optimization (e.g., RL‑HF) follows the correct gradient.

**Langwatch & Langfuse integration**

- **Langwatch** captures execution traces and metrics for each evaluation step, ensuring traceability of how the evaluator arrived at a score.
- **Langfuse** orchestrates the pipeline: it feeds model outputs to the custom evaluator, aggregates results across runs, and visualizes the resulting score distribution.

Together they provide an end‑to‑end system where the evaluator is both *theoretical* (information‑theoretic estimator) and *practical* (instrumented for reproducibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
