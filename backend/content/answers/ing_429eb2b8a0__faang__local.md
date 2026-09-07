---
qid: ing_429eb2b8a0__faang__local
question: 'Explain: Clients — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 588
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:58-05:00'
sources: []
---

**Clarify**  
We’re asked to design a URL‑shortening service (think bit.ly). Key requirements:  
* Short URLs must be unique and short (~6–8 chars).  
* Extremely high write/read throughput.  
* Low latency (< 50 ms) for both creation and redirection.  
* Persistence, fault tolerance, and graceful scaling.

**Approach**  
1. **API layer** – REST endpoints: `POST /shorten`, `GET /{code}`.  
2. **Encoding scheme** – Base‑62 counter or hash + collision handling (e.g., double hashing).  
3. **Data store** – Distributed key‑value store (Cassandra/Redis Cluster) for fast lookup; RDBMS only for analytics.  
4. **Cache layer** – In‑memory LRU cache (e.g., Redis) to hit hot URLs.  
5. **Sharding** – Partition by hash of the code to spread load across nodes.  
6. **Replication & HA** – Each shard replicated; use quorum reads/writes for consistency.  
7. **Analytics pipeline** – Append-only log (Kafka) → batch processing → analytics DB.

**Depth**  
*Encoding*: Maintain a global atomic counter; convert to Base‑62 for 8‑char string: `code = base62(counter)`. If collision occurs, increment counter until free.  
*Storage*: `{code} → {original_url}` in key‑value store; TTL optional for expiring unused codes.  
*Complexity*: O(1) write/read to KV; cache hit O(1), fallback read O(log N).  
*Fault tolerance*: On node failure, re‑replicate shard data from replica.  

**Edge Cases**  
*High collision rate (e.g., same counter value due to race): use distributed lock or atomic increment.*  
*Very popular URLs: cache eviction policy must keep them warm.*  
*Expired codes: return 404; optionally redirect to a “URL not found” page.*

**Optimize & Communicate**  
- **Batch writes** to KV for bursty traffic.  
- **Read‑through cache** with prefetch of related URLs (e.g., campaign links).  
- Monitor latency distribution and auto‑scale shards based on CPU/latency thresholds.  
Explain trade‑offs: stronger consistency (Paxos) vs. lower latency; using a single counter centralizes traffic but is a bottleneck—can shard counters per region to mitigate.

This structure shows clear problem understanding, systematic design, technical depth, and awareness of edge cases—all the signals FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
