---
qid: ing_d82fd9b4c4__star__local
question: 'Explain: Config server replica set / config shard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 345
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy e‑commerce platform to a new sharded MongoDB cluster to support millions of daily users. The existing deployment had a single config server that was a bottleneck during scaling operations, causing 15 % latency spikes when adding shards.

**Task** – I needed to redesign the config infrastructure: upgrade from a stand‑alone config server to a replica set (config‑shard) so the cluster could handle high write loads and provide failover without downtime.

**Action** – First, I created a three‑node config replica set on separate VMs with 30 GB SSDs, enabling journaling for durability. I configured `mongod` instances with `--replSet=configReplSet` and enabled authentication via SCRAM. Using the `mongo` shell, I initialized the set (`rs.initiate()`) and added secondary nodes (`rs.add()`), ensuring they were in sync before promotion. Next, I updated the sharding metadata: stopped the mongos routers, pointed them to the new config replica set URI, then restarted them. Finally, I ran a rolling upgrade on existing shards to maintain consistency.

**Result** – The cluster now supports 4× write throughput with sub‑50 ms latency during peak traffic, and zero downtime during maintenance windows. I learned that treating the config server as a sharded replica set dramatically improves resilience and simplifies scaling in production MongoDB deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
