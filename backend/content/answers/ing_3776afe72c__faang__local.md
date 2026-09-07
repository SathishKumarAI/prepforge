---
qid: ing_3776afe72c__faang__local
question: 'Explain: Delete empty or unneeded indices — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 495
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:51-05:00'
sources: []
---

**Clarify**

You’re asked how an Elasticsearch cluster can keep shard sizes optimal by removing “empty” or “unneeded” indices—i.e., indices that hold no documents, only mappings or are obsolete.  
Assumptions to confirm:  

1. We’re using the default index lifecycle management (ILM).  
2. Shard size is a limiting factor for performance and storage.  
3. The cluster has enough free disk space to delete indices safely.

**Approach**

1. **Identify candidates** – query `/_cat/indices?h=index,docs.count,store.size` and filter where `docs.count=0`.  
2. **Validate** – ensure the index isn’t part of a rollover or hot‑warm policy; confirm no active aliases point to it.  
3. **Delete safely** – use `_delete_by_query` if the index is small but not empty, otherwise delete directly with `DELETE /index_name`.  
4. **Rebalance shards** – after deletion, let Elasticsearch redistribute shards automatically.

**Depth**

- *Why delete?* Empty indices waste disk and can inflate cluster metadata, slowing refreshes.  
- *Implementation*: A scheduled cron job (or ILM policy) that runs nightly, uses the REST API to fetch indices, checks `docs.count`, and deletes. Complexity is O(n) over index count; network overhead minimal.  
- *Trade‑offs*: Over‑aggressive deletion may remove indices you plan to repurpose; therefore a whitelist or tagging system (e.g., `_index` label) can guard against accidental loss.

**Edge Cases**

- Indices with zero docs but containing mappings for future data—avoid deleting unless confirmed obsolete.  
- Shards in “red” state: skip deletion until recovery.  
- High‑traffic clusters: schedule during low‑load windows to avoid load spikes.

**Optimize & Communicate**

- **Optimization**: Batch deletions, use bulk API, and throttle to respect cluster health.  
- **Communication**: Present a dashboard showing shard size trends pre/post cleanup; explain the impact on storage costs and query latency.  
- Highlight that this proactive pruning keeps ILM policies effective, reduces snapshot sizes, and maintains cluster health—exactly what FAANG teams expect in production‑grade Elasticsearch management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
