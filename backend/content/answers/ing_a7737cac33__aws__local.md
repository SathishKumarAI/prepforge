---
qid: ing_a7737cac33__aws__local
question: 'Explain: 3.1.4 Knowledge Graph Infusion — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 466
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:04-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a project to build a retrieval‑augmented generation (RAG) system for clinical decision support. The challenge was that biomedical literature is highly heterogeneous and contains domain knowledge best captured in a *knowledge graph*. We needed to integrate the graph into the late‑chunking phase so that the language model could ground its answers in structured facts.

**Action – Technical Design**  
1. **Graph ingestion**: Parsed PubMed abstracts with spaCy, extracted entities, and stored triples in **Amazon Neptune** (graph database).  
2. **Chunking pipeline**: A Step Functions workflow triggers a Lambda that chunks PDFs into 512‑token segments, then enriches each chunk by querying Neptune for related nodes (using Gremlin).  
3. **Retrieval & Generation**: Chunks and their graph embeddings are indexed in **OpenSearch** on S3, queried by SageMaker’s RAG endpoint powered by a fine‑tuned **BERT+GPT‑4** model.  
4. **Scalability & Cost**: Neptune scales to 10 M triples with multi‑AZ replication; Lambda auto‑scales for parallel chunking (≈$0.05 per chunk). OpenSearch handles 50k queries/sec at <$200/day.  

**Result**  
- Accuracy of generated clinical recommendations improved from **68% to 92%** (BLEU & domain expert score).  
- Query latency dropped from 4 s to <500 ms, enabling real‑time use in EMR dashboards.  
- Total cost per month fell by **35%** versus a monolithic LLM approach.

**Reflection**  
I *owned* the cross‑team coordination, *dive deep* into Neptune’s query limits, and learned that caching frequent subgraphs in DynamoDB reduced latency further—an iterative improvement we shipped in Q3.  

> *Leadership Principles*: **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
