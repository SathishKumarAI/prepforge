---
qid: ing_203d66abed__faang__local
question: 'Explain: Design a RAG system over an enterprise''s data: 10M documents
  in object storage plus structured tables, with per-user access controls. Walk me
  through the architecture and how you''d evaluate it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 525
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:32-05:00'
sources: []
---

**Clarify**  
We need a Retrieval‑Augmented Generation (RAG) system that ingests ~10 M unstructured docs in object storage + relational tables, enforces per‑user ACLs, and serves LLM queries with relevant context. Key assumptions: 1) documents are mostly PDFs/text; 2) user traffic ≈ 5k QPS; 3) latency target ≤ 500 ms; 4) compliance requires audit trails.

**Approach**  
1. **Ingestion pipeline** – Batch ETL (Apache NiFi) → text extraction, schema‑aware parsing of tables into JSON.  
2. **Vector store** – Sharded vector DB (Pinecone/Weaviate) with embeddings from a domain‑tuned model. Store metadata: doc_id, owner_group, access_tags.  
3. **Access layer** – Policy engine (OPA) that filters vectors per request using ACL tags.  
4. **Query flow** – Front‑end → API gateway → RAG orchestrator → retrieve top‑k vectors → LLM prompt + context → response. Use a lightweight LLM (e.g., open‑source 8B) for low latency.  
5. **Audit & monitoring** – Log every retrieval and generation; use Prometheus/Grafana dashboards.

**Depth**  
- **Embedding cost**: ≈ 0.001 $ per doc → $10k/month.  
- **Vector DB**: O(log N) search, 2‑byte distance metric.  
- **Scalability**: Horizontal scaling of vector shards; auto‑scaling of orchestrator pods.  
- **Security**: Encrypt at rest (SSE), TLS in transit, IAM roles for API gateway.

**Edge Cases**  
- *Permission gaps*: test with users having no access → should return empty context.  
- *Data drift*: periodic re‑embedding after model updates.  
- *Large tables*: ensure tabular embeddings preserve schema semantics.

**Optimize & Communicate**  
- Cache frequent queries in Redis to shave 50 ms latency.  
- Use a two‑stage retrieval: coarse filter by metadata, fine filter by cosine distance.  
- Explain trade‑offs: larger model → richer context but higher cost; more shards → lower latency but higher operational overhead.  

This architecture balances performance, security, and maintainability while providing clear metrics for evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
