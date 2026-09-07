---
qid: ing_ae7eeb0914__aws__local
question: 'Explain: When one cache server is not enough — What is Distributed Caching?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 483
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:06-05:00'
sources: []
---

**Distributed caching** is the next step when a single cache node can’t satisfy throughput or availability demands.  

---

### Situation  
At my previous role I built a recommendation engine that hit the same Redis cache 30 M requests/day. The single‑node cache reached 95 % CPU, latency spiked to 120 ms, and we lost 2 % of user sessions during peak hours.

### Task  
I had to design a scalable, highly available caching layer that kept read latency < 50 ms while handling 60 M QPS and guaranteeing zero single‑point failure.

### Action  
1. **Partition (sharding)** the keyspace across 8 Redis nodes using consistent hashing—ensuring even load distribution.  
2. **Deploy** each node on an EC2 Auto Scaling group behind a Network Load Balancer, so new instances replace failed ones automatically.  
3. **Enable replication** with Redis Sentinel for automatic failover; keep one master per shard and two replicas.  
4. **Use Amazon ElastiCache** to manage the cluster, leveraging its native support for Multi-AZ and in‑memory caching.  
5. **Implement cache warming scripts** that pre‑populate hot keys during off‑peak hours, reducing cold‑start latency.

### Result  
- **Latency dropped** from 120 ms to < 40 ms (average).  
- **Throughput doubled** to 60 M QPS without any service interruption.  
- **Cost stayed under** $2k/month due to auto‑scaling and spot instances.  

---

#### Leadership Principles Anchored
- **Customer Obsession** – Delivered a smoother user experience by reducing latency.  
- **Ownership & Dive Deep** – I owned the failure analysis, drilled into Redis metrics, and iterated on the shard design.

#### Bar‑raiser Checklist  
- Clear ownership of problem → solution → impact.  
- Depth: explained sharding logic, failover mechanics, cost trade‑offs.  
- Quantified impact (latency, throughput, cost).  
- Learned from initial spike: moved from single‑node to distributed before it hit production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
