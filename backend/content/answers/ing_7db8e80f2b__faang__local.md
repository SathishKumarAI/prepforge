---
qid: ing_7db8e80f2b__faang__local
question: 'Explain: Endpoint: GET /search — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:36-05:00'
sources: []
---

**Clarify**  
We need a *GET /search* endpoint for a music streaming service (Spotify‑like). The client supplies a query string; we must return matching songs, albums, or artists with pagination and relevance ranking. Key assumptions:  
- Search is text‑based on titles/artist names.  
- Latency < 200 ms for 95 % of requests.  
- Service scales to millions of users and billions of documents.

**Approach**  
1. **Ingest & Index** – Build a distributed inverted index (e.g., Elasticsearch) over song, album, artist metadata.  
2. **Query Layer** – Accept the query, tokenize, apply stemming/stop‑word removal, then forward to search cluster.  
3. **Scoring** – Use BM25 + custom boosting for popularity, recency, and user context (e.g., listening history).  
4. **Pagination & Caching** – Return 20 results per page; cache hot queries in Redis.  
5. **Fallback & Resilience** – If search cluster is down, serve a static “search unavailable” message.

**Depth**  
- *Index size*: ~10 GB per shard; use 3–5 shards for horizontal scaling.  
- *Latency*: Query → ES → Redis cache hit = <80 ms; cold hit ≈150 ms.  
- *Throughput*: 10k QPS with 4‑node cluster; auto‑scale via Kubernetes.  
- *Trade‑offs*: Full text search vs. vector similarity (for embeddings) – choose based on feature roadmap.

**Edge Cases**  
- Empty or malformed query → return empty list with HTTP 400.  
- Extremely long queries → truncate to 256 chars.  
- Ambiguous terms → surface top N results; let client refine.  
- User‑specific relevance → test with A/B for popularity boosts.

**Optimize & Communicate**  
Iterate on scoring weights, add semantic embeddings (e.g., sentence‑transformers) for better match quality. Explain trade‑offs: higher index depth → slower writes but faster reads. Use monitoring dashboards (latency, error rate) to validate SLA adherence. This structure shows clear problem framing, thoughtful design choices, and readiness for production scaling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
