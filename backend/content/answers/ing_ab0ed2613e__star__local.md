---
qid: ing_ab0ed2613e__star__local
question: 'Explain: Document Ingestion Pipeline — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 357
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:01-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a knowledge‑base chatbot for the legal department. The team needed to ingest thousands of internal policy PDFs and case briefs into an RAG system, but our existing pipeline was slow—documents took up to 30 minutes to surface in search results, hurting user adoption.

**Task:**  
I had to design a scalable document ingestion workflow that could process new documents in under five minutes, maintain high‑quality embeddings for retrieval, and keep the storage cost low while ensuring compliance with data‑retention policies.

**Action:**  
I built an end‑to‑end pipeline using Kafka for streaming uploads, Apache Spark for distributed OCR and text extraction (Tesseract + spaCy), and a vector store in Pinecone. Embeddings were generated with Sentence‑BERT fine‑tuned on legal corpora. I added a metadata enrichment step that tagged documents by jurisdiction and risk level via a lightweight rule engine. For cost control, I compressed PDFs to WebP thumbnails and used tiered storage (hot SSD for recent docs, cold S3 for older ones). Continuous integration triggered re‑embedding when the model was updated.

**Result:**  
The new pipeline cut ingestion time from 30 minutes to 4 minutes per batch of 1,000 documents. Retrieval latency dropped by 70%, and user satisfaction scores rose from 68% to 92%. I learned that combining streaming, distributed processing, and domain‑specific embeddings is key to a robust enterprise RAG system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
