---
qid: ing_353d8a90cc__faang__local
question: 'Explain: Scaling & ops — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 588
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:42-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to explain how an enterprise‑grade Retrieval‑Augmented Generation (RAG) assistant scales and operates in production. Key assumptions:  
- Large knowledge base (TBs of documents, multi‑tenant).  
- Real‑time query latency ≤ 200 ms per user.  
- High availability (99.9 %) and compliance with data‑privacy regulations.

**2️⃣ Approach**  
1. **Data ingestion & indexing** – chunking, embeddings, vector store sharding.  
2. **Query pipeline** – request routing → relevance search → top‑k retrieval → generation.  
3. **Infrastructure** – stateless microservices + GPU/TPU pools, autoscaling, CDN for static assets.  
4. **Observability & governance** – metrics, alerts, audit logs, model cards.

**3️⃣ Depth**  
- *Indexing*: Use hierarchical embeddings (e.g., Sentence‑Transformers) stored in a distributed vector DB (Pinecone/Weaviate). Shard by tenant and embed‑vector dimension. Persist raw docs in an object store; keep metadata in a relational DB for filtering.  
- *Retrieval*: Approximate nearest neighbor (ANN) via HNSW or Faiss; batch query to reduce round trips. Cache frequent queries with LRU policy.  
- *Generation*: Deploy transformer models on GPU autoscaling groups; use model distillation for latency‑budget compliance. Pass retrieved docs as prompt context, enforce length limits.  
- *Scaling*: Horizontal scaling of retrieval nodes (stateless) behind a load balancer; GPU pods scale via K8s HPA based on request rate. Use spot instances with checkpointing to cut cost.  
- *Ops*: CI/CD pipelines for model roll‑outs, A/B testing, data drift alerts. Employ chaos engineering to test failover.

**4️⃣ Edge Cases**  
- **Cold start**: Missing embeddings → fallback to keyword search.  
- **Shard imbalance**: Use dynamic rebalancing; monitor query latency per shard.  
- **Regulatory breach**: Ensure data residency by geo‑partitioning and encryption at rest.  
- **Model hallucination**: Apply post‑generation sanity checks (e.g., factuality classifiers).

**5️⃣ Optimize & Communicate**  
- Reduce embedding cost via caching and incremental updates.  
- Use quantized models (INT8) for inference speed without sacrificing accuracy.  
- Narrate trade‑offs clearly: e.g., higher recall → more tokens → latency vs. user satisfaction.  
- Present a simple diagram of the request flow, highlighting bottlenecks and monitoring points.  

*Result*: A robust, elastic RAG system that meets enterprise SLAs while staying cost‑effective and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
