---
qid: ing_53ebecaff8__star__local
question: 'Explain: Mapping metadata in the cluster state — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:04-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our recommendation engine ran on an Elasticsearch cluster that had just hit 250 GB of indexed data. The performance team noticed that query latency spiked after the last deployment because the shards were unevenly distributed and some nodes became hotspots.

**Task**  
I was tasked with redesigning the shard allocation strategy: map the metadata correctly in the cluster state, size each shard appropriately, and ensure even distribution while keeping indexing throughput high.

**Action**  
First I inspected the `_cluster/settings` to confirm that `index.number_of_shards` and `index.blocks.read_only_allow_delete` were set per best practice. Using the _cat API, I mapped each index’s routing key to a dedicated shard group (e.g., user‑profile data on 5 shards, transaction logs on 3). I then applied the “shard size” heuristic: calculate ideal shard size as total data / (number of nodes × 1.2), which yielded ~12 GB per primary shard. I updated each index’s `index.shard.size` setting and triggered a re‑allocation with `cluster.routing.allocation.enable: all`. Finally, I added index lifecycle policies to roll over indices when they exceeded the target size.

**Result**  
After rebalancing, average query latency dropped from 420 ms to 210 ms (50% improvement), and indexing throughput increased by ~15%. The cluster now scales linearly as we add nodes. I learned that proactive shard sizing—coupled with accurate metadata mapping in the cluster state—is essential for maintaining performance in a growing search workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
