---
qid: ing_81312ccf64__fp__local
question: 'Explain: Cost of Evaluation at Scale — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 535
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:59-05:00'
sources: []
---

**Cost of Evaluation at Scale – Retrieval‑Augmented Generation (RAG)**  

At the core of RAG is a two‑step pipeline: *retrieve* relevant documents, then *generate* an answer conditioned on them. The total evaluation cost \(C\) for \(N\) queries can be expressed as  

\[
C = N \bigl( c_{\text{retrieval}} + c_{\text{generation}}\bigr),
\]

where each term is itself a product of latency, compute budget, and accuracy requirements.

*Retrieval.*  
For an index with \(M\) vectors, the naive nearest‑neighbour search costs \(O(M)\). Approximate methods (HNSW, IVFFAISS) reduce this to \(O(\log M)\) but add a constant factor \(\alpha_{\text{retr}}\) that captures memory bandwidth and I/O. Moreover, the *hit‑rate* \(h\) matters: if only 20 % of retrieved passages are useful, the downstream generator must compensate with higher confidence penalties, effectively inflating \(c_{\text{generation}}\).

*Generation.*  
Language models scale linearly with token count. If a response requires \(\tau\) tokens and each token costs \(g\) GPU‑seconds, then \(c_{\text{generation}} = g\tau\). However, the *context window* is limited; longer passages increase \(\tau\), but also improve accuracy. The trade‑off curve is governed by an information‑theoretic bound: the marginal benefit of extra context decays when the retrieved set’s entropy falls below a threshold.

**Non‑obvious insight:**  
The dominant term in practice is not retrieval latency or generation cost alone, but the *amortization* of index maintenance. Updating embeddings for new documents incurs a one‑time batch cost \(C_{\text{update}}\). When queries are batched (e.g., 10 k per day), spreading \(C_{\text{update}}\) over all served queries can reduce the per‑query budget by an order of magnitude, allowing heavier retrieval models without increasing peak latency. Thus, designing RAG systems for scale requires treating index updates as a stochastic process and optimizing their frequency relative to query volume—a nuance often overlooked in naïve cost calculations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
