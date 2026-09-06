---
qid: ing_eafcf93b02__fp__local
question: 'Explain: Compatible with Sourcegraph products — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 417
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:27-05:00'
sources: []
---

**Why Sourcegraph Docs must “speak” Cody**

At its core, a code‑search platform is a *query engine* over a massive, mutable corpus.  
Cody, an LLM‑powered assistant, turns natural‑language prompts into concrete search queries and code completions. For the two to coexist seamlessly, their interfaces must be *compatible*: the assistant’s output has to be executable by the search engine, and the engine’s metadata must be consumable by the model.

1. **Input alignment** – Cody generates a *structured query* (e.g., `repo:foo file:*.go contains:"fmt.Println"`). Sourcegraph’s API accepts exactly this syntax; otherwise the assistant would have to perform costly re‑parsing or heuristic translation, breaking latency guarantees.

2. **Output fidelity** – Search results are returned as spans of source with contextual metadata (commit hash, line numbers, diff context). Cody can embed these spans into explanations or suggestions without further transformation, preserving information integrity and allowing incremental refinement.

3. **Bidirectional feedback loop** – Sourcegraph tags each result with relevance scores and popularity metrics. Feeding those back to the LLM as a *prior* enables it to bias future queries toward high‑value code paths, reducing search cost and improving user trust—an embodiment of Bayesian optimization over the corpus.

4. **Security & policy** – Both systems honor the same access controls (org/team visibility, code‑level ACLs). The assistant cannot propose or retrieve data beyond what the search API permits, preventing accidental privilege escalation.

*Non‑obvious insight*: The true power emerges when Cody learns from *search history*. Every query executed by Sourcegraph is logged; by treating these logs as a reinforcement signal, the LLM can adapt its prompting strategy to user intent over time—effectively turning passive documentation into an active, self‑optimizing knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
