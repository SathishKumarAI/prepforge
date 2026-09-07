---
qid: ing_27277d9c69__faang__local
question: 'Explain: Tenant-Aware Ingestion — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 490
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:43-05:00'
sources: []
---

**Clarify**

The interview asks for a design of *Tenant‑Aware Ingestion* that powers a **Production Retrieval‑Augmented Generation (RAG)** system at scale.  
Assumptions:  
1. Multiple tenants generate logs/events continuously.  
2. Data must be stored, indexed, and made queryable for RAG in real time.  
3. Tenants are isolated (security & billing).  
4. System needs low latency (<200 ms) and high throughput (>10k events/s).

**Approach**

1. **Ingestion Layer** – publish‑subscribe queue per tenant or a sharded topic.  
2. **Pre‑processing** – worker pool that normalizes, enriches, and assigns tenant ID.  
3. **Storage** – append‑only immutable store (e.g., Bigtable/Parquet on GCS) with partition key = tenant+date.  
4. **Indexing** – inverted index per tenant in a distributed search engine (Elastic or Solr).  
5. **RAG Retrieval** – vector embeddings stored in a nearest‑neighbor service; each vector tagged with tenant ID.

**Depth**

- *Throughput*: Queue partitions ≈ events/s × 10 → horizontal scaling.  
- *Latency*: Worker latency <50 ms, indexing <100 ms, query ≤200 ms.  
- *Isolation*: All tables/indices have a tenant prefix; access control via IAM policies.  
- *Consistency*: Eventual consistency is acceptable for RAG; use write‑ahead logs to recover.

**Edge Cases**

- Sudden spike (burst) → auto‑scale workers and queue partitions.  
- Tenant churn (new/delete) → dynamic schema updates, clean‑up jobs.  
- Corrupt data → validation step with checksum; bad records routed to a dead‑letter topic.

**Optimize & Communicate**

To improve cost, use tiered storage: hot tier for last 7 days, cold tier for older data. For latency, cache recent embeddings in an LRU per tenant. I’d explain the trade‑off between strict isolation (more partitions) and resource sharing (fewer partitions). Finally, stress that monitoring dashboards show per‑tenant metrics to detect SLA violations early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
