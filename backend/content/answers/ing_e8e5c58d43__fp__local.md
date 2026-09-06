---
qid: ing_e8e5c58d43__fp__local
question: 'Explain: ​ Evaluation types — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 504
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:14:00-05:00'
sources: []
---

**Why evaluation matters for LLM pipelines**

When a language‑model workflow (e.g., retrieval‑augmented generation) produces a text output, the *only* thing we can measure is how useful that text is to a user or downstream task. This utility is an **objective function** over discrete strings—exactly the same formal problem that underlies supervised learning: choose a policy \(π\) that maximizes expected reward \(E[R(π)]\). Thus, evaluation in LangChain must answer *“does this chain produce high‑reward outputs?”* and guide iterative improvement.

**Fundamental evaluation types**

| Type | Core idea | When to use |
|------|-----------|-------------|
| **Automatic metrics** | Compute a numeric score from the output (e.g., BLEU, ROUGE, perplexity). | Quick sanity checks; large‑scale experiments where human labeling is infeasible. |
| **Human‑in‑the‑loop** | Annotators rate or rank outputs on task‑specific criteria. | Final product validation; tasks with nuanced meaning that metrics can’t capture. |
| **Self‑evaluation (chain‑of‑thought)** | The model generates reasoning steps and checks them against a ground truth or consistency rules. | Debugging hallucinations; ensuring internal logic before the final answer is returned. |
| **Comparative evaluation** | Directly compare two chains on the same inputs, often via paired tests. | Choosing between architectural variants; small‑sample hypothesis testing. |

Each type maps to an optimization strategy: automatic metrics are surrogate loss functions; human scores are ground truth rewards; self‑evaluation implements a form of *internal reward shaping*.

**Non‑obvious insight**

Most people treat evaluation as a passive audit, but in LangChain it should be **designed as part of the pipeline itself**. By embedding an evaluation sub‑chain that feeds back into the main chain (e.g., a “feedback loop” that retrains or re‑runs with different prompts), you transform evaluation from a one‑off check into a *continuous learning signal*. This mirrors reinforcement learning’s notion of bootstrapping: the system learns to self‑correct without external labels, leveraging its own internal consistency checks as a proxy reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
