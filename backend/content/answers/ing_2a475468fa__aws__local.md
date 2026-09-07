---
qid: ing_2a475468fa__aws__local
question: 'Explain: Shard — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 451
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:01-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science team that had to scale a recommendation engine from 50 M daily active users to 200 M while keeping query latency under 100 ms. MongoDB’s single‑node throughput capped at ~10 k ops/sec, so we needed horizontal scaling.

**Action**  
I owned the solution and drove a **MongoDB sharding** architecture:

1. **Shard key design** – chose `{userId: 1}` to distribute writes evenly across shards; added a hashed secondary index for range queries on `timestamp`.  
2. **Cluster topology** – deployed **3 config servers (R‑A‑S)**, **6 shard replicasets (primary + two secondaries)**, and an **mongos router** front‑end behind an Application Load Balancer.  
3. **AWS services** – used **Amazon EC2 Spot Instances** for cost‑effective shards, **Elastic IPs** for stable mongos endpoints, and **EBS gp3 volumes** (1 TB per shard) with throughput‑optimized I/O.  
4. **Automation & monitoring** – scripted `mongod` deployment via CloudFormation, enabled **Prometheus + Grafana** dashboards, and set up CloudWatch alarms for replica lag > 200 ms.

**Result**  
After rollout:  
- Throughput increased from 8 k to 45 k ops/sec (5×).  
- Latency dropped from 250 ms to 70 ms (≈70% improvement).  
- Operational cost decreased by 35 % using Spot Instances, while SLA‑compliant uptime remained 99.95%.  

**Reflection**  
I learned that shard key choice is critical; a poor key would have caused “hot shards” and degraded performance. Future iterations will add **auto‑sharding with dynamic split/merge** to keep chunk sizes balanced as data grows. This experience demonstrates *Ownership*, *Dive Deep* into system behavior, and *Bias for Action* in delivering measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
