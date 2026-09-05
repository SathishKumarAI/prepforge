---
qid: ing_63933b912e__star__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:55-05:00'
sources: []
---

**Situation** – In the summer of 2023, our analytics team was running an Elasticsearch cluster that had grown from 5 to 15 indices and ~1 TB of data after a new product launch. The cluster’s master node kept timing out during heavy ingest bursts, causing frequent re‑selections and 30‑second downtimes for search queries.

**Task** – I needed to increase the cluster’s stability by adding master‑eligible nodes without impacting existing traffic, while keeping the cluster size balanced and ensuring that shard allocation remained efficient.

**Action** – First, I evaluated the current node roles using `GET _cat/nodes?v`. Then I provisioned two new servers (4 vCPU, 16 GB RAM) and installed the same ES version. Using the cluster’s rolling upgrade API, I added them as master‑eligible (`node.master: true`, `node.data: false`) via a temporary config change and re‑started each node in sequence. After confirming they joined the cluster (`GET _cat/health`), I updated the shard allocation settings to prefer data nodes for hot indices and used `cluster.routing.allocation.cluster_concurrent_rebalance: 2`. Finally, I ran a stress test with `bulk` API to simulate peak ingest and monitored latency.

**Result** – The master node’s election time dropped from ~5 s to <200 ms, query latency improved by 40%, and we avoided any downtime during the transition. I learned that carefully sizing master‑eligible nodes (CPU, memory) and tuning shard allocation can dramatically improve cluster resilience without adding unnecessary data nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
