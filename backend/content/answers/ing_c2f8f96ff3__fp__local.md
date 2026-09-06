---
qid: ing_c2f8f96ff3__fp__local
question: 'Explain: Responses — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 445
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:56:33-05:00'
sources: []
---

### Why the *Create Index* response matters

When you issue a **PUT /my‑index** request, Elasticsearch must decide whether it can safely add a new namespace for data.  
At its core this is an *optimization problem*: we want to allocate shards and replicas on nodes while preserving fault tolerance, load balance, and query performance. The API response encodes the solution the cluster has found.

1. **`acknowledged: true/false`** – A binary flag that answers “did every master node agree?”  
   It is a *consensus* measurement; if any master rejects (e.g., due to insufficient nodes), the index is not created, preventing silent failures.

2. **`shards_acknowledged`** – Extends consensus to data nodes: “were all primary shards successfully allocated?”  
   This guards against over‑committing resources and guarantees that subsequent writes will not fail because a shard never materialized.

3. **`index`** – The canonical name returned, which may be altered by index templates or aliases.  
   It is the *identity* that future requests (search, update) must reference; without it the system cannot route traffic.

### Deeper principle

These fields embody **distributed consistency** and **resource provisioning** in a shared storage layer. The cluster must *optimally* partition data across nodes while maintaining an *exactly‑once* guarantee for index creation—a classic trade‑off between *availability* (quickly returning a positive response) and *consistency* (ensuring all nodes agree).

### Non‑obvious insight

The `shards_acknowledged` flag is often overlooked, but it can be the root cause of silent failures when you later try to index documents: if one primary shard was never allocated, subsequent writes silently drop data until you recreate the index. Always check both flags; a seemingly successful creation may still leave your application in a fragile state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
