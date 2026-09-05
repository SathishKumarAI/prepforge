---
qid: ing_4ae3c924cf__star__local
question: 'Explain: Add and Remove Elasticsearch nodes — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 378
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:01-05:00'
sources: []
---

**Situation**  
At my previous role I was responsible for a customer‑facing search platform that served over 5 million queries per day. The traffic spiked during product launches, and our cluster of six nodes started hitting 90 % heap usage, causing latency to climb from 120 ms to 350 ms.

**Task**  
I had to scale the cluster quickly—adding two new data nodes for capacity—and later remove them when the traffic subsided, all while keeping uptime above 99.9 % and preserving index integrity.

**Action**  
First, I drafted a rolling‑upgrade plan: I provisioned two new EC2 instances (r5.large) with the same JVM settings, installed the exact Elasticsearch version, and used `cluster.routing.allocation.enable` to “none” on existing nodes so shards didn’t move during node addition. Then I ran `POST /_cluster/settings` to enable allocation and let the cluster rebalance; I monitored shard distribution via Kibana’s Cluster Health tab. For removal, I set each target node to “no” in the same setting, waited for all primary shards to migrate, verified no replicas were lost with `GET /_cat/shards`, and finally decommissioned the nodes with `DELETE /_cluster/nodes/<node_id>`. Throughout, I scripted everything in Ansible so repeatable deployments were possible.

**Result**  
The cluster’s heap usage dropped to 60 %, latency returned to 110 ms, and we maintained 99.95 % availability during both scaling events. I learned that careful use of routing settings plus automated monitoring prevents data loss while achieving near‑real‑time elasticity in Elasticsearch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
