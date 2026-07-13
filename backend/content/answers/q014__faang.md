---
qid: q014
question: "What is Retrieval-Augmented Generation (RAG)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the architecture (retrieve-then-generate), the motivation, and the trade-offs versus fine-tuning.

**Approach** — Explain the problem RAG solves, walk the pipeline, then cover failure modes and design levers.

**Depth** — RAG augments an LLM's generation with external knowledge fetched at query time, so answers are grounded in a document corpus rather than only the model's frozen parametric memory. Pipeline: documents are chunked and embedded into vectors stored in a vector database (offline indexing). At query time, the user's question is embedded, the most semantically similar chunks are **retrieved** (nearest-neighbor search, often plus keyword/hybrid search and reranking), and those chunks are injected into the prompt as context. The LLM then **generates** an answer conditioned on the retrieved evidence, often with citations. This reduces hallucination, enables fresh/proprietary knowledge without retraining, and makes answers traceable.

**Edge cases** — Failure modes: retrieval misses relevant chunks (bad chunking/embeddings), retrieves irrelevant context that distracts the model, or the answer spans multiple chunks. Stale indexes, context-window limits, and conflicting sources also hurt. Garbage retrieval yields confident wrong answers.

**Optimize & communicate** — Levers: better chunking, hybrid retrieval, reranking, query rewriting, and evaluating retrieval and generation separately. I'd contrast: RAG for dynamic/factual knowledge and citations; fine-tuning for behavior/format. Framing RAG as "open-book exam for the LLM" gives the interviewer an instant, accurate mental model.
