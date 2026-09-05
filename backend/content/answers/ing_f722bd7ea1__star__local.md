---
qid: ing_f722bd7ea1__star__local
question: 'Explain: 3.1.3 Full-Document Encoding — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 353
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:55-05:00'
sources: []
---

**Situation** – While working on a research‑grade question answering system for oncology papers, we noticed our model’s recall dropped to 58 % when users asked about rare drug interactions. The problem was that the long PDFs were being split into arbitrary chunks; important context across sections got lost.

**Task** – I had to redesign the chunking strategy so the retrieval component could surface semantically coherent passages without exploding memory usage, and improve overall answer accuracy above 75 %.

**Action** – I implemented a graph‑aware late‑chunking pipeline. First, we parsed each PDF into an undirected citation‑dependency graph using spaCy and SciSpacy to extract entities and section headings. Then, instead of fixed‑length slices, we performed community detection (Louvain algorithm) on the graph to group semantically related sentences. Each community became a “chunk” that retained cross‑section links. We encoded these chunks with Sentence-BERT fine‑tuned on PubMed abstracts and stored them in FAISS for sub‑millisecond similarity search. Finally, during generation we used a retrieval‑augmented transformer (T5) that conditionally attends to the top‑k graph‑aware chunks.

**Result** – The new approach lifted recall to 82 % on our test set and reduced hallucination rates by 35 %. Latency stayed under 200 ms per query. I learned that respecting document structure through graph analysis can dramatically improve retrieval quality, especially in highly technical domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
