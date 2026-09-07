---
qid: ing_58df5603fb__faang__local
question: 'Explain: may not get the most recent put — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 502
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:11-05:00'
sources: []
---

**Clarify**  
You’re asking why a client might read stale data immediately after a `PutItem` on Amazon DynamoDB. The key assumptions: (1) the write is completed; (2) reads are performed with *eventual consistency* (the default); and (3) there’s no explicit retry or consistency mode change.

**Approach**  
Explain DynamoDB’s storage model → data is replicated across multiple nodes in a partition, then to other partitions for fault tolerance. Show how writes first hit the local node, propagate asynchronously, and that reads may consult any replica. Then discuss read‑consistency options and their guarantees.

**Depth**  
- **Write path**: `PutItem` is logged to the *write-ahead log* on the partition’s leader node and persisted locally. Replication to follower nodes occurs via asynchronous background threads.  
- **Read path (eventual consistency)**: A read may hit any replica, including a follower that hasn’t yet received the latest write. Therefore the value returned can be one version behind.  
- **Strong consistency**: Forces the read to go to the leader node and wait for the write‑log acknowledgment, guaranteeing visibility of the most recent `PutItem`.  
Complexity: Reads are O(1) in both modes; writes remain O(log n) due to partitioning but replication is background. Trade‑off: eventual consistency gives lower latency and higher throughput at the cost of staleness.

**Edge cases**  
- Network partitions or node failures delay replication, increasing staleness window.  
- Mixed read/write workloads on a heavily loaded table can exacerbate lag.  
Test by issuing `PutItem` followed immediately by a default read; observe possible stale values and then repeat with `ConsistentRead=true`.

**Optimize & communicate**  
If the application requires up‑to‑date data, recommend using *strongly consistent reads* or implementing an optimistic concurrency control (e.g., conditional writes). Emphasize that DynamoDB’s design balances latency, availability, and consistency per CAP theorem; choosing the right read mode is critical. This narrative shows structured thinking, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
