---
qid: ing_1e66a45523__fp__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 364
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:58-05:00'
sources: []
---

**Why we fetch traces and then filter by span name**

In a distributed AI system the *fundamental problem* is to isolate the exact execution path that produced an evaluation result. A trace is a *causal graph* of all operations; each node (span) carries its own metadata, including a human‑readable **name** such as `tokenize`, `model.inference`, or `postprocess`.  

1. **Uniform representation:** All services emit spans in the same format, so fetching the raw trace guarantees we see every interaction, even those that were not logged by the evaluator itself (e.g., a third‑party embedding service).  
2. **Selective analysis:** The span name is a *semantic key* that identifies the logical unit of work. By filtering on this key we reduce a potentially huge graph to the subgraph that actually matters for a given metric—latency, error rate, or cost.  
3. **Optimization principle:** According to *information theory*, we want the minimal sufficient statistic that preserves the relevant information about the evaluation outcome. The span name is precisely that statistic: it discards irrelevant context (e.g., network retries) while keeping the causal core.

**Non‑obvious insight**

A single trace may contain multiple spans with the same name but different *attributes* (e.g., model version). Filtering only by name loses this nuance; thus, a robust pipeline should combine **name + attribute filters**. This preserves granularity and avoids conflating distinct execution paths that share a common operation name.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
