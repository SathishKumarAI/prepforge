---
qid: ing_2b600f9cbc__faang__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 525
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:47-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Directory‑Based Sharding* in the context of a distributed ML system that stores large model artefacts (weights, checkpoints). Clarifying: we need to describe how data is partitioned by a directory hierarchy, what trade‑offs it offers over hash or range sharding, and when it’s useful. Assume a keyspace like `model_id/version/parameter_set` and an infrastructure with multiple storage nodes.

**Approach**  
1. Define the directory layout (root → model → version).  
2. Show how each level maps to a shard group.  
3. Discuss routing: look‑up of the first two components gives the target node(s).  
4. Compare to hash/sharding: locality, read/write patterns.  
5. Mention consistency and fault tolerance.

**Depth**  
- **Structure**: `/<model_id>/<version>/` is a *prefix* that groups logically related checkpoints together.  
- **Routing**: A metadata service (e.g., Consul) maps `(model_id, version)` → node. The client performs two‑step lookup: first level for the model, second for the specific version.  
- **Benefits**:  
  - *Locality*: All artifacts of a model/version are on one or few nodes → cheaper intra‑node reads during inference training.  
  - *Scalability*: Adding a new version simply creates a new subdirectory; no rehashing required.  
  - *Simplicity*: No need for consistent hashing ring maintenance.  
- **Trade‑offs**:  
  - Hot spots if many users request the same model/version → consider replica sets.  
  - Requires careful naming to avoid collisions.  

**Edge Cases**  
- Rapid growth of versions may overload a single node; implement auto‑sharding by moving older directories.  
- Deletion or archival must preserve directory integrity to avoid orphaned references.  
- Race conditions when two processes create the same new version concurrently.

**Optimize & Communicate**  
Explain that Directory‑Based Sharding excels for workloads with *predictable* access patterns (e.g., inference serving a handful of popular models) and simplifies rollback/rollback strategies. When scaling to millions of concurrent users, we’d augment it with hash‑based replication for hot directories. Conclude by noting the clear trade‑off: simple locality vs. potential hotspots, and how the design decision aligns with ML use‑cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
