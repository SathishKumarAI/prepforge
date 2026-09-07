---
qid: ing_375f5b5013__faang__local
question: 'Explain: for DynamoDB replication so when we propagate'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 509
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:45-05:00'
sources: []
---

**Clarify**  
You’re asking how DynamoDB keeps data consistent across regions—i.e., the mechanics of cross‑region replication and eventual consistency.  
Assumptions: *Single‑writer, multi‑reader* table; user wants to know what “propagate” means in terms of write path, conflict resolution, and latency.

**Approach**  
1. Map the write flow from client → local region.  
2. Explain how DynamoDB writes to the primary partition key node, then replicates to secondary regions via Amazon’s global tables.  
3. Cover conflict resolution (last‑write‑wins) and consistency guarantees (eventual + read‑your‑writes).  

**Depth**  
- **Write path:** Client sends a `PutItem`/`UpdateItem`. The local region writes the item to its primary node, updates its transaction log, then asynchronously streams the change to each secondary region via DynamoDB Streams.  
- **Replication:** Each region has a background “replicator” that pulls from the stream, applies the write, and acknowledges. Replication latency is typically <200 ms but can be higher during bursts.  
- **Conflict resolution:** If two regions receive concurrent writes for the same item, DynamoDB uses a *last‑write‑wins* policy based on the timestamp in the commit log (stored as a hidden `__DynamoDBLastModified` attribute).  
- **Consistency model:** Reads from any region are eventually consistent; if you need read‑your‑writes, perform the read in the same region that performed the write or use *Strongly Consistent* reads locally.

**Edge Cases**  
- Network partitions: a region may become isolated; its writes will queue until connectivity returns.  
- Write conflicts on non‑partition key attributes can lead to lost updates if not handled by application logic.  
- Large items (>400 KB) trigger multipart uploads, affecting replication order.

**Optimize & Communicate**  
- For low latency, use *global tables* with region‑specific endpoints and enable *cross‑region read replicas*.  
- Monitor the stream lag; if it grows beyond acceptable thresholds, consider scaling the replicator or adding a dedicated replica.  
- Explain to interviewers that while DynamoDB abstracts most complexity, understanding replication flow helps diagnose consistency anomalies and design idempotent write patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
