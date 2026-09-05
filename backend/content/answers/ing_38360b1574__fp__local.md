---
qid: ing_38360b1574__fp__local
question: 'Explain: What Logfire shows you — Pydantic Logfire: AI Observability for
  LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 422
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:03:55-05:00'
sources: []
---

**What Logfire actually reveals**

At its core, Logfire is a *probabilistic log‑collector* that turns every API call into a point on a joint distribution over **input, output, and hidden state**.  
When you wrap an LLM or RAG pipeline with Pydantic models, each request becomes a well‑typed observation:

```
{user_query}  →  {prompt}  →  {LLM_output}  |  {retrieved_docs}
```

Logfire records the exact **Pydantic schema** that produced each field. Because the schema is a *generative model* of your data, the log can be queried as:

- **Conditional likelihoods**: `p(output | query)` tells you how confident the system is about its answer.
- **Joint entropy**: `H(query, output)` shows overall uncertainty; a high value flags ambiguous queries or poorly trained models.
- **Mutual information** between retrieved docs and output (`I(retrieved_docs ; output)`) quantifies how much context truly influences generation.

These statistics are not ad‑hoc dashboards; they are *derivable* from the underlying probability space. By plotting them over time you see drift in model performance, detect hallucinations when `p(output | query)` falls below a threshold, and identify stale retrievers when `I(retrieved_docs ; output)` collapses.

**Non‑obvious insight:**  
Because Logfire stores *exact schema instances*, you can perform **counterfactual analysis**—replace the retrieved docs in a stored log entry with an alternative set and recompute the likelihood. This lets you quantify “what if” scenarios without re‑running the model, giving a principled way to audit data poisoning or retrieval bias.

In short, Logfire turns raw logs into a *statistical map* of your AI system’s behavior, grounded in probability theory and information geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
