---
qid: ing_4c408364e2__fp__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 452
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:47:12-05:00'
sources: []
---

**Why we need custom spans**

When an LLM‑driven pipeline (e.g., LangChain) executes a chain, the underlying framework automatically emits *spans* that record the start/end times and metadata of each step. These generic spans are great for high‑level observability but they hide the **semantic granularity** of your business logic: “retrieval” versus “re‑ranking”, or “prompt tuning” versus “post‑processing”.  
To recover this lost structure we introduce *custom spans*—explicit, named intervals that wrap any callable you choose. They become first‑class citizens in the tracing graph, enabling precise latency attribution and failure isolation.

**How it works**

1. **Create a span context** (`with Span("my-span") as s:`).  
2. Execute your code inside this block; all nested calls inherit the span as parent.  
3. The tracing backend (LangWatch/Langfuse) serialises the span’s attributes—`name`, `start_ts`, `end_ts`, and any tags you attach (`error=True`, `model="gpt‑4o"`).  

This is simply a hierarchical application of *probabilistic inference*: each span represents a conditional distribution over execution time given its parent, allowing Bayesian diagnostics on bottlenecks.

**Non‑obvious insight**

Custom spans expose **causal structure**. By naming them after business concepts rather than low‑level function names, you turn the trace into a DAG that mirrors your domain model. This enables *counterfactual* analysis: “If retrieval latency had been 10 ms lower, would overall SLA improve?”—something generic tracing can’t answer.

> **LangWatch** stores spans in a time‑series DB and visualises them as heatmaps;  
> **Langfuse** enriches them with AI‑generated summaries and anomaly alerts.  

Together they give you an end‑to‑end, principled view of every step your AI system takes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
