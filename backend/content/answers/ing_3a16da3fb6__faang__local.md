---
qid: ing_3a16da3fb6__faang__local
question: 'Explain: Cost and latency considerations — Contextual Retrieval in AI Systems
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 549
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:21-05:00'
sources: []
---

**Clarify**  
We’re asked how cost‑ and latency‑tradeoffs shape *contextual retrieval* (the act of fetching relevant context for a language model). Key assumptions:  
1. The system uses an external vector store or knowledge base.  
2. Retrieval is invoked per request, not batch‑processed.  
3. Compute costs dominate over storage in most cloud environments.

**Approach**  
1. Identify the cost drivers (compute time of embeddings, query latency, storage read).  
2. Map each driver to system knobs: vector size, index granularity, pre‑computed vs on‑the‑fly embeddings.  
3. Quantify impact on overall latency and billable compute hours.

**Depth**  
- **Compute Cost:** Embedding generation (e.g., 768‑dim vectors) costs ~0.01 s per request → ~$0.0001/req. Using a cached embedding cache reduces this to near zero.  
- **Index Query Latency:** ANN search in an HNSW index scales as O(log N). For N=10M, typical query <2 ms; for 100M it rises to ~5 ms but adds negligible compute cost.  
- **Storage Read:** Cloud‑managed vector DBs charge per GB read; with 10 GB storage and 1 kB vectors, reads ≈$0.000001/req.  
Trade‑off: Larger indices (more recall) mean more memory and higher CPU during query but lower overall cost because fewer fallback calls to the LLM are needed.

**Edge Cases**  
- Sudden spike in traffic → index hot‑spine causes contention, raising latency >100 ms.  
- Cold start for new embeddings → embedding generation bottleneck.  
- Data drift: stale vectors increase retrieval error, forcing more LLM passes.

**Optimize & Communicate**  
1. **Pre‑compute embeddings** and keep a *deduplication* layer to avoid redundant work.  
2. Use **tiered caching** (in‑memory + Redis) for the most frequent queries—cuts latency from ~5 ms to <0.5 ms with negligible cost.  
3. Monitor **recall vs. cost curve**: every 1% gain in recall often costs >$0.001 per thousand requests; stop when marginal benefit ≈ marginal cost.  

By articulating the knobs, their quantitative impact, and a clear trade‑off framework, we satisfy FAANG interviewers’ emphasis on structured reasoning, depth, and communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
