---
qid: ing_daa8e82b0d__faang__local
question: 'Explain: Design discovery and search across millions of user-created characters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:59-05:00'
sources: []
---

**Clarify**  
We need a system that lets users discover and search **millions of user‑created characters** (name, traits, media, tags). Assumptions: high read traffic, eventual consistency, free text + faceted filters, multi‑tenant data isolation, low latency (<200 ms) for UI.  

**Approach**  
1. Ingest → normalize → index in a distributed search engine (Elastic/Opensearch).  
2. Store metadata in a NoSQL DB (Cassandra/DynamoDB) for quick lookups and counters.  
3. Build a query layer that translates user filters into Elastic DSL + fallback to DB.  

**Depth**  
*Indexing*: Use compound fields (`name.keyword`, `tags`, `media.type`). Enable fuzzy search, synonym expansion, and n‑gram tokenizers for partial matches. Store vector embeddings (e.g., 768‑dim) in a separate index or as dense vectors for semantic similarity.  
*Search API*: Accept free text + facet filters; rank by relevance score + popularity boost (`view_count`, `like_score`). Use pagination with search after cursor to avoid offset slowness.  
*Scalability*: Elastic clusters auto‑scale shards; DB partitions by user ID. Cache hot queries in Redis.  
*Consistency*: Write‑through cache → DB → index; eventual consistency acceptable for search results.  

**Edge Cases**  
- Duplicate or conflicting character names → enforce unique slug per user.  
- Massive tags list → limit tag cardinality, prune unused tags nightly.  
- Out‑of‑memory vector similarity queries → fallback to keyword search.  

**Optimize & Communicate**  
Start with keyword + filter index; add semantic vectors after baseline traffic. Monitor latency and error rates via Grafana dashboards. Explain trade‑offs: richer semantics = more compute vs. simpler keyword search = lower cost. Keep interviewers engaged by walking through a single query path, then scaling out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
