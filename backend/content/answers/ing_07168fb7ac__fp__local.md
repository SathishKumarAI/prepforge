---
qid: ing_07168fb7ac__fp__local
question: 'Explain: The RAG Taxonomy — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 472
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:59-05:00'
sources: []
---

### RAG Taxonomy – From Problem to Principle  

The core problem of **Retrieval‑Augmented Generation (RAG)** is *how to endow a language model with verifiable, up‑to‑date knowledge without retraining it on every new fact*.  The taxonomy decomposes this into three interlocking stages, each grounded in a distinct scientific principle.  

| Stage | Fundamental Idea | Why It Must Be That Way |
|-------|------------------|------------------------|
| **Retrieval** | Build an *index* of documents represented by vector embeddings → *Nearest‑Neighbour Search*. | Retrieval is a combinatorial optimisation: we want the highest‑scoring set of passages under a similarity metric.  The index must be searchable in sub‑linear time, hence tree/LSH structures. |
| **Augmentation** | Rank retrieved passages, filter for relevance (probabilistic TF‑IDF + semantic similarity), and concatenate into a prompt. | This is *information fusion*: the model’s input space grows exponentially with passage length; we must compress relevance to avoid noise that causes hallucination. |
| **Generation** | Condition the LLM on the augmented prompt, decoding with temperature/beam control. | The generation step solves a constrained optimisation over token probabilities given the new context—essentially Bayesian inference with an engineered prior (the retrieved content). |

#### Non‑obvious Insight  
Most practitioners treat retrieval as a black box, but **recall vs. precision trade‑off directly controls hallucination risk**.  A high‑recall system supplies more facts, increasing coverage but also the chance of spurious tokens; a high‑precision system limits noise but may miss critical context.  Balancing this via *temperature scaling* or *adaptive prompt length* is the key lever that turns RAG from a brittle pipeline into a robust knowledge engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
