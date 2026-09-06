---
qid: ing_d3d42be392__think__local
question: 'Explain: High availability — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 460
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:56:08-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *High‑availability* means minimal downtime for the recommendation engine.  
   - The system must serve real‑time recommendations while handling large, rapidly changing data (user profiles, item catalog, interactions).  
   - We assume a graph database is chosen for its natural modeling of relationships (users ↔ items) and efficient traversal.

**2️⃣ Adopt a layered mental model**  
   1. **Data layer** – graph schema (nodes: User, Item; edges: View, Purchase, Like).  
   2. **Query layer** – recommendation algorithms expressed as graph traversals or pattern matches.  
   3. **Infrastructure layer** – replication, sharding, load‑balancing, and failover mechanisms that keep the graph service online.

**3️⃣ Step‑by‑step reasoning**  
   - *Identify critical paths*: recommendation queries (e.g., “friends’ liked items”) are read‑heavy; writes (new interactions) must propagate quickly.  
   - *Choose replication strategy*: synchronous multi‑master for strong consistency, or asynchronous for lower latency.  
   - *Implement health checks and automatic failover*: monitor replicas, promote a standby when the primary fails.  
   - *Use cache layers* (e.g., Redis) to offload hot recommendation paths while keeping graph data as source of truth.

**4️⃣ Common traps to avoid**  
   - Assuming a single replica is enough; a single point of failure defeats HA.  
   - Neglecting write‑skew in asynchronous replication leading to stale recommendations.  
   - Over‑complicating the graph schema, which hurts query performance and failover speed.

**5️⃣ Sanity‑check & communicate**  
   - Verify that every read/write path has at least one live replica.  
   - Run chaos‑engineering tests: kill a node, ensure traffic reroutes with < 1 s latency.  
   - Explain to stakeholders: “Our graph database is replicated across three zones; any single zone outage triggers automatic promotion of a standby, keeping recommendations continuous.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
