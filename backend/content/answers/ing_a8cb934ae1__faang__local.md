---
qid: ing_a8cb934ae1__faang__local
question: 'Explain: Index lifecycle actions — Index lifecycle management (ILM) in
  Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:01-05:00'
sources: []
---

**Clarify**  
You’re asking how *Index Lifecycle Management* (ILM) works in Elasticsearch—how it automates the aging of indices from hot to warm to cold to delete, and what the key actions are.

**Approach**  
1. Define an ILM policy as a JSON document.  
2. Attach that policy to one or more indices via index templates or direct API calls.  
3. Let Elasticsearch evaluate the policy at each phase based on conditions (age, size, rollover).  
4. Execute corresponding actions: `rollover`, `shrink`, `freeze`, `allocate`, `delete`, etc.

**Depth**  
- **Phases**: *hot*, *warm*, *cold*, *frozen* (optional). Each has `min_age`/`max_age` or other conditions.  
- **Actions**:  
  - `rollover`: Creates a new index when size/age thresholds hit, keeping the old one read‑only.  
  - `shrink`: Reduces shard count for efficient storage on slower disks.  
  - `freeze`: Moves shards to a *frozen* tier with limited RAM usage.  
  - `allocate`: Rebalances shards across nodes or tiers.  
  - `delete`: Removes the index when it’s no longer needed.  
- **Execution**: ILM runs as part of the index lifecycle service; it checks every minute by default (configurable).  

Complexity is O(1) per index check, but overall cost scales with number of indices and frequency of checks.

**Edge Cases**  
- Rollover without a `max_size` can create huge hot indices.  
- Shrink requires at least one primary shard; shrinking 0‑shard indices fails.  
- Delete action on read‑only indices throws an error unless overridden.  
- Policy misconfiguration can leave indices stuck in a phase.

**Optimize & Communicate**  
Start with a simple policy (hot→warm→delete) and iterate: add shrink after warm, then frozen for archival. Monitor the *indices.lifecycle* metrics to confirm actions fire. Explain that ILM frees operators from manual index housekeeping while guaranteeing predictable resource usage—exactly what FAANG teams need for large‑scale data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
