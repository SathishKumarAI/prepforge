---
qid: ing_b2798753b8__fp__local
question: 'Explain: We’ve Always Done It This Way — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 377
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:18-05:00'
sources: []
---

**Frugal Architecture: Why “We’ve Always Done It This Way” is a Design Principle**

At its core, the paper tackles *model‑deployment latency* in cloud ML pipelines. The problem is simple: inference servers must keep up with traffic while staying cost‑effective. Two forces pull in opposite directions— **throughput** wants large, heavily‑parallel models; **cost** rewards small, lightweight ones. Traditional solutions shuffle resources or cache intermediate results, but they ignore the *compositional structure* of modern pipelines.

Neo Kim argues that every inference pipeline is a **directed acyclic graph (DAG)** of deterministic sub‑models. Each node can be executed locally or off‑loaded to an accelerator; each edge represents data flow with known dimensionality and latency. By treating the DAG as a *resource‑constrained shortest‑path problem*, we obtain a formal optimization: minimize total expected cost subject to a maximum end‑to‑end latency. The solution is **frugal architecture**—a set of “what, where, when” decisions that respect the underlying graph’s geometry.

The deeper insight missed by most practitioners is that *latency constraints induce a hierarchy of partial orderings*. A node can be pre‑computed only if all its ancestors meet their own latency budgets. This recursive pruning dramatically reduces the search space and yields near‑optimal schedules without exhaustive enumeration.

In practice, implementing this framework means annotating each model with empirical cost/latency curves, then running a lightweight integer program that maps the DAG onto heterogeneous hardware—exactly what “We’ve Always Done It This Way” formalizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
