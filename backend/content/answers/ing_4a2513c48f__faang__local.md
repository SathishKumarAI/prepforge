---
qid: ing_4a2513c48f__faang__local
question: 'Explain: Why we did not build this on a single vector index'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 622
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:54-05:00'
sources: []
---

**Clarify**  
You’re asking why the team chose not to implement the new search feature using a *single* vector index (e.g., one large FAISS/Annoy table). I’ll assume:  
1) The system must serve millions of documents across multiple domains (news, research, user‑generated content).  
2) Queries vary in length, modality, and relevance criteria.  
3) Latency < 200 ms per request and uptime > 99.9 % are mandatory.

**Approach**  
1. Identify the limitations of a monolithic index (scalability, heterogeneity, update latency).  
2. Propose a multi‑index architecture: domain‑specific shards + an orchestrator that routes and merges results.  
3. Explain how this design meets SLAs and future extensibility.

**Depth**  

| Limitation | Reasoning |
|------------|-----------|
| **Scalability** | A single index grows quadratically in memory for high‑dimensional vectors; adding a new domain forces re‑indexing the entire table, causing downtime. |
| **Heterogeneity** | Different domains have distinct vector distributions (e.g., 300‑d text vs 128‑d image embeddings). One distance metric or hyperparameter set cannot be optimal for all. |
| **Update Latency** | Bulk updates on a large index take minutes; near‑real‑time ingestion would degrade performance. |
| **Fault Isolation** | A bug in one domain’s vectors corrupts the whole index, impacting all users. |

**Multi‑index solution**  
- *Shard per domain* (or per vector type). Each shard uses tuned hyperparameters and can be updated independently.  
- An *Orchestrator* receives a query, identifies relevant shards via metadata or lightweight prefiltering, queries them in parallel, then merges top‑k results with re‑ranking.  
- Complexity: Query latency ≈ max(shard latency) + merge overhead; with 10 shards and 200 ms per shard, overall < 250 ms.  
- Trade‑off: Slightly higher memory (duplicate index metadata) but negligible compared to the benefits.

**Edge cases**  
- Cross‑domain queries that require cross‑shard similarity (e.g., a user searching “AI in healthcare” may hit both medical and tech shards). Test merging logic for duplicates.  
- Shard imbalance: some domains may have far more vectors; monitor load and auto‑scale shards.  
- Failures: ensure graceful degradation if one shard is down.

**Optimize & Communicate**  
Explain that this architecture allows incremental scaling (add a new domain without touching existing ones), continuous deployment of embeddings, and fine‑grained monitoring. If we later adopt multimodal models, each modality can get its own shard. Conclude by highlighting how the multi‑index design aligns with SLAs, reduces risk, and keeps the system flexible for future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
