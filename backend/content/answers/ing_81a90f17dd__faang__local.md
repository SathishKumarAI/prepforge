---
qid: ing_81a90f17dd__faang__local
question: 'Explain: High-Level Architecture — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 543
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:08-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to sketch a *high‑level architecture* for an **Enterprise Retrieval‑Augmented Generation (RAG)** system—i.e., a production‑grade pipeline that fetches relevant documents from corporate knowledge bases and feeds them into a generative LLM to produce context‑aware responses. Key assumptions:  
- Data resides in heterogeneous sources (DBs, internal wikis, PDFs).  
- The LLM is hosted behind an API gateway; we can’t store the entire corpus inside it.  
- Latency < 500 ms for user queries and compliance with data‑privacy policies.

**2️⃣ Approach**  
1. **Ingestion & Embedding Layer** – extract text → chunk → embed (e.g., OpenAI/FAISS).  
2. **Vector Store & Indexing** – scalable vector DB (Pinecone, Weaviate) with sharding & replication.  
3. **Retrieval Service** – REST/GraphQL API that accepts a query, returns top‑k vectors + metadata.  
4. **LLM Orchestration** – serverless function or microservice that builds prompt = user + retrieved docs → calls LLM API.  
5. **Post‑processing & Caching** – format response, cache frequent answers (Redis).  
6. **Observability** – logs, metrics (latency, hit‑rate), audit trail for compliance.

**3️⃣ Depth**  
- **Embeddings:** fine‑tune on domain data; use 768‑dim vectors.  
- **Indexing:** HNSW + IVF for sub‑millisecond ANN queries at scale (~10M docs).  
- **LLM Prompt Engineering:** structured prompt template, include doc IDs for auditability.  
- **Security:** encrypt data at rest (KMS), token‑based auth, VPC isolation.

**4️⃣ Edge Cases**  
- Empty or ambiguous query → fallback to FAQ or ask clarification.  
- Outdated embeddings after policy changes → incremental re‑embedding pipeline.  
- Rate limits from LLM API → request queueing & exponential backoff.  

**5️⃣ Optimize & Communicate**  
- **Performance:** batch vector queries, keep index in memory; use CDN for static assets.  
- **Cost:** spot instances for embedding jobs, auto‑scaling for retrieval service.  
- **Narrative:** explain trade‑offs (latency vs. freshness), how each component satisfies enterprise SLAs and compliance, and why we chose specific tech stacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
