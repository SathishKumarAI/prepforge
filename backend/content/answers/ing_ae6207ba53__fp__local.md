---
qid: ing_ae6207ba53__fp__local
question: 'Explain: Token-Budget Aware Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 478
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:26-05:00'
sources: []
---

**Token‑Budget Aware Retrieval – Production RAG at Scale**

The core problem is to answer a user query while respecting a hard limit on the number of tokens that can be sent to a large language model (LLM). In a Retrieval‑Augmented Generation (RAG) system, each retrieved document contributes both *value* (expected improvement in answer quality) and *cost* (its token length). The design goal is therefore an **optimization problem**:

\[
\max_{S\subseteq \mathcal{D}} \; V(S)\quad
\text{s.t.}\quad C(S)=\sum_{d\in S} |d|_{\text{tokens}}\le B,
\]

where \(V(S)\) is the expected utility of the set \(S\), \(|d|\) its token count, and \(B\) the budget.

The trick is to estimate \(V(d)\) without actually generating for every document. By treating relevance as a probability \(p_d\) (learned from embeddings or a lightweight scorer) and assuming LLM error scales inversely with evidence length, we approximate

\[
V(d)\approx p_d \cdot f(|d|),
\]

with \(f(\cdot)\) a concave function reflecting diminishing returns. The problem reduces to a **knapsack**: choose documents that maximize the ratio \(V(d)/|d|\). Solving this greedily (or via dynamic programming for small batches) yields a set that fits exactly into the token budget while delivering the highest expected answer quality.

*Non‑obvious insight:* In many deployments, the *most relevant* documents are also the longest. The knapsack formulation naturally trades off relevance against length, often selecting shorter yet highly probable snippets instead of a single long, marginally better document—something naive pipelines miss. This balance is what lets production RAG systems scale to millions of queries without exhausting GPU memory or incurring prohibitive token costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
