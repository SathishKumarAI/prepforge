---
qid: ing_6798fc87aa__fp__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 533
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:33-05:00'
sources: []
---

**Why a RAG system is needed in enterprise search**

An enterprise’s knowledge base is *heterogeneous* (docs, tickets, code) and *dynamic*. Pure retrieval can surface the right snippet but lacks context; pure generation risks hallucinating facts. A Retrieval‑Augmented Generation (RAG) model stitches the two: retrieve a concise set of evidence vectors \(E=\{e_1,\dots,e_k\}\) from an index, then condition a transformer on \((q,E)\) to produce a faithful answer.  

**Fundamental design principle – *information bottleneck* for relevance**

Let \(X\) be the query and \(Y\) the correct answer. We seek a representation \(Z\) that maximises mutual information with \(Y\) while minimising it with irrelevant knowledge:  
\[
\max_{Z} I(Z;Y)-\beta I(Z;X).
\]
Retrieval supplies a compressed, high‑\(I(\cdot;Y)\) sub‑space; the generator refines this to satisfy the second term. This balances precision (no hallucinations) with recall (capturing unseen facts).

**Key architectural choices**

| Component | Rationale |
|-----------|-----------|
| **Dense index** (FAISS or HNSW) on document embeddings | Fast approximate nearest‑neighbour search ensures sub‑second latency at scale. |
| **Context window size \(k\)** | Empirically, 3–5 documents capture enough context; larger windows inflate generation noise. |
| **Prompt engineering** | Prefix “Answer the following query using only the provided excerpts:” forces the model to stay within evidence bounds. |
| **Re‑ranking** (semantic similarity + relevance score) | Removes noisy hits that match surface tokens but not semantics. |

**Non‑obvious insight**

Most designs treat retrieval and generation as independent pipelines, tuning each separately. In practice, *joint fine‑tuning* of the retriever on generated pseudo‑queries yields a **self‑reinforcing loop**: the generator exposes weak spots in retrieval, which the retriever learns to correct. This reduces hallucinations far more than improving either component alone.

In sum, a RAG system for enterprise search emerges from optimizing the information bottleneck, leveraging efficient dense retrieval, and tightly coupling generation with evidence, while iteratively refining both modules together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
