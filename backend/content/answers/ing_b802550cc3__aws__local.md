---
qid: ing_b802550cc3__aws__local
question: 'Explain: Distributed Cache — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 437
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:12-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a highly‑available, low‑latency distributed cache for an e‑commerce platform that serves ~3 M daily requests and must keep product price data fresh within 2 s.

**Action (Design)**  
- **Service choice:** Amazon ElastiCache with Redis cluster (sharded, read replicas).  
- **Topology:** Two shards per node group, each with a primary + two replicas for fail‑over.  
- **Partitioning:** Key‑based consistent hashing on product ID; auto‑resharding via `redis‑cluster`.  
- **Eviction & TTL:** LRU policy, 5 min TTL to ensure price staleness <2 s.  
- **Cache invalidation:** Pub/Sub channel where the price‑update service publishes keys; all nodes subscribe and delete entries immediately (eventual consistency).  
- **Scaling strategy:** Use AWS Auto Scaling for node groups based on CPU >70% or cache hit ratio <60%.  
- **Cost trade‑off:** 3 AZ deployment gives 99.95 % availability; a single‑AZ would cut cost by ~30 % but risk 30 min downtime.

**Result (Quantified)**  
After rollout, cache hit rate rose from 35 % to 92 %, cutting database read traffic by 70 %. Page latency dropped 4× (from 350 ms to 90 ms) and 99.98 % of requests stayed within SLA.  

**Reflection / Bar‑raiser notes**  
- *Ownership:* I led cross‑team coordination, wrote the runbook for fail‑over.  
- *Dive Deep:* Benchmarked latency under different shard counts; tuned `maxmemory-policy`.  
- *Learning from failure:* Initial single‑AZ design caused 15 min outage during a node reboot—prompted the multi‑AZ strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
