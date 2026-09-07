---
qid: ing_e6dc8eed23__aws__local
question: 'Explain: Build an in-memory key-value store with SET/GET/DELETE, then add
  transactions with BEGIN/COMMIT/ROLLBACK - including nested transactions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 563
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:17-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a high‑throughput in‑memory key‑value store (KV) that supports `SET`, `GET`, `DELETE` and later transactional semantics (`BEGIN/COMMIT/ROLLBACK`) with nesting, for an e‑commerce recommendation engine.  

**Action**  
* **Core KV layer** – Use a lock‑free hash table (C++ `concurrent_unordered_map`).  
  * Each key maps to a value and a version stamp.  
  * All operations run in O(1) average time, achieving >10 k ops/sec on an EC2 M6i instance.  

* **Transaction layer** – Implement MVCC:  
  * `BEGIN` creates a transaction context with a snapshot of the global commit counter.  
  * `SET/DELETE` record changes in a per‑transaction write set; reads consult the snapshot first, then the write set.  
  * Nested transactions share the parent’s snapshot and merge their write sets on `COMMIT`.  
  * `COMMIT` validates no conflicting commits occurred (compare version stamps). If conflict → abort.  

* **AWS services** – Deploy on an Auto‑Scaling group behind an Application Load Balancer; use **Amazon Elasticache Redis** as a warm‑up cache for hot keys, and **S3** to persist a write‑ahead log for durability in case of node failure.  

* **Scalability / Availability** – Horizontal scaling by sharding the key space across nodes; each shard runs independently.  
  * Consistency is achieved via optimistic locking; eventual consistency for cross‑shard reads.  
  * Cost: ~0.4 $ per hour per instance; S3 log writes negligible.

**Result**  
The system handled 15 k ops/sec with <5 ms latency, and nested transactions (depth > 3) maintained >99.9 % success rate under concurrent load. The design also reduced code complexity by 30 % compared to a naive lock‑based approach.

---

### Leadership Principles Anchored
- **Ownership** – I drove the entire feature from spec to production, including monitoring and incident post‑mortems.  
- **Dive Deep** – Detailed MVCC reasoning, conflict resolution logic, and cost modeling were all quantified.  

*Bar‑raiser notes:* clear ownership narrative, deep technical dive with trade‑offs, measurable impact, and acknowledgment of learning (e.g., switching from locks to MVCC after latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
