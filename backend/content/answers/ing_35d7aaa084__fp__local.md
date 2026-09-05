---
qid: ing_35d7aaa084__fp__local
question: 'Explain: Geo queries — Geo queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 502
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:57-05:00'
sources: []
---

### Why Elasticsearch needs “geo queries”

When a dataset contains *spatial* attributes (latitude/longitude), the fundamental problem is:  
**“Given a point or shape, find all documents whose geometry overlaps it.”**  
Naïvely iterating over every document would be \(O(n)\) per request—impossible for millions of records. The solution must reduce candidate points to a tiny subset while still guaranteeing exactness.

### Geometry → Data Structure

Elasticsearch stores each geo‑field as a *bounding box* (minimum/maximum lat/lon). These boxes are indexed in an **R‑tree**‑like structure called a *quadtree*.  
- **Quadtree property:** Each node covers a rectangular area; child nodes subdivide it.  
- **Pruning rule:** If the query shape does not intersect a node’s rectangle, all documents beneath can be discarded instantly.

Thus the search cost is proportional to the number of rectangles that intersect the query—typically logarithmic in \(n\).

### From Geometry to Probability

The quadtree also supplies an *approximate area* for each leaf. When evaluating a **geo distance** query, Elasticsearch first computes the great‑circle distance (Haversine formula) between the query point and the node’s centroid. If this distance exceeds the query radius plus the node’s half‑diagonal, the whole subtree is pruned.  
This pruning uses the triangle inequality on the sphere: a point farther than `radius + max_possible_offset` cannot be within the circle.

### Non‑obvious Insight

Most people think geo queries are just “distance checks.” The hidden trick is **bounding‑box prefiltering**. Even if a query shape is complex (e.g., polygon), Elasticsearch first filters by bounding boxes, then performs an exact point‑in‑polygon test only on the few remaining candidates. This two‑stage filter keeps performance linear in the number of *actual* hits, not in the total document count.

> **Bottom line:** Geo queries combine a spatial index (quadtree) with sphere geometry (Haversine) to prune vast swaths of data before applying exact overlap tests—making real‑time location search feasible at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
