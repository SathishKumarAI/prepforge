---
qid: ing_e502010327__fp__local
question: 'Explain: Mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 348
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:05:37-05:00'
sources: []
---

**Mapping – the contract between data and query**

At its core, a *mapping* is the specification that tells an engine how to interpret each field of a document before it is indexed.  
When a document arrives, the search system must decide:

1. **What type of value does this field hold?**  
   Integer, keyword, text, geo‑point…  
2. **How should that value be stored and made searchable?**  

If we treat the index as a high‑dimensional space where each dimension is a feature (field), mapping chooses the coordinate system for that space. It decides whether a dimension is *discrete* (keyword → exact match, no tokenisation) or *continuous* (float → range queries). This is an optimisation problem: we want to minimise storage and maximise retrieval speed while preserving semantics.

The mapping also defines **analyzers**—tokenisers and filters that transform raw text into searchable tokens. Choosing the wrong analyzer is like projecting a 3‑D shape onto a 2‑D plane: you lose crucial information (e.g., case, stemming).  

A non‑obvious insight: *fields declared as “keyword” can still be used for full‑text search if they are also mapped with an `analyzer`.* This duality lets the same data support both exact and fuzzy queries without duplicating documents. In practice, this is a small change in mapping that yields huge flexibility.

In short, mapping is the engine’s schema‑level optimisation that balances storage, speed, and semantic fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
