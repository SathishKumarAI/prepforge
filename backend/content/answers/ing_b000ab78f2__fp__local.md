---
qid: ing_b000ab78f2__fp__local
question: 'Explain: Red flags interviewers watch for — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 463
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:43-05:00'
sources: []
---

### Why “evaluation & observability” matters

In an AI pipeline the *objective* is to turn data into reliable decisions.  
That objective can only be met if two mathematical guarantees hold:

1. **Correctness** – The model’s output must approximate the true function \(f(x)\) that a human or a physical system would produce.  
2. **Stability** – Small changes in input, environment, or time should not cause large swings in predictions.

Evaluation (metrics, validation splits, statistical tests) checks *correctness*; observability (logging, dashboards, drift detectors) checks *stability*. If either fails, the system becomes a black box that can silently degrade—an unacceptable risk in production.

### Red‑flag signals interviewers look for

| Category | What to watch | Why it’s red |
|----------|---------------|--------------|
| **Evaluation** | • Validation set is not representative (e.g., same distribution as training).<br>• Overreliance on a single metric (accuracy only) when the task needs precision/recall balance. | Guarantees of correctness are broken; you can’t trust the reported performance. |
| **Observability** | • No systematic logging of inputs, outputs, and confidence scores.<br>• Lack of drift‑detection mechanisms or alerting for distribution shift. | Stability is compromised; unseen shifts will cause catastrophic failures without notice. |

### Non‑obvious insight

Many candidates think *testing* is enough. But **test coverage ≠ observability**. Even a perfect test suite cannot detect runtime drift because it only probes the data distribution you engineered. True observability requires continuous, automated monitoring of *live* input distributions and model confidence—essentially turning the pipeline into an online learning system that self‑validates as soon as it deviates from its training assumptions.

In short: interviewers want proof that **you can both prove** a model works *now* (evaluation) and guarantee it will keep working *over time* (observability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
