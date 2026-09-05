---
qid: ing_1dda1ec981__star__local
question: 'Explain: Graph-Aware Late Chunking for Retrieval-Augmented Generation in
  Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:28-05:00'
sources: []
---

**Situation** – While leading the NLP team at a medical AI startup, we were tasked with building a retrieval‑augmented chatbot to answer clinicians’ questions about rare diseases. Our initial system used flat keyword search over PubMed abstracts; recall was only 68 % and latency spiked at 1.2 s per query.

**Task** – Improve recall above 85 % while keeping response time under 0.8 s, by leveraging the graph structure of biomedical literature (author‑paper, paper‑citation, ontology) in the retrieval step.

**Action** – I introduced Graph‑Aware Late Chunking: first we chunk each abstract into sentence‑level vectors, then attach them to nodes in a citation graph. During query processing, we embed the question and perform a two‑stage search—(1) a fast node‑level nearest neighbor on the graph to narrow candidate papers, (2) a late‑chunked re‑ranking that weighs sentence relevance by its graph centrality and ontology distance. We implemented this with PyTorch Geometric for graph ops, FAISS for vector search, and integrated it into our FastAPI service.

**Result** – Recall jumped from 68 % to 87 %, latency dropped to 0.6 s, and user satisfaction scores increased by 23 %. I learned that marrying dense retrieval with structural knowledge yields both speed and accuracy gains in domain‑specific NLP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
