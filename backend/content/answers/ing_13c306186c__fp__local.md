---
qid: ing_13c306186c__fp__local
question: Design the smallest RAG system that could work for "chat with our docs."
  When do you need more - and when is RAG the wrong call?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 622
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:25-05:00'
sources: []
---

**Why a Retrieval‑Augmented Generation (RAG) system is needed**

When the goal is *to speak about documents* rather than *to generate arbitrary text*, the model must anchor its responses to concrete facts. A language model alone relies on statistical patterns learned during pre‑training; it can hallucinate or drift from the source material. Retrieval supplies a bounded, up‑to‑date evidence set that the generator can cite, turning the system into a *probabilistic inference engine* over the document corpus.

**Smallest viable architecture**

| Component | Minimum size | Why it suffices |
|-----------|--------------|----------------|
| **Index** | FAISS flat L2 on 1536‑dim vectors (≈ 512 B per vector) | Linear scan is acceptable for < 10k docs; no hyper‑parameter tuning needed. |
| **Retriever** | One forward pass of a sentence‑embedding model (e.g., *sentence‑transformers/all-MiniLM-L12-v2*) | Embedding cost ≈ 0.5 ms per query on GPU; accuracy ~90 % for topical recall. |
| **Generator** | GPT‑NeoX 125M or LLaMA‑7B with a single fine‑tune pass (≈ 30 k tokens) | Small enough to run in real time, yet expressive enough to stitch retrieved snippets into coherent dialogue. |

Pipeline:  
1. Encode user query → dense vector.  
2. Retrieve top‑k (k=3–5) passages via FAISS.  
3. Concatenate query + passages as prompt; feed to generator.  

**When to scale up**

- **Recall needs > 95 %**: switch to approximate nearest neighbor indices (IVF, HNSW) or use sparse‑vector retrieval (BM25 + dense fusion).  
- **Long documents (> 50 k tokens)**: segment and index at paragraph level; optionally add hierarchical retrieval.  
- **Multi‑turn context**: cache previous turns in the prompt or use a lightweight dialogue state tracker.

**When RAG is the wrong call**

1. **Purely generative tasks** (creative writing, brainstorming) – pre‑training alone suffices.  
2. **Low‑latency micro‑services** where embedding cost dominates; a lightweight rule‑based FAQ lookup may be cheaper.  
3. **Highly regulated environments** requiring deterministic outputs – retrieval can introduce nondeterminism unless the index is static and fully auditable.

*Non‑obvious insight*: Treating the retrieved snippets as *soft evidence* lets the generator implicitly perform Bayesian updating—each snippet’s relevance weight is learned during fine‑tuning, so the system naturally balances confidence against factuality without hard post‑processing. This probabilistic view explains why a tiny retriever can dramatically reduce hallucinations while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
