---
qid: ing_c2ed944fac__aws__local
question: 'Explain: Sharding Supported (using Redis Cluster)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 494
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:41-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to expose an internal recommendation engine via a public API that served 12 M requests/day. The underlying dataset—user–item interaction logs—grew from 10 GB to 350 GB in just six months, causing single‑node Redis instances to hit memory limits and latency spiked above our SLA of 50 ms.

**Action (Design)**  
I proposed a **Redis Cluster** solution to shard the keyspace across multiple nodes.  
- **Sharding Strategy:** We partitioned by `user_id` hash slots (4 096 slots) and mapped each slot to a cluster node, ensuring even distribution and O(1) lookup time.  
- **AWS Services Used:**  
  - *Amazon ElastiCache for Redis* (cluster mode enabled) – gives automatic sharding, fail‑over, and patching.  
  - *Auto Scaling Groups* behind the cluster to add/remove nodes based on CPU/memory thresholds.  
  - *CloudWatch Alarms* to trigger scaling actions and alert on key eviction rates.  
- **Scalability & Availability:** The cluster supports up to 10 TB of data with a single‑master per shard, providing read replicas for high availability. I set up cross‑region replication (primary in us-east-1, replica in eu-central-1) to meet our disaster‑recovery objective.  
- **Cost Trade‑offs:** By provisioning on-demand nodes during peak hours and using Reserved Instances otherwise, we reduced monthly spend by 18 % while keeping latency below SLA.

**Result**  
After deployment:  
- Latency dropped from 120 ms to **32 ms (73 % improvement)**.  
- Memory usage per node fell to <60 % capacity, eliminating evictions.  
- The system handled a 4× traffic surge during a marketing campaign without any outages.

**Reflection**  
I took full ownership of the migration, diving deep into Redis internals and AWS networking to troubleshoot a subtle cluster‑slot mapping bug that initially caused data loss. I documented the failure mode in our post‑mortem and introduced an automated slot health check. This experience reinforced my bias for action while maintaining rigorous testing before production rollout—aligning with *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
