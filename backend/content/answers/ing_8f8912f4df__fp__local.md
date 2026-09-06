---
qid: ing_8f8912f4df__fp__local
question: 'Explain: Title: From Local to Global: A Graph RAG Approach to Query-Focused
  Summarization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 543
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:27-05:00'
sources: []
---

**From Local to Global: A Graph‑RAG Approach to Query‑Focused Summarization**

At its core, query‑focused summarization (QFS) seeks a concise answer \(S\) that maximises relevance to a user query \(q\) while preserving coherence and diversity across an evidence set \(\mathcal{D}\).  
The *local* stage models each document or sentence as a node \(v_i\), assigning it a score
\[
w_i = \alpha\,\text{Sim}(v_i,q)+ (1-\alpha)\,\text{Sim}(v_i,v_j),
\]
where \(\alpha\) balances query‑match against intra‑document similarity. This is essentially a *max‑entropy* assignment: we want the most informative nodes given \(q\), but without considering global interactions.

The *global* stage reframes QFS as a **Graph Retrieval Augmented Generation (RAG)** problem. We build an undirected graph \(G=(V,E)\) where edges encode semantic relatedness (e.g., cosine similarity > τ). The goal becomes to find a subgraph \(H\subseteq G\) that maximises the joint probability
\[
P(H|q)=\frac{1}{Z}\exp\!\Bigl(\sum_{v_i\in H}w_i + \lambda\,\Phi(H)\Bigr),
\]
with \(\Phi(H)\) a *graph‑level* smoothness term (e.g., sum of edge weights). This is equivalent to solving an **Ising model** on \(G\), a classic optimization problem from statistical physics. The Ising formulation guarantees that local scores are tempered by global connectivity: a high‑score node is only retained if it sits in a densely connected component, preventing isolated “noise” snippets.

*Non‑obvious insight:*  
Because \(\Phi(H)\) penalises *edge sparsity*, the optimal subgraph naturally forms a **minimum‑cut** that separates query‑relevant clusters from irrelevant ones. Thus, instead of greedy sentence extraction, we can apply efficient graph‑cut algorithms (e.g., Stoer–Wagner) to obtain globally coherent summaries in near‑linear time—an order of magnitude faster than recurrent neural generators yet with provable optimality guarantees under the Ising assumption.

In short, by lifting QFS from a collection of independent scoring functions to an energy minimisation over a semantic graph, we reconcile local relevance with global structure through a principled probabilistic model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
