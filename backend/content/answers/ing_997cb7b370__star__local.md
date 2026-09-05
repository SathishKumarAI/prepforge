---
qid: ing_997cb7b370__star__local
question: 'Explain: Enroll nodes in an existing cluster — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 347
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:28-05:00'
sources: []
---

**Situation:**  
At my last role, we had a three‑node Elasticsearch cluster handling real‑time log analytics for a SaaS product. Our traffic spiked during a marketing campaign, and the cluster was hitting >90 % CPU on each node while query latency rose to 250 ms.

**Task:**  
I needed to scale the cluster horizontally by enrolling two new data nodes without downtime, then later trim back once traffic normalized.

**Action:**  
First, I created a fresh VM with the same OS and Java version, installed Elasticsearch, and set `cluster.initial_master_nodes` to match the existing masters. Using the `_cluster/settings` API, I enabled `auto_expand_replicas` so shards would redistribute automatically. I ran a rolling restart on the master‑eligible nodes to bring the new ones online, then used the `/_cluster/health?wait_for_status=green` endpoint to confirm stability. For removal, I drained the two data nodes with `/_cat/shards?pretty | grep nodeX | awk '{print $2}'` and rebalanced shards using `/_cluster/reroute`. Throughout, I monitored heap usage via X-Pack metrics and tweaked `indices.memory.index_buffer_size` to keep GC pauses under 10 ms.

**Result:**  
After adding the nodes, CPU dropped to 55 % and latency fell to 90 ms. Once traffic subsided, removing the extra nodes restored our baseline cost while maintaining a green cluster state. I learned that careful use of rolling restarts and automated shard reallocation can scale Elasticsearch with zero service interruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
