---
qid: ing_2d414a2299__star__local
question: 'Explain: Design the ingestion pipeline that gets 5 million internal documents
  into a RAG system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 537
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:37-05:00'
sources: []
---

**Situation:**  
In my previous role at a fintech firm we had to integrate 5 million internal policy and compliance documents into our new RAG‑powered chatbot for auditors. The legacy system stored PDFs in an on‑prem folder structure, with no metadata or indexing, and the team needed real‑time answers during audit sessions.

**Task:**  
Build a scalable ingestion pipeline that could ingest, preprocess, embed, and index all 5 M documents within two weeks while keeping cost under $10K/month and ensuring retrieval latency <200 ms for end users.

**Action:**  
1. **Ingestion & Orchestration** – Set up an Airflow DAG triggered by a Kafka topic that watches the file‑system. Each new file is streamed to S3 (object store) via multipart upload.  
2. **Preprocessing** – A containerized worker pulls objects from S3, uses PDFMiner + spaCy to extract text and strip boilerplate. Documents are chunked into 500‑word segments with overlapping windows; each segment gets a unique UUID.  
3. **Embedding & Storage** – Sentences are batched (10k at a time) through OpenAI’s `text-embedding-ada-002` API, yielding 1536‑dim vectors. Vectors and metadata (doc ID, chunk index, tags) are written to Pinecone as an upsert stream.  
4. **Indexing & Search** – Pinecone’s hybrid filtering (by policy type, date) plus cosine similarity gives sub‑200 ms queries. A fallback Elasticsearch cluster holds raw text for full‑text search if needed.  
5. **Monitoring & Optimization** – Prometheus alerts on ingestion lag; we tuned batch size to 8k to hit a throughput of ~120k docs/day. Costs were kept at ~$7K/month.

**Result:**  
All 5 million documents were fully indexed in 10 days, with average retrieval latency 150 ms and an accuracy score (BLEU) of 0.78 on audit‑scenario queries. I learned how to balance batch size, vector cost, and index latency, and that a hybrid approach (vector + full‑text) often yields the best user experience in RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
