---
qid: ing_74e4154c48__aws__local
question: 'Explain: Advantages of Redis Cluster — Rediscluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:23-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that needed to serve real‑time recommendation scores for ~10 M users with <5 ms latency. We chose Redis Cluster over single‑instance Redis because of scaling and high availability.

**Action (Technical)**  
1. **Horizontal sharding** – 6 shards, each on an EC2 spot instance (t3.medium).  
2. **Replication** – 2 replicas per shard for failover.  
3. **Client‑side hashing** – used `MGET` with pipelining to hit multiple shards in parallel.  
4. **Eviction policy** – `volatile-lru` on hot keys, keeping 1 GB cache per node.  

I modeled traffic: peak 200 k requests/sec → ~120 k QPS per shard. The cluster handled it while staying below 10 % CPU usage and <5 ms average latency.  
We reduced cache‑miss rates from 32 % to 8 %, cutting downstream DB calls by 70 %. Costs dropped 35 % vs a single 4‑core instance.

**Result**  
- **Availability**: 99.99 % SLA, automatic failover in <2 s.  
- **Scalability**: Linear throughput increase when adding shards.  
- **Cost**: $0.12/hr per node → $7.20/month for the cluster vs ~$30/month for a single‑node solution.

**Reflection (Leadership Principles)**  
*Customer Obsession*: Delivered sub‑5 ms latency, directly improving user engagement (+15 % click‑through).  
*Ownership & Dive Deep*: I architected and tuned the cluster from scratch, monitored metrics, and iterated on eviction policies.  
*Bias for Action*: Rolled out the cluster in two sprints; no downtime.

**Bar‑raiser cues** – I quantified impact (latency, cost, miss rates), showed deep technical decisions (sharding, replication), and learned to adjust eviction policy after observing hot‑key drift during a traffic spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
