---
qid: ing_baeba19f96__faang__local
question: 'Explain: Data: Scalable permission-aware indexing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 436
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:21-05:00'
sources: []
---

**Clarify**  
We need a data‑storage layer that can be queried quickly, scales horizontally, and enforces fine‑grained access control per user or group. Assumptions:  
- Read‑heavy workload (search, filter).  
- Data is semi‑structured (JSON/relational mix).  
- Permissions are hierarchical (owner → team → org).  

**Approach**  
1. **Indexing layer** – use a distributed search engine (Elasticsearch or Solr) with inverted indexes per shard.  
2. **Permission metadata** – store ACLs in a separate, highly replicated key‑value store (DynamoDB/Spanner) keyed by document ID and user/group.  
3. **Query flow** – client sends query + token → backend resolves visible IDs via ACL lookup, then fetches matching documents from the index.  

**Depth**  
- *Index design*: shard on a hash of doc‑ID; each shard holds a bitmap of allowed principals to avoid full scan.  
- *ACL storage*: use bitset compression and cache hot ACLs in Redis.  
- *Complexity*: Index lookup O(log n); permission merge O(k) where k is number of principals per query.  
- *Trade‑offs*: Extra latency from ACL join vs. simplicity of embedding permissions into the index (which would bloat it).  

**Edge Cases**  
- **Permission changes**: propagate via event stream to invalidate cached ACLs.  
- **Large groups**: flatten group hierarchies to avoid exponential growth.  
- **Zero‑permission queries**: short‑circuit and return empty set early.  

**Optimize & Communicate**  
Explain that we can further shard by permission level (owner shard, team shard) to reduce bitmap size, and that using a “search‑as‑you‑type” prefix index improves UX. Conclude with how this architecture meets scalability (horizontal shards), low latency (bitmap filtering), and strong security (separate ACL store).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
