---
qid: ing_de0257d04e__faang__local
question: 'Explain: Performance vs scalability — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 427
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:09-05:00'
sources: []
---

**Clarify**  
We’re asked to contrast *performance* (latency, throughput, resource usage) with *scalability* (the ability to handle growth in load or data). In a system‑design interview we must confirm: Are we focusing on user‑perceived speed or on the number of concurrent users? What metrics matter most for the client’s business?

**Approach**  
1. Define key metrics (e.g., 95th‑percentile latency, requests per second).  
2. Map each metric to architectural levers—caching, sharding, load balancing, async pipelines.  
3. Quantify trade‑offs: adding cache improves latency but increases memory cost; horizontal scaling boosts throughput but can raise consistency complexity.

**Depth**  
- *Performance* is a **local** property: optimizing hot paths (e.g., read‑heavy endpoints) via in‑memory caches or denormalized tables reduces per‑request cost.  
- *Scalability* is a **global** property: partitioning data across nodes (sharding), using consistent hashing, and employing stateless services lets the system absorb more traffic without degradation.  
Complexity:  
- Latency optimization often yields O(1) lookups with caching but may introduce stale‑data risk.  
- Horizontal scaling introduces O(log N) routing overhead due to distributed hash tables but allows linear throughput growth.

**Edge Cases**  
- Cold starts for new shards (cache misses).  
- Network partitions breaking consistency guarantees.  
- Load spikes that exceed pre‑provisioned cache capacity, causing cascade failures.

**Optimize & Communicate**  
Explain how a hybrid strategy—caching hot data locally while sharding the cold dataset—offers both low latency and linear scalability. Emphasize monitoring (latency dashboards, sharding health metrics) to detect when scaling adjustments or performance tuning are needed. This narrative showcases structured thinking, depth in trade‑offs, and clear communication—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
