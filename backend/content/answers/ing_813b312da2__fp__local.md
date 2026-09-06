---
qid: ing_813b312da2__fp__local
question: 'Explain: Explicit mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 389
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:58-05:00'
sources: []
---

**Explicit mapping in machine‑learning–based document search**

The fundamental problem is: *given a query and an unstructured text corpus, rank documents by relevance*.  
A naïve approach treats every term as an independent feature, but the combinatorial explosion of n‑grams quickly becomes infeasible. An **explicit mapping** solves this by precomputing a deterministic function  

\[
f:\text{term} \;\mapsto\; \mathbf{w}\in\mathbb R^d
\]

that embeds each token into a low‑dimensional space where semantic similarity is preserved.  
Why must it be *explicit*? In probabilistic retrieval (e.g., BM25) the relevance score is computed on the fly, but this requires repeated term lookups and can’t capture long‑range dependencies. By contrast, an explicit map turns the high‑dimensional bag‑of‑words vector into a dense representation once per document; thereafter similarity queries reduce to cheap dot products.

This construction rests on **geometric information theory**: the embedding space is chosen so that cosine similarity approximates the probability of two documents sharing a query’s intent. Optimization (e.g., contrastive loss) guarantees that semantically related terms collapse together, while unrelated ones diverge.  

**Non‑obvious insight:** The mapping need not be learned from scratch for each corpus; *transferable* embeddings (like BERT) can be fine‑tuned with only a few in‑domain documents because the explicit map already encodes universal language structure. Thus, explicit mapping bridges unsupervised text representation and supervised ranking, yielding scalable, accurate elastic search without per‑query feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
