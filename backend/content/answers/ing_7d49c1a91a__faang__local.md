---
qid: ing_7d49c1a91a__faang__local
question: 'Explain: Design the data platform for a company-wide AI assistant.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 540
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:26-05:00'
sources: []
---

**1️⃣ Clarify**  
We need an end‑to‑end data platform that feeds a single, company‑wide AI assistant (chatbot + recommendation engine). Assume: • Multiple source systems (HR, finance, CRM, knowledge bases) • Users across 10 k employees • Data privacy & compliance requirements (GDPR, internal policies) • Real‑time and batch workloads.  

**2️⃣ Approach**  
1. *Data ingestion*: Event‑driven streams (Kafka/Kinesis) + scheduled ETL jobs.  
2. *Storage layer*: Unified lakehouse – raw lake on S3/Blob, curated tables in Delta/Parquet.  
3. *Catalog & governance*: Glue/Data Catalog + LakeFS for versioning.  
4. *Feature store*: MLflow‑compatible, serving high‑velocity feature vectors to the assistant.  
5. *Serving layer*: FastAPI endpoints backed by vector DB (Pinecone or Milvus) for semantic search; RAG pipelines with LangChain.  
6. *Security*: Role‑based IAM, encryption at rest/in transit, audit logs.  

**3️⃣ Depth**  
- **Ingestion**: Kafka topics per domain, schema registry, Debezium CDC for OLTP sources.  
- **Lakehouse**: Delta Lake provides ACID, time travel; partition by date & source.  
- **Feature Store**: Online store (Redis) + offline (Delta) with caching via Caching‑layer.  
- **Serving**: Vector DB indexes vectors, supports approximate nearest neighbor queries in <10 ms. LangChain orchestrates prompt generation, LLM calls, and knowledge retrieval.  
- **Scalability**: Auto‑scaling compute (K8s + Spot), multi‑region replication for latency.  

**4️⃣ Edge Cases**  
- *Schema drift*: Detect via schema registry; auto‑migrate or quarantine data.  
- *Data privacy*: Mask sensitive columns before storage; enforce access control per user role.  
- *Cold start*: Pre‑warm vector indices and LLM embeddings to avoid lag for first queries.  

**5️⃣ Optimize & Communicate**  
- Benchmark latency: aim <200 ms for query response, use caching layers.  
- Cost: Spot instances + serverless functions reduce spend; monitor with CloudWatch/Prometheus.  
- Narration: “We built a modular lakehouse that turns heterogeneous data into searchable embeddings, enabling the AI assistant to answer questions in real time while satisfying compliance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
