---
qid: ing_39b26aafe2__faang__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 506
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:39-05:00'
sources: []
---

**Clarify**

> *Goal:* Build a dynamic knowledge‑graph (KG) linking users, documents, tags, and actions to rank content for Glean’s search.  
> *Assumptions I’d confirm:* data volume (~10⁶ entities), real‑time updates, existing relational DBs, privacy constraints, latency target (<200 ms).

**Approach**

1. **Schema & ingestion** – define node types (Person, Document, Tag) and edge types (CREATED, TAGGED_WITH, REPLIED_TO).  
2. **Batch ETL + CDC** – nightly bulk load from legacy DB; change‑data capture for near‑real‑time inserts/updates.  
3. **Graph store** – use a property graph engine (Neo4j / Dgraph) with sharding on entity hash to keep query latency low.  
4. **Indexing** – full‑text index on document text + reverse‑index on tags; materialized neighbor sets for hot users.

**Depth**

*Query logic:*  
```sql
MATCH (u:Person)-[:REPLIED_TO]->(d:Document)
WHERE u.id = $uid
RETURN d ORDER BY score(u,d) DESC
```
`score()` combines:
- **Embedding similarity** (dense vector dot product).  
- **Graph proximity** (shortest path, PageRank on user‑doc edges).  
- **Interaction weight** (replies, likes).  

Complexity: O(k log n) for top‑k retrieval where *k* is page size; graph traversal limited to depth 2 or 3 ensures sub‑millisecond latency. Trade‑off: extra storage vs richer relevance signals.

**Edge Cases**

- New users → cold‑start handled by fallback embeddings only.  
- Data drift → periodic re‑embedding and edge weight decay.  
- Privacy violations → enforce access controls at node level.

**Optimize & Communicate**

*Improvements:* periodically run a graph‑based recommender (e.g., random walk with restart) to surface emerging topics; cache frequent subgraphs in Redis.  
*Narration:* I’d emphasize that the KG captures explicit relational signals (who talked about what, who influenced whom), which embeddings alone miss—especially for sparse or highly contextual content. This hybrid approach yields higher precision and explainability while keeping latency within user‑expectation bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
