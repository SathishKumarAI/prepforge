---
qid: ing_a2b15d9b7a__fp__local
question: 'Explain: Query Decomposition (Multi-Query) — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 460
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:47-05:00'
sources: []
---

**Why split a query?**  
In modern search, a user’s request is usually *multi‑faceted*: “Find the best‑rated Italian restaurants in Manhattan that open after 10 p.m.” The query bundles **semantic** (Italian), **spatial** (Manhattan), and **temporal** (after 10 p.m.) constraints. Treating it as a single Boolean expression forces the index to scan a vast, heterogeneous set of documents—most of which violate one or more facets—leading to low recall and high latency.

**From information theory to decomposition**  
A query can be seen as an *information source* that must be satisfied by a subset of documents. The optimal strategy is to partition this source into *independent sub‑sources*, each corresponding to a distinct constraint. Each sub‑source yields a ranked list; the final answer is obtained by intersecting or re‑ranking these lists. This mirrors **multimodal fusion** in signal processing: combining independent evidence streams maximizes mutual information about relevance while minimizing redundancy.

**Why multi‑query works**  
1. **Index locality:** each sub‑query accesses only the relevant inverted list, reducing I/O.  
2. **Parallelism:** sub‑queries can be executed concurrently on distributed nodes.  
3. **Granular re‑ranking:** early filtering removes unlikely candidates, allowing deeper scoring (e.g., BM25 or neural embeddings) to focus on a smaller set.

**Non‑obvious insight**  
The *order* of decomposition matters. Placing the most selective facet first (e.g., temporal “after 10 p.m.”) dramatically shrinks intermediate result sets, yielding exponential savings in later stages. This is analogous to **branch‑and‑bound**: pruning early reduces overall search space.

In short, query decomposition turns a monolithic retrieval problem into a series of lightweight, parallel sub‑problems whose intersection recovers the full answer—an elegant application of information‑theoretic efficiency and geometric locality in high‑dimensional index spaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
