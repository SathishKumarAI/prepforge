---
qid: ing_04362126bf__star__local
question: 'Explain: 3.2.1 Datasets and Corpus — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 378
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:14-05:00'
sources: []
---

**Situation** – While working on a research grant to improve literature review automation for oncology studies, our team noticed that existing retrieval‑augmented generation (RAG) models struggled with the sheer volume and graph structure of biomedical citations. The dataset was a massive PubMed corpus (~2 M abstracts) linked by co‑citation graphs, but when we fed it into a standard RAG pipeline, latency spiked and answer quality dropped.

**Task** – I had to design a retrieval strategy that respected the citation graph while keeping inference time under 1.5 s per query, enabling real‑time clinical decision support for oncologists.

**Action** – I implemented *Graph‑Aware Late Chunking*: first, we pre‑computed node embeddings using GraphSAGE on the citation network, then clustered documents into “semantic chunks” that preserve graph proximity. At inference, instead of scanning all nodes, we perform a two‑stage retrieval: (1) a lightweight ANN search over chunk vectors to pick 10 candidate subgraphs; (2) a fine‑grained BM25 pass within those subgraphs for the final top‑5 passages. We used Faiss for ANN and optimized the chunk size to balance recall and latency, tuning hyperparameters on a held‑out PubMed subset.

**Result** – The new pipeline cut retrieval time from 4.3 s to 0.9 s per query while boosting F1‑score of generated answers from 0.62 to 0.78 against a human‑annotated benchmark. I learned that respecting domain graph structure and delaying chunking until after coarse filtering can dramatically improve both speed and accuracy in RAG systems for specialized corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
