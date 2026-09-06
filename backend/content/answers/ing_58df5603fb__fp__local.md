---
qid: ing_58df5603fb__fp__local
question: 'Explain: may not get the most recent put — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 552
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:10-05:00'
sources: []
---

### Why you may miss the **most recent write** in DynamoDB

When you issue a *put* to a DynamoDB table you are writing to one of several
replica nodes (one per partition key range).  
The request is acknowledged as soon as the *primary* replica has persisted the
item, but the data must still be replicated to the remaining **secondary**
replicas.  
DynamoDB’s “eventual consistency” model guarantees that once replication
completes every read will see the latest value, but it does not guarantee that a
subsequent read—especially one issued immediately after the write—will hit a
node that already has the update.

#### Derivation from first principles

1. **Atomicity & durability**  
   The primary replica must commit the log entry before replying (to satisfy ACID A).
2. **Replication latency**  
   Secondary replicas are updated asynchronously; the time to propagate is
   variable and depends on network, load, and partition geometry.
3. **Read‑time consistency choice**  
   A read can either be *strongly consistent* (always hits the primary) or
   *eventually consistent* (may hit any replica).  
   The latter offers lower latency but risks reading stale data.

Thus a strongly consistent read will always return the latest put because it
consults the node that just wrote. An eventually‑consistent read may miss the
write if it happens to contact a secondary that has not yet received the update.

#### Deeper principle

This behavior is an instance of **consistency–latency trade‑off** in distributed
systems, formalized by the CAP theorem: you cannot simultaneously have
Consistency, Availability, and Partition tolerance. DynamoDB opts for *Availability*
and *Partition tolerance* at the cost of immediate consistency.

#### Non‑obvious insight

The most subtle point is that **the “most recent” write is not a global notion**.
Because each partition key range has its own set of replicas, a write to one
range can be replicated faster or slower than another. Therefore even a *strong*
read on the same item may appear stale if you happen to hit a replica that
has not yet been updated due to a network glitch or load spike—an edge case
rarely documented but crucial for latency‑sensitive applications.

In practice, use **strong consistency** only when you need guaranteed freshness,
otherwise accept eventual consistency and design your application logic (e.g.,
idempotent writes, read-after-write retries) around it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
