---
qid: ing_ebdf5a3c17__fp__local
question: 'Explain: Golden Set Composition Guidelines — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 439
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:03-05:00'
sources: []
---

**Golden‑Set Composition for Retrieval‑Augmented Generation (RAG)**  

At its core a RAG model answers a query *q* by combining a generated answer *g* with evidence retrieved from an external corpus. The **golden set** is the minimal, most informative subset of retrieved documents that guarantees correct reasoning while avoiding hallucination.

1. **Fundamental problem** – we must satisfy two constraints simultaneously:  
   - *Precision*: every piece of evidence used should support *g*.  
   - *Coverage*: all assertions in *g* must be backed by at least one document.

2. **Why a set, not a list?**  
   The retrieval stage is stochastic; documents arrive in arbitrary order. Treating the retrieved items as an unordered set removes bias from positional weighting and aligns with the combinatorial optimization of selecting a subset that maximizes joint likelihood:  

   \[
   S^* = \arg\max_{S\subseteq D} \prod_{d\in S}\Pr(d|q)\;\Pr(g|\{d\})
   \]

3. **Golden‑set criteria**  
   - *Mutual exclusivity*: no two documents in the set should offer overlapping, contradictory facts (reduces noise).  
   - *Relevance score threshold*: each document must exceed a learned relevance margin \(r_{\min}\) to avoid spurious matches.  
   - *Coverage depth*: for every claim in *g*, there exists at least one document with confidence ≥ \(c_{\min}\).

4. **Non‑obvious insight** – *document diversity is more valuable than sheer quantity*. A single highly relevant doc can dominate the set, but a diverse small set captures orthogonal evidence paths, reducing the risk of systematic bias and improving robustness to domain shift.

These guidelines emerge from optimizing for both information fidelity (precision) and logical completeness (coverage), ensuring that RAG outputs are grounded, verifiable, and resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
