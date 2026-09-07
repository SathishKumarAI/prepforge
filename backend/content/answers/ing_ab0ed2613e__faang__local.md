---
qid: ing_ab0ed2613e__faang__local
question: 'Explain: Document Ingestion Pipeline — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 542
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:22:19-05:00'
sources: []
---

## Clarify  
You’re asking for a high‑level design of an **Enterprise Retrieval‑Augmented Generation (RAG) pipeline** that ingests corporate documents, indexes them, and feeds the knowledge base to downstream LLMs.  
Key assumptions:  
- Sources include PDFs, Word docs, SharePoint, email archives, and web intranet pages.  
- Scale: millions of pages, multi‑TB storage, 24/7 ingestion.  
- Latency: embeddings ready within seconds for real‑time queries.  

## Approach  
1. **Ingestion & Normalization** – connectors → de‑duplication → OCR + NER → plain text.  
2. **Chunking & Embedding** – sliding windows (≈500 tokens) → GPU‑accelerated transformer encoder.  
3. **Vector Index** – FAISS/Elastic Vector Search with HNSW, sharded across nodes for horizontal scaling.  
4. **Metadata Layer** – store source, author, timestamps in a relational DB for filtering and audit.  
5. **Retrieval Service** – vector query → top‑k docs → text concatenation + prompt engineering → LLM (e.g., GPT‑4o).  

## Depth  
- **Chunk size vs. coherence**: 512–1024 tokens balances semantic fidelity with retrieval speed.  
- **Embedding model**: use a domain‑tuned Sentence‑Transformer; fine‑tune on internal corpora to improve relevance.  
- **Vector index ops**: approximate nearest neighbor search (HNSW) gives sub‑millisecond latency at 10⁶ vectors.  
- **Scalability**: Kafka for ingestion streams, Spark/Beam for batch transforms, Kubernetes for auto‑scaling.  

## Edge Cases  
- **OCR errors** → confidence thresholds; fallback to human review.  
- **Outdated docs** → versioning in metadata, TTL on embeddings.  
- **Privacy leaks** → tokenization of PII before indexing; enforce access controls at query time.  

## Optimize & Communicate  
- **Batch embedding** reduces GPU cost (cost ~ $0.03 per 1k tokens).  
- **Cache recent queries** to cut LLM calls.  
- Explain trade‑offs: exact vs. approximate search, latency vs. recall.  
- Present a simple diagram in the interview deck and walk through a single request path from query to answer.  

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
