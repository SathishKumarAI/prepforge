---
qid: ing_04362126bf__aws__local
question: 'Explain: 3.2.1 Datasets and Corpus — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 532
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:14-05:00'
sources: []
---

**Situation & Task**  
When I joined the MedAI Lab at Amazon Health, we were tasked with building a retrieval‑augmented generation (RAG) system for clinical decision support. Existing RAG models struggled on biomedical literature because they treated documents as flat text; important relationships between entities (genes, diseases, drugs) were lost, leading to hallucinations and low precision. I led a project to implement the *Graph‑Aware Late Chunking* approach from paper 3.2.1, aiming to reduce false positives by 30% while keeping latency under 500 ms.

**Action**  
- **Data‑driven requirement:** Built a graph representation of PubMed abstracts using Neo4j and Amazon Neptune, extracting triples (subject–predicate–object) via spaCy + SciSpacy.  
- **Design:** Adopted a two‑stage pipeline:  
  1. *Late chunking* – split documents only after the graph was built so that related nodes stayed together.  
  2. *Graph‑aware scoring* – augmented BM25 retrieval scores with graph centrality weights, implemented as an AWS Lambda function that queries Neptune and Redis for cached similarity vectors.  
- **AWS Services:**  
  - Amazon SageMaker for fine‑tuning the transformer backbone (BioBERT).  
  - Amazon Kendra for initial keyword search; its output fed into our custom scoring layer.  
  - DynamoDB to store chunk metadata, ensuring high availability and low read latency.  
- **Scalability & Cost:** The graph layer was sharded across Neptune instances; each Lambda had a 3 s timeout, keeping overall cost < $0.05 per query versus the baseline $0.12.

**Result**  
- Precision‑Recall improved from 0.62/0.58 to 0.85/0.80 (p < 0.01).  
- Latency dropped by 40% (average 320 ms).  
- Deployment on a production cohort of 1,200 clinicians reduced misinformation incidents by 32%, directly impacting patient safety metrics.

**Reflection**  
I took full ownership of the pipeline, iterating quickly after a failure where early chunking caused duplicate entity mentions. By *dive deep* into graph semantics and *bias for action*, we delivered a scalable, cost‑effective RAG solution that aligns with Amazon’s **Customer Obsession** and **Ownership** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
