---
qid: ing_38bdd2f709__faang__local
question: 'Explain: 2.2 Text Chunking Strategies for RAG — Graph-Aware Late Chunking
  for Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 419
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:21-05:00'
sources: []
---

**Clarify**  
We’re asked how *Graph‑Aware Late Chunking* (GALC) improves Retrieval‑Augmented Generation (RAG) on biomedical papers.  
Assumptions:  
1. The source is a set of long, citation‑rich PDFs.  
2. A knowledge graph (KG) exists linking entities and citations.  
3. We have a downstream QA or summarization model that consumes chunks.

**Approach**  
1. **Graph construction** from the document corpus (nodes = sections/paragraphs; edges = citations).  
2. **Late chunking**: defer splitting until after the KG is built, so each chunk inherits graph context.  
3. **Chunk selection** during retrieval uses graph‑aware similarity (e.g., node embeddings + edge weights) rather than plain TF‑IDF.

**Depth**  
- *Graph encoding*: use a Graph Neural Network to embed nodes; embeddings capture topical cohesion and citation influence.  
- *Chunking rule*: merge adjacent paragraphs until the combined embedding distance exceeds a threshold, ensuring semantic coherence.  
- *Retrieval*: score candidate chunks by cosine similarity of query‑to‑chunk embeddings plus a citation relevance bonus (edge strength).  
- *Complexity*: KG construction O(E), chunking linear in document size; retrieval remains O(N) with pre‑computed indices.  

**Edge Cases**  
- Sparse citations → fallback to keyword‑based chunking.  
- Highly cross‑referenced sections may form oversized chunks—apply a max‑size cap.  
- Multi‑language abstracts: ensure embeddings support multilingual contexts.

**Optimize & Communicate**  
- *Performance*: batch GNN inference; cache graph embeddings.  
- *Explainability*: expose citation paths used in retrieval to the user.  
- *Narrative*: “By building the KG first, we let citations guide chunk boundaries, yielding semantically tight units that a language model can attend to more effectively.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
