---
qid: ing_1eb365f7d3__fp__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 407
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:27-05:00'
sources: []
---

**When to pick Retrieval‑Augmented Generation (RAG) vs. fine‑tuning**

The core problem is *knowledge representation*.  
Fine‑tuning rewrites the model’s internal weights so that its implicit distribution \(P_\theta(\text{output}\mid\text{input})\) reflects a new corpus. It works best when:

1. **Stable, domain‑specific knowledge**: the training data are large, consistent, and unlikely to change (e.g., medical guidelines).  
2. **High‑precision outputs**: you need deterministic, repeatable responses, so that the model’s likelihood surface is well‑constrained by loss minimization.  
3. **Limited inference budget**: once fine‑tuned, inference is cheap; no external index lookup.

RAG solves a different optimization problem—*online conditioning*. It augments \(P(\text{output}\mid\text{input}, \mathcal{D})\) with retrieved documents \(\mathcal{D}\), effectively shifting the posterior by an evidence term. This is preferable when:

1. **Rapidly evolving knowledge**: updates are cheap—add a new document to the index instead of retraining.  
2. **Massive, sparse corpora**: fine‑tuning would require prohibitive data and compute; retrieval scales logarithmically with size.  
3. **Explainability**: the model can point to evidence, satisfying regulatory or audit needs.

A non‑obvious insight: *retrieval acts as a regularizer for the language model’s hidden space*. By conditioning on concrete snippets, RAG forces the decoder to stay close to factual embeddings, reducing hallucinations without altering the base weights. Thus, in settings where factuality outweighs marginal gains from weight updates, RAG is the mathematically cleaner choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
