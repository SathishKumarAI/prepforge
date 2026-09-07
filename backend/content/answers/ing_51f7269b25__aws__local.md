---
qid: ing_51f7269b25__aws__local
question: 'Explain: Master-eligible node considerations — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 553
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:32-05:00'
sources: []
---

**Situation (S)**  
In a production e‑commerce platform I was tasked with scaling our search layer from 3 to 15 nodes while maintaining high availability during peak shopping periods.

**Task (T)**  
We had to add and remove master‑eligible Elasticsearch nodes without causing split brain or downtime, ensuring the cluster remained healthy and performance met SLAs.

**Action (A)**  

| Step | Technical Decision | AWS Services & Reasoning |
|------|--------------------|--------------------------|
| 1. Identify eligible nodes | Only nodes with `cluster.routing.allocation.enable: all` and a dedicated master role can be master‑eligible. | **EC2 Auto Scaling** to launch new instances; **EBS gp3** for low latency storage. |
| 2. Add node | Provision a new EC2 instance, install ES, add to cluster via `cluster.initial_master_nodes`. Set `node.master: true`, `node.data: false` to keep it lightweight. | Keeps the master pool balanced and reduces data sharding overhead. |
| 3. Remove node | Drain shards from the target master using `POST /_cluster/settings {"transient":{"cluster.routing.allocation.exclude._name":"old‑master"}}`. Wait for rebalancing, then shut down instance. | Guarantees no split brain; **CloudWatch** alarms monitor shard counts and cluster health. |
| 4. Monitor & rollback | Continuous metrics (CPU, GC, master heartbeats) via **Prometheus + Grafana** on EKS. If `cluster.routing.allocation.cluster_concurrent_rebalance` spikes > 30%, roll back immediately. | Ensures we meet the 99.9% uptime SLA and avoid costly downtime. |

**Result (R)**  
The migration completed in under 4 hours with < 0.5 % query latency increase, while reducing hourly cost by 18 % through right‑sizing master nodes. Post‑migration, search response times dropped from 250 ms to 190 ms during peak traffic.

---

### Leadership Principles Anchored
- **Ownership** – I led the end‑to‑end rollout and owned post‑deployment monitoring.
- **Dive Deep** – Detailed shard rebalancing logic and cost/latency trade‑offs were quantified.
- **Deliver Results** – Achieved measurable performance gains and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
