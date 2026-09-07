---
qid: ing_72ba7cf7f4__faang__local
question: 'Explain: Multi-criteria search — Recommendation engine & system use cases
  with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 582
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:48-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *multi‑criteria search* in recommendation engines and how graph databases support it.  
Assumptions:  
1. “Multi‑criteria” means filtering on several attributes (price, rating, genre, user demographics).  
2. The system must rank results by relevance, not just match all criteria.  
3. We’re comparing relational vs graph approaches.

**Approach**  
1. Define the recommendation problem and typical data model.  
2. Show how a graph captures relationships (user‑item, item‑item, user‑context).  
3. Explain a multi‑criteria query path: filter → score → rank.  
4. Contrast with SQL joins/aggregations.

**Depth**  
A recommendation engine stores users U, items I, and edges *E* = {(U,I), (I,I′), (U,Context)}.  
Multi‑criteria search asks for all *i ∈ I* such that:  
- `price(i) ∈ [p_min,p_max]`  
- `genre(i)=g`  
- `rating(i) ≥ r_min`  
- `similar_to(u,i)` and `context_match(u,i)`.  

Graph traversal:  
```
MATCH (u:User)-[:INTERACTS]->(i:Item)
WHERE i.price BETWEEN p_min AND p_max
  AND i.genre = g
  AND i.rating >= r_min
  AND exists((i)-[:SIMILAR_TO]->(:Item))
  AND exists((u)-[:HAS_CONTEXT]->(:Context {type:'mobile'}))
RETURN i, 
       score = (0.4*rating(i)+0.3*popularity(i)+0.3*similarity(u,i))
ORDER BY score DESC
```
Complexity: O(k) for k matched nodes; graph engines cache indices on node properties and relationships, yielding sub‑millisecond responses even with millions of edges—unlike multi‑join SQL which can hit O(n²).  
Trade‑offs: Graph DBs require schema design (labels, relationship types) and memory overhead for in‑memory traversal.

**Edge Cases**  
- Sparse data → fallback to content filtering.  
- New users/items → cold start handled by similarity edges.  
- Highly dynamic price/availability → need real‑time updates or TTL on nodes.

**Optimize & Communicate**  
Improvements: precompute popularity and similarity scores, use materialized views for hot queries, shard the graph by user segments.  
Narrative: “We treat recommendations as a weighted path problem; graphs let us express multi‑dimensional constraints naturally and evaluate them in linear time relative to matches, providing both speed and richer semantics compared to relational joins.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
