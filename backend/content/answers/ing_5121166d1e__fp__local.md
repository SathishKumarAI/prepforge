---
qid: ing_5121166d1e__fp__local
question: 'Explain: same is the true for writes so — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 526
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:46-05:00'
sources: []
---

### Why every write in DynamoDB is *always* strongly‑consistent

**The problem**  
A distributed key–value store must guarantee that a client sees the most recent value it wrote, even when the data is replicated across many nodes for availability and latency. If a write could be “lost” or overwritten by an older replica, the system would violate its own consistency contract.

**The solution in DynamoDB**  
When a client issues `PutItem`/`UpdateItem`, the request first goes to the **partition leader** (the node that owns the key’s hash range). The leader immediately acknowledges the write to the client *after* it has written the data to its local log and sent an **acknowledgment‑only** replication message to all follower replicas. Crucially, these followers do **not** send back a response; they simply record the new version.

Because the leader returns success only after its own commit, any subsequent read—whether strong or eventually consistent—will see that write. The follower replicas are guaranteed to catch up eventually, but the client never has to wait for them.

**Why this works**  
1. **Single‑writer per partition** – eliminates concurrent writes on the same key, so the leader can safely serialize updates.
2. **Optimistic replication** – followers only need to persist the new record; they don’t need to coordinate with each other, keeping write latency low.
3. **Versioning via timestamps** – every item gets a monotonically increasing version number. When followers later receive another write that is older than their current version, they simply discard it.

This design satisfies *CAP*’s consistency–availability trade‑off for writes: the system remains highly available (writes never block on follower latency) while guaranteeing **strong consistency** for the partition leader’s acknowledgement.  

**Non‑obvious insight**  
Most people think “write‑once, read‑any” implies a costly quorum protocol. DynamoDB shows that by restricting concurrency to one writer per key and using versioned logs, you can achieve strong write consistency *without* a heavyweight consensus algorithm—just careful partitioning and optimistic replication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
