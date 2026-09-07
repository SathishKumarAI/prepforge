---
qid: ing_6c9e3b82ca__faang__local
question: 'Explain: Design retrieval for a multi-tenant SaaS product where users have
  different document permissions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 516
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:01-05:00'
sources: []
---

**Clarify**

You need an *information‑retrieval* layer that serves many tenants (customers) in a SaaS app.  
Each tenant owns documents; users inside the tenant may have fine‑grained read/write/visibility rules.  
Goal: fast, correct query results respecting those permissions, while scaling to millions of docs.

Assumptions to confirm:
- Tenants are isolated but share infrastructure.
- Permissions are row‑level (doc‑by‑doc) and can change at runtime.
- Queries are keyword / semantic search over text fields.

---

**Approach**

1. **Index design**
   - Shard by tenant ID → guarantees data locality & simplifies permission checks.
   - Store a *permission bitmap* or *ACL set* per document in the index (or as a separate column).
2. **Search pipeline**
   - Parse user query → token list.
   - Retrieve candidate docs from the tenant shard using inverted index.
   - Filter results by intersecting with the user’s ACL bitmask at retrieval time.
3. **Permission enforcement**
   - Cache each user’s permission set in memory (e.g., Redis) to avoid DB hits per request.
   - Re‑validate on a scheduled job or via change data capture when permissions change.

---

**Depth**

- *Complexity*: Search is O(k + r) where k = number of matching terms, r = returned docs. Permission filtering is O(r).
- *Scalability*: Sharding allows horizontal scaling; each shard can run on its own node.
- *Consistency*: Use optimistic locking or versioned ACLs to handle concurrent permission updates.

---

**Edge Cases**

- **Permission revocation**: stale cache → implement TTL + pub/sub invalidation.
- **Large ACL lists**: compress bitmaps (Roaring) or switch to role‑based checks.
- **Cross‑tenant leaks**: ensure tenant ID is always part of the query context; audit logs.

---

**Optimize & Communicate**

- Measure latency per component; push heavy filtering into GPU‑accelerated vector search if semantic embeddings are used.
- Discuss trade‑offs: storing ACLs in index reduces DB calls but increases index size vs. separate permission table with join at query time.
- Summarize: shard by tenant, embed permissions in the index, cache user ACLs, and keep an invalidation pipeline for consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
