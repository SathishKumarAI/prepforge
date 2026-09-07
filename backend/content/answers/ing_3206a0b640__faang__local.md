---
qid: ing_3206a0b640__faang__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 480
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:41-05:00'
sources: []
---

**Clarify**  
The question asks how Uber’s real‑time system can deliver > 40 M reads/sec from online storage using a cache that is *integrated* with the persistence layer. We assume: (1) data are stored in an OLTP store (e.g., MySQL/Bigtable), (2) reads are latency‑critical, and (3) writes must stay consistent with cached values.

**Approach**  
1. Use a **write‑through / write‑back cache** that sits directly in front of the database.  
2. On a read, first query the cache; on miss, fetch from DB and populate the cache.  
3. For updates, propagate changes to both cache and DB atomically (e.g., via two‑phase commit or optimistic concurrency).  
4. Employ **conditional updates** (compare‑and‑set) so that stale writes are rejected, keeping cache and store in sync.

**Depth**  
- The cache is a *distributed key–value store* (e.g., Redis/MapR), partitioned by hash to spread load.  
- Each write triggers an `UPDATE` on the DB **plus** an `SET` on the cache with a version tag.  
- Reads hit the cache 95 %+ of the time; only 5 % go to the DB, keeping read latency < 10 ms.  
- Complexity: O(1) for reads/writes in cache; DB ops are amortized over many requests.  
- Consistency is eventual but bounded by the conditional update mechanism.

**Edge Cases**  
- Cache misses during traffic spikes → fallback to DB, potentially throttling.  
- Network partitions between cache and DB could cause stale data; handled via version checks.  
- Write bursts may overwhelm the DB; mitigated with batching or write‑back queues.

**Optimize & Communicate**  
Explain that conditional updates are key: they prevent lost‑update anomalies while keeping the cache authoritative for reads. Highlight trade‑offs (slight consistency lag vs. massive throughput). Conclude by stressing that this pattern scales linearly—adding more cache nodes increases read capacity without touching the DB, enabling Uber to hit 40 M RPS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
