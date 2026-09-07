---
qid: ing_d82fd9b4c4__aws__local
question: 'Explain: Config server replica set / config shard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 600
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:24-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> *I once led a migration of an on‑prem **MongoDB** cluster to **Amazon DocumentDB** for a recommendation engine that served 2 M daily requests. The key challenge was to preserve the config server topology while ensuring zero downtime.*

### Situation
Our production workload required high availability and sharding across three regions. The existing config servers were a single replica set, causing a bottleneck during failover.

### Task
Design a **config‑server replica set** that could handle 200 k writes per second and support automatic shard rebalancing without manual intervention.

### Action
1. **Replica Set Design**  
   * Created a three‑node config server replica set in each region (total 9 nodes).  
   * Enabled `primaryElection` to avoid split‑brain; used the `configsvr` tag for routing.
2. **Sharding Strategy**  
   * Added an additional config shard per region to isolate metadata and reduce latency.  
   * Configured auto‑split/auto‑merge policies with a 5 GB chunk size to keep shard sizes balanced.
3. **AWS Services & Cost**  
   * Deployed on **Amazon EC2 Spot Instances** (p4d.large) for cost savings, backed by **EBS gp3** volumes for IOPS.  
   * Leveraged **Amazon CloudWatch** for health checks and **Auto Scaling Groups** to spin up a new config node if latency > 200 ms.
4. **Testing & Rollout**  
   * Ran a blue‑green deployment with synthetic traffic (10 M ops/day) to validate failover.  
   * Implemented CI/CD pipelines in **AWS CodePipeline** for automated rolling updates.

### Result
* Achieved 99.999% availability during the cutover, reduced config‑server latency from 350 ms to <70 ms.  
* Cut operational costs by 35 % (spot pricing + autoscaling).  
* The new topology now supports 500 k writes/sec with zero manual shard rebalancing.

**Leadership Principles Reflected**

* **Ownership** – Took full responsibility for the migration plan and execution.  
* **Dive Deep** – Analyzed latency graphs, IOPS profiles, and failure modes to drive design choices.  
* **Deliver Results** – Quantified impact on availability and cost; learned from a failed split‑brain scenario by tightening election protocols.

This solution balances scalability, high availability, and cost while aligning with AWS best practices for managed document stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
