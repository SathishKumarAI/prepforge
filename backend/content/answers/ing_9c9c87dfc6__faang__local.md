---
qid: ing_9c9c87dfc6__faang__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 535
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:03-05:00'
sources: []
---

**Clarify**  
You’re building a location‑based service where each business is identified by a *compound key* (e.g., `city|category|business_id`). The interviewer wants to know why this design makes “removal” easier and what trade‑offs it introduces.

Assumptions:  
- We store data in a distributed NoSQL store (Cassandra/Bigtable).  
- Deletions are “logical” (mark removed) or “physical” (purge).  
- Hotspots and read/write concurrency matter.

---

**Approach**  
1. Explain the compound key layout.  
2. Show how deletions map to a single partition.  
3. Discuss consistency, tombstones, compaction, and eventual cleanup.  

---

**Depth**  

| Step | Reasoning |
|------|-----------|
| **Partitioning** | `city|category` → same partition ⇒ all rows for that bucket reside together. |
| **Delete Operation** | A single DELETE on the key (`DELETE FROM businesses WHERE city='NYC' AND category='Restaurant' AND business_id='123';`) writes a tombstone in that partition. No cross‑partition traffic. |
| **Compaction & Tombstones** | Periodic compaction scans the partition, removes tombstoned rows, and frees space—efficient because all deletions are local. |
| **Consistency** | Strong consistency per partition is easier to guarantee; no need for distributed two‑phase commit. |
| **Scalability** | Partitions can be split if a city/category becomes too large; splits preserve delete locality. |

Complexity: *O(1)* read/write plus *O(k)* compaction where *k* = rows in the partition.

---

**Edge Cases**  
- Hot partitions → may need horizontal scaling or sharding across multiple servers.  
- Tombstone accumulation if deletes are frequent and compaction lagging.  
- Deleting a business that belongs to many categories requires multiple DELETEs.

---

**Optimize & Communicate**  

1. **Batch Deletes**: group removals per partition to reduce RPC overhead.  
2. **TTL**: apply time‑to‑live on tombstones for automatic cleanup.  
3. **Monitoring**: track tombstone count and compaction lag; auto‑scale partitions when thresholds hit.

Explain that the compound key gives *O(1)* delete locality, reduces distributed coordination, and keeps compaction simple—key advantages in a high‑traffic Yelp‑style service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
