---
qid: ing_1c7a2938ff__faang__local
question: 'Explain: to delete the the item and so — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 502
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:12-05:00'
sources: []
---

**Clarify**

You’re asking how DynamoDB deletes an item under the hood – i.e., what happens from the client’s `DeleteItem` request to the eventual removal of data across a globally‑distributed, highly available store.

*Assumptions:*  
1. The key (partition + optional sort) uniquely identifies the record.  
2. No conditional expressions or TTL involved.  
3. All replicas are healthy and reachable.

**Approach**

1. Client → DynamoDB API Gateway → Request routing.  
2. Routing to the partition’s owner node (determined by hash of partition key).  
3. Owner node writes a delete marker into its local log/commit‑log.  
4. The node propagates the delete to all replicas via DynamoDB’s multi‑region replication layer.  
5. Each replica acknowledges; once quorum is reached, the item is considered deleted.  
6. Garbage collection later physically removes tombstoned entries.

**Depth**

- **Delete Marker (Tombstone):** A lightweight record that flags “item removed” but preserves history for read consistency and eventual cleanup.  
- **Write Path:** Uses DynamoDB’s write‑ahead log (WAL) on SSDs, guaranteeing durability before ack.  
- **Replication:** DynamoDB uses a Paxos‑like protocol across AZs; the owner node forwards the marker to all replicas.  
- **Read Consistency:** Strong reads hit the primary replica; eventual reads may see stale data until tombstone is replicated and cleaned.  
- **Complexity:** Amortized O(1) write time, network cost proportional to number of replicas (typically 3).  

**Edge Cases**

- *Partial replication failure:* If a replica is down, DynamoDB buffers the delete locally; once recovered it receives the marker.  
- *Concurrent deletes/updates:* Last‑write‑wins based on timestamps in the log.  
- *Large items:* Delete still O(1) because only metadata changes; physical size removed during compaction.

**Optimize & Communicate**

Explain that DynamoDB trades immediate physical removal for durability and consistency, using tombstones to keep reads correct while allowing background compaction. Emphasize that this design lets the service scale horizontally without complex distributed locking, meeting Amazon’s throughput targets. Highlight that understanding this flow is key when troubleshooting eventual consistency or debugging delayed deletions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
