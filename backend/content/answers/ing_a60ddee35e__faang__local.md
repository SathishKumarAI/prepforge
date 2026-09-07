---
qid: ing_a60ddee35e__faang__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 428
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:55-05:00'
sources: []
---

**Clarify**

We’re asked to design a load balancer that can handle large‐volume traffic while keeping memory usage under control.  
Key assumptions:  
* Traffic is read‑heavy; we only need to keep state about active connections or sessions, not full request payloads.  
* The system must scale horizontally and tolerate node failures.  
* Memory budget per node is limited (e.g., < 2 GB for the balancer process).  

**Approach**

1. **Stateless routing with minimal session stickiness** – use consistent hashing or Rendezvous hashing so that most requests hit the same backend without storing per‑request data.  
2. **Compact connection table** – store only a lightweight tuple (client IP → backend ID) in a fixed‑size hash map; evict entries after a short idle timeout.  
3. **Bloom filter for hot clients** – quickly decide if we should route to a cached backend or recompute.  

**Depth**

*Consistent hashing*: O(1) lookup, O(log N) insertion.  
*Connection table*: 16‑byte key + 8‑byte value ≈ 24 bytes per entry; with 10⁶ active sessions → ~24 MB, well within limits.  
*Bloom filter*: false positive rate < 1% using 2 kB for 10⁵ elements.  

**Edge Cases**

* Sudden traffic spikes create many transient connections – use exponential backoff on eviction to keep memory bounded.  
* Backend failures: detect via health checks and move all stale entries out of the hash map.  

**Optimize & Communicate**

Future improvements: replace hash map with a LRU cache for better eviction, shard state across multiple balancer instances, or use RDMA for ultra‑low latency. I would present this as a trade‑off matrix (memory vs. hit‑rate) and validate with load tests before production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
