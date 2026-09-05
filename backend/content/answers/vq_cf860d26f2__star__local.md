---
qid: vq_cf860d26f2__star__local
question: How does one code a tree-structured query?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:29-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an analytics dashboard for a logistics company that stored shipment routes in a nested JSON format inside PostgreSQL. The data model represented hubs as nodes and connections as edges, forming a tree that could be up to 12 levels deep. Users needed to pull all descendant locations from any given hub within seconds.

**Task** – I had to design a query that would retrieve the entire subtree for a selected node, return it in a flat list with depth information, and keep execution time below 200 ms even on a table of 3 million rows.

**Action** – I used PostgreSQL’s recursive CTEs combined with the `lateral` join to materialize the tree. First, I created an index on `(parent_id)` for fast child lookup. The query looked like:

```sql
WITH RECURSIVE sub AS (
  SELECT id, name, parent_id, 0 AS depth
  FROM hubs
  WHERE id = $1
  UNION ALL
  SELECT h.id, h.name, h.parent_id, s.depth + 1
  FROM hubs h
  JOIN sub s ON h.parent_id = s.id
)
SELECT * FROM sub ORDER BY depth;
```

I then wrapped this CTE in a stored function and exposed it via GraphQL. To further optimize, I cached the result for each node using Redis with a TTL of 10 minutes.

**Result** – The query ran in ~120 ms on average, cutting load times from 2.5 s to under 200 ms. The dashboard saw a 35% increase in user engagement, and the caching layer reduced database hits by 70%. I learned how powerful recursive CTEs are for tree traversal when paired with proper indexing and caching strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
