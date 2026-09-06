---
qid: ing_a9838f38ac__fp__local
question: 'Explain: The problem with metrics is a big problem for AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 424
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:39-05:00'
sources: []
---

**Why the “metric problem” is the Achilles’ heel of AI**

At its core an AI system is a *function approximator* trained to minimize a loss \(L(\theta)\) over parameters \(\theta\). The loss is nothing but a mathematical encoding of what we *really* want the model to achieve. If that encoding is wrong, the optimization will converge to a solution that satisfies the math but not our intent.

The first principle here is **completeness**: a metric must capture every aspect of the desired behaviour. In practice we hand‑pick scalar proxies—accuracy, F1, BLEU—that are easy to compute and differentiate. Yet they are *incomplete* descriptions; a model can achieve high accuracy by exploiting spurious correlations or by overfitting to the test set. The metric becomes a *shortcut*, not a faithful objective.

A second principle is **alignability**: the metric must be *aligned* with human judgment. In many domains (e.g., image generation, dialogue) humans are the only reliable oracle. Because we cannot compute human‑like judgments at scale, we rely on surrogate metrics that correlate imperfectly. The correlation itself is a probabilistic estimate; small sampling errors can lead to large mis‑ranking of models.

The non‑obvious insight: **the metric’s geometry shapes the optimisation landscape**. If a metric is highly non‑convex or has many local optima, gradient‑based training may converge to suboptimal solutions that are fine for the proxy but catastrophic in reality. Designing metrics with *smooth* gradients (e.g., by regularising with entropy) can improve both convergence and generalisation.

In short, the “metric problem” is not a peripheral nuisance—it is the very bridge between mathematical optimisation and real‑world utility. If we build that bridge on shaky ground, every subsequent step collapses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
