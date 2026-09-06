---
qid: ing_a00fbf3053__fp__local
question: Why Not General Databases? — Vector Databases
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 439
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:49-05:00'
sources: []
---

**Why Not a General Database?**

The core problem we want to solve is *fast similarity search in high‑dimensional feature space*.  
In an ordinary relational or key‑value store, queries are expressed as exact equality or simple range predicates on scalar columns. The underlying index (B‑tree, hash) is designed for *discrete* values and relies on the **curse of dimensionality** to keep each node small: in 100‑dimensional space a single entry can be “close” to any other. Thus an RDBMS would have to scan almost all rows, yielding linear time.

A vector database reframes the problem as an *optimization* over a metric space. The index (e.g., IVF, HNSW, PQ) is built on **locality‑sensitive hashing** or graph connectivity so that the distance function (cosine, Euclidean) drives traversal. This guarantees sub‑linear query time by exploring only a tiny fraction of the vector manifold.

The deeper principle is *information geometry*: we trade exactness for probabilistic proximity. A single index structure can answer many “nearest‑neighbor” queries with bounded error while keeping memory and CPU footprints modest—something general databases cannot guarantee because they lack a notion of *distance* in their query language.

**Non‑obvious insight:** the bottleneck is not data volume but *query distribution*. If most lookups are for items similar to a few “hot” vectors, a vector index can cache these neighborhoods and answer queries in O(1) amortized time—something a general DB cannot exploit without custom sharding or materialized views.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
