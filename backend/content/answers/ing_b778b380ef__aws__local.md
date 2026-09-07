---
qid: ing_b778b380ef__aws__local
question: 'Explain: Cache Invalidation — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 439
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:42-05:00'
sources: []
---

**S**ituation  
At Uber’s trip‑matching service we hit ~40 M reads/s for rider and driver location data. The primary store (DynamoDB) was too slow for real‑time routing, so I owned a caching layer that needed to stay fresh while handling burst traffic.

**T**ask  
Design an integrated cache with efficient invalidation that guarantees <10 ms latency for 99.9% of requests and keeps the read amplification below 20%.

**A**ction  
1. **Architecture** – A two‑tier cache:  
   * **Redis (Amazon ElastiCache)** for hot keys (top 1% locations).  
   * **DynamoDB Global Tables** as write‑through source.  
2. **Invalidation strategy** – Use DynamoDB Streams to push TTL events to an SNS topic, consumed by a Lambda that publishes to the Redis keyspace notification channel. Each write updates or deletes the corresponding cache entry instantly (eventual consistency ≈ 50 ms).  
3. **Scalability & cost** – Auto‑scaling of ElastiCache nodes based on CPU/eviction metrics keeps memory usage <80%. Cost per month ≈ $12K vs. $30K for DynamoDB alone.  
4. **Reliability** – Redis replicas provide 99.99% availability; failover is automatic within seconds.

**R**esult  
- Latency dropped from 150 ms to 8 ms (average).  
- Read throughput increased by 3×, supporting 40 M rps with <1 s error rate.  
- Cost savings of ~60% and reduced backend load by 70%.  

*Leadership Principles:* **Ownership** – I drove the end‑to‑end solution; **Dive Deep** – I engineered stream‑based invalidation and quantified trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
