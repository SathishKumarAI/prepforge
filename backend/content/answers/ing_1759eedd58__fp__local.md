---
qid: ing_1759eedd58__fp__local
question: 'Explain: Cost per Query (Full RAG Triad) — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 541
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:18-05:00'
sources: []
---

**Cost‑per‑Query in the Full Retrieval‑Augmented Generation (RAG) Triad**

The RAG triad consists of  
1. **Retriever** – fetches \(k\) documents from a corpus;  
2. **Reader** – parses the retrieved passages and extracts or synthesizes an answer;  
3. **Generator** – optionally rewrites the answer into natural language.

When we ask a single query, each component incurs a *computational cost* that is additive:

\[
C_{\text{query}} = C_{\text{retrieval}}
+ C_{\text{reader}}
+ C_{\text{generator}}\; .
\]

**Why this decomposition holds**

- Retrieval is *data‑access* dominated: we pay for the latency of index look‑ups and transfer of \(k\) documents.  
- Reading is *model‑inference* dominated: each document passes through a dense encoder/decoder, so cost scales with \(\sum_{i=1}^{k} L_i\), where \(L_i\) is token length.  
- Generation adds another inference pass over the reader’s output.

Thus the total cost is the sum of *resource‑specific* operations; there is no hidden synergy because each stage is sequential and independent in a typical pipeline.

**Deeper principle**

This decomposition reflects **sequential compositional optimization**: we first solve a subproblem (information retrieval) to reduce the search space, then solve a higher‑level problem (answer synthesis). The cost function is linear because the stages are *orthogonal* in their computational graphs; any reduction in one stage’s complexity directly translates into a proportional savings in overall cost.

**Non‑obvious insight**

Most practitioners treat \(C_{\text{retrieval}}\) as negligible, but for very large corpora the index‑scan latency can dominate. Moreover, if the retriever is *dynamic* (e.g., re‑indexing on the fly), its cost becomes a *function of query frequency*, turning the per‑query cost into a stochastic variable:

\[
C_{\text{retrieval}}(q) = \alpha + \beta\, \mathbb{E}[N_{\text{updates}}(q)] ,
\]

where \(N_{\text{updates}}\) is the number of index modifications triggered by query \(q\). Accounting for this variance is essential when budgeting for real‑time services, yet it is rarely included in cost‑per‑query analyses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
