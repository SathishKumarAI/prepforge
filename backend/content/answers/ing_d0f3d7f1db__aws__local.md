---
qid: ing_d0f3d7f1db__aws__local
question: 'Explain: Redis Codec — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 553
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:34-05:00'
sources: []
---

**Situation (S)**  
At Uber we had to deliver real‑time ride matching data to millions of mobile clients while keeping latency < 50 ms. The database alone couldn’t handle the read volume (~40 M reads/s), so we built an integrated cache layer with a *Redis Codec*.

**Task (T)**  
Design a fault‑tolerant, cost‑effective system that can surface 90%+ of reads from cache, still allowing eventual consistency with DynamoDB and providing strong monitoring for data freshness.

**Action (A)**  

1. **Architecture** –  
   * **Redis Cluster** on EC2 Spot Instances + Elasticache for scaling.  
   * A **custom codec** serializes/deserialize ride‑state objects into a compact binary format, cutting payload by 70% and reducing network I/O.  
   * Reads go first to Redis; on miss, we fetch from DynamoDB (or Aurora) and populate the cache via a Lambda “warm‑up” function.  

2. **Scaling & Availability** –  
   * Auto‑scaling groups with CloudWatch alarms on latency and hit‑rate.  
   * Multi‑AZ deployment ensures < 1 ms failover; Redis Sentinel provides automatic master election.  

3. **Cost & Trade‑offs** –  
   * Spot instances reduce EC2 spend by ~60% compared to On‑Demand.  
   * Persisted snapshots in S3 keep 5× the data for disaster recovery.  
   * Acceptable eventual consistency because ride matching tolerates a few seconds of stale state.

4. **Monitoring & Ops** –  
   * Prometheus + Grafana dashboards show hit‑rate, eviction count, and latency.  
   * Alerts on hit‑rate drop trigger automatic cache rebuilds.

**Result (R)**  
Cache hit‑ratio rose from 30% to 92%, cutting average read latency from 120 ms to 35 ms. Throughput reached 45 M reads/s with a 70% reduction in backend cost, and we avoided any single point of failure.  

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for the end‑to‑end cache design and incident response.  
- **Dive Deep** – Built custom codec to uncover hidden serialization bottlenecks; continuously tuned based on telemetry.  

*Bar‑raiser takeaway:* Look for concrete ownership, deep technical insight, quantifiable impact, and a clear learning loop from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
