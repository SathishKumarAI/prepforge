---
qid: ing_5b568244f6__think__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 495
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:01:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- Confirm that “directed” refers to a *directed graph* (edges have direction, e.g., one‑way streets).
- Assume we’re designing an online routing service like Google Maps.
- Note constraints: scale (billions of nodes), real‑time queries, dynamic updates.

**2️⃣ Pick a mental model**

Use the **graph‑theory + distributed systems framework**:
  - *Graph representation* (adjacency list/ matrix, edge weights).
  - *Routing algorithm* (Dijkstra, A*, contraction hierarchies).
  - *Storage & retrieval* (sharding, in‑memory cache, SSD tiering).

**3️⃣ Step‑by‑step reasoning**

1. **Model roads as a directed weighted graph** – each road segment is an edge with travel time/length.
2. **Choose data structures** that support fast lookups and updates: partition the graph into tiles; store adjacency lists on disk, cache hot edges in RAM.
3. **Pre‑compute shortcuts** (e.g., contraction hierarchies) to speed up shortest‑path queries while respecting directionality.
4. **Handle dynamic changes** (traffic, construction): maintain a delta layer of edge weights that can be applied on top of the static graph during query time.
5. **Distribute load**: use consistent hashing for tiles; replicas for high availability; employ a CDN‑style cache for popular routes.

**4️⃣ Common traps**

- Forgetting directionality when building shortcuts → incorrect paths.
- Assuming all roads are two‑way; ignoring one‑way constraints breaks correctness.
- Ignoring traffic updates leads to stale, suboptimal routes.
- Over‑optimizing storage without considering query latency.

**5️⃣ Sanity‑check & verbalize**

- Walk through a sample query: “from A to B” → ensure algorithm follows directed edges only.
- Verify that dynamic updates are applied in the correct order (delta overlay on static graph).
- Explain trade‑offs: precomputation vs. memory, real‑time traffic vs. batch updates.

By following this checklist you’ll systematically address how directionality shapes data structures, algorithms, and system architecture for a large‑scale routing service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
