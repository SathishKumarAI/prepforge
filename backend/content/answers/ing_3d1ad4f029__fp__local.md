---
qid: ing_3d1ad4f029__fp__local
question: 'Explain: GraphRAG Architecture — Graph Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 393
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:12-05:00'
sources: []
---

**Graph‑RAG: A principled retrieval–augmented generation for graph data**

The core problem is *how to inject structured knowledge into a language model without drowning it in raw edges*.  
A naive approach concatenates adjacency lists or dumps the whole graph; both break the transformer’s positional assumptions and explode input length.  
Graph‑RAG reframes the task as **probabilistic inference on a joint space** \(P(\text{output} \mid \mathbf{x}, G)\).  
It introduces two modules:

1. **Graph encoder** – a message‑passing network that compresses each node’s local subgraph into a dense vector \(h_v\).  
   By iteratively aggregating neighbours, it respects the *Markov blanket* of \(v\), ensuring that only locally relevant information influences \(h_v\).

2. **Retriever + prompt generator** – given an input query \(\mathbf{x}\) and a target node \(t\), it selects a minimal set of subgraphs whose embeddings are most similar to \(t\)’s embedding (cosine similarity).  
   These subgraphs are then formatted as natural‑language prompts that the language model can consume.

The *non‑obvious insight* is that **subgraph selection is an instance of optimal transport**: we’re transporting probability mass from the query to relevant graph regions. By solving a lightweight earth‑mover problem, Graph‑RAG guarantees that the retrieved context is both semantically coherent and size‑bounded, yielding faster inference and higher fidelity answers than flat retrieval.

Thus, Graph‑RAG is not just a “graph + LLM” hack; it’s an application of *information bottleneck* to structured data, ensuring every token added carries maximal mutual information with the target output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
