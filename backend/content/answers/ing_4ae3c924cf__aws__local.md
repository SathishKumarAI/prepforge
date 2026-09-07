---
qid: ing_4ae3c924cf__aws__local
question: 'Explain: Add and Remove Elasticsearch nodes — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 481
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:34-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our search stack from a single‑node OpenSearch cluster to a multi‑node, highly available Elasticsearch deployment on AWS. The goal was to reduce query latency by 40 % and increase fault tolerance.

**Action**  
1. **Requirements & Design** – We scoped three key metrics: read throughput (10 k QPS), index size (~2 TB), and SLA (99.9 %). I mapped these onto an *Elasticsearch‑on‑EKS* architecture using `t3.medium` nodes for warm traffic, backed by a 30 GB EBS volume per node, and leveraged *Auto Scaling Groups* to add or remove nodes based on CPU utilization (>70 % triggers add; <20 % triggers removal).  
2. **Node Addition** – I scripted the `elasticsearch.yml` changes, used AWS CloudFormation to provision new EC2 instances, and executed a rolling upgrade with `/_cluster/voting_config_exclusions`. This ensured no downtime while maintaining master‑eligible nodes’ quorum.  
3. **Node Removal** – Before decommissioning, I rebalanced shards using `_cat/shards?pretty` and moved them off the target node with the `shrink` API, then updated the cluster state via the `/_cluster/settings` to exclude the node from future allocations.  
4. **Monitoring & Automation** – Integrated CloudWatch metrics (`elasticsearch.cluster_status`, `node.cpu.percent`) into a Lambda that automatically scales nodes per our thresholds.

**Result**  
- Reduced average query latency from 350 ms to 210 ms (40 % improvement).  
- Cut infrastructure cost by ~30 % by scaling down during off‑peak hours.  
- Achieved 99.95 % uptime over the next year, exceeding SLA expectations.

**Leadership Principles Highlighted**  
- **Ownership** – Took end‑to‑end responsibility for architecture, deployment, and cost optimization.  
- **Dive Deep** – Analyzed cluster metrics, shard distribution, and failure scenarios to design a robust scaling strategy.  

Bar‑raisers look for clear ownership, deep technical understanding, measurable impact, and lessons learned—each of which is reflected in this solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
