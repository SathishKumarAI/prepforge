---
qid: ing_8f50d55281__faang__local
question: 'Explain: Q: Design a RAG system that serves 10,000 queries per second across
  500 tenants with a p99 latency of 2 seconds.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 564
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:50-05:00'
sources: []
---

**Clarify**  
We need a Retrieval‑Augmented Generation (RAG) pipeline that can handle 10 k QPS for 500 tenants, each tenant having its own data slice. The end‑to‑end latency must be ≤ 2 s at the 99th percentile (p99). Assumptions: *per‑tenant embeddings and indexes are independent*, *model inference is batched*, *networking overhead is negligible*.

**Approach**  
1. **Sharding & autoscaling** – shard tenants by hash on a CDN edge; each shard runs its own vector index and inference microservice behind a load balancer that auto‑scales based on QPS.  
2. **Vector store** – use an approximate nearest neighbour (ANN) engine such as Milvus/FAISS with HNSW, tuned for 1 ms query per shard.  
3. **Batching** – aggregate incoming queries in 10 ms windows; batch 32–64 queries to the LLM to amortize GPU cost.  
4. **Caching** – keep a hot cache of top‑k embeddings per tenant (Redis) and an LRU cache for recent generated responses.  
5. **Observability** – instrument latency counters per tenant, auto‑trigger scaling when p99 > 1.8 s.

**Depth**  
- ANN query time ≈ 0.8 ms; batching adds 0.4 ms GPU warm‑up → ~1.2 ms.  
- LLM inference: 400 ms/10k tokens on a V100; with 32‑query batch = 12.5 ms per batch.  
- Total ≈ 13 ms + network ≈ 15 ms.  
With 500 tenants, we need ~30–40 GPU nodes to keep p99 < 2 s. Complexity: O(log N) ANN search; LLM inference linear in tokens. Trade‑off: higher batch size reduces cost but increases latency jitter.

**Edge cases**  
- Cold start of a new tenant → cache miss, longer latency.  
- Sudden traffic spike → autoscaler lag → p99 spikes.  
- Embedding drift → stale vectors → lower relevance. Test with synthetic bursts and gradual drift.

**Optimize & communicate**  
Explain how sharding isolates tenants, batching hides GPU overhead, and caching eliminates repeated work. Quantify that 15 ms base latency plus a safety margin gives us the required 2‑s p99, while autoscaling ensures cost efficiency. Highlight monitoring dashboards to show SLA adherence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
