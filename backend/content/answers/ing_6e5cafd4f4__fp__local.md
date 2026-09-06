---
qid: ing_6e5cafd4f4__fp__local
question: 'Does Opik support LLM evaluation? — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 392
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:16-05:00'
sources: []
---

Opik is built around the *trace‑then‑evaluate* principle: every request to an LLM is recorded as a structured event graph (inputs, outputs, metadata), and evaluation logic is applied downstream on that graph.  
From a foundational standpoint this solves two hard problems simultaneously:

1. **Causal attribution** – By keeping a full execution tree, Opik can isolate which prompt token, retrieved passage, or policy rule produced a given answer.  
2. **Reproducible metrics** – Because the trace is immutable and version‑controlled, any evaluation script (BLEU, ROUGE, hallucination detection, or custom reward functions) can be rerun on exactly the same data, ensuring auditability.

Opik exposes an *evaluation API* that accepts a *function signature* (`evaluate(trace: Trace) -> Dict[str, float]`). Internally it deserialises the trace, runs user‑supplied scoring code, and aggregates results across batches. The framework ships with ready‑made evaluators for factuality (using OpenAI’s GPT-4 as a judge), consistency, and latency, but users can plug in any probability‑based or information‑theoretic metric.

**Non‑obvious insight:**  
Because traces are first‑class objects, Opik automatically supports *counterfactual evaluation*: you can replay the same trace with an alternative prompt or retrieval set (by swapping nodes) and compute delta metrics. This lets developers quantify how much a single design change improves performance without needing new deployments—an ability that most “black‑box” monitoring tools lack.

In short, Opik does support LLM evaluation, doing so by turning every inference into a first‑class data point that can be scored, compared, and audited at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
