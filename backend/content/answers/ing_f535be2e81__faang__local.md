---
qid: ing_f535be2e81__faang__local
question: 'Explain: Challenges — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 480
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:01-05:00'
sources: []
---

**Clarify**  
The question asks how Uber can deliver **>40 M reads/sec** from a distributed “online storage” layer while keeping latency low and cost reasonable.  
Assumptions to confirm:  
* Reads are read‑heavy (e.g., map tiles, trip status).  
* Data is partitioned/sharded across many nodes.  
* The cache sits *in front of* the primary storage tier.  

**Approach**  
1. Use a multi‑tier cache hierarchy (in‑memory L1 + SSD L2).  
2. Replicate hot data to edge servers near users.  
3. Employ consistent hashing + dynamic rebalancing for sharding.  
4. Leverage read‑through & write‑back policies with eventual consistency.

**Depth**  
* **Cache tiering**: 90 % of traffic served from L1 (~10 GB RAM) gives <5 ms latency; remaining 10 % hit L2 (SSD, ~50 µs).  
* **Sharding**: Consistent hashing with virtual nodes keeps per‑node load ~40 M / N. If N=400, each node handles ~100k reads/sec.  
* **Replication**: 3‑way replication across AZs ensures availability; read replicas reduce primary load by ~70 %.  
* **Eviction policy**: LFU with time‑to‑live (TTL) for stale data.  
* **Backpressure**: Use token buckets to prevent cache storms and spillover to storage.

**Edge Cases**  
* Cache stampede on key miss → use “single flight” or mutex per key.  
* Sudden traffic spike → autoscale L1 nodes; fall back to L2.  
* Data consistency drift → periodic background sync with primary store.

**Optimize & Communicate**  
- Profile hot keys and auto‑promote them to higher tiers.  
- Quantify cost: 400 RAM nodes (~$2000/hr) vs. SSD tier ($500/hr).  
- Present latency/throughput graphs to show target meets SLA.  

This architecture balances throughput, latency, and cost while providing graceful degradation under failure conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
