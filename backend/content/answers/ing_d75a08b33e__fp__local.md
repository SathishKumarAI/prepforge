---
qid: ing_d75a08b33e__fp__local
question: 'Explain: Read requests — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 394
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:38:13-05:00'
sources: []
---

### Why “read requests” in Elastic’s **data streams** look the way they do  

A *data stream* is a write‑only abstraction: documents flow into an index‑per‑time‑window (the “shard”), and the system guarantees that reads can be served from the *current* shard while new writes go to the next one.  
The fundamental problem is **concurrency without locking** – we must let writers keep appending while readers fetch a consistent snapshot, all with minimal coordination overhead.

1. **Snapshot isolation by index name** – each write request targets the *active* index (e.g., `log-000001`). Readers are directed to that same index until the rollover event creates `log-000002`.  
2. **Atomicity via Lucene’s segment merging** – segments inside an index are immutable; merging happens asynchronously, so readers never see a partially merged state.  
3. **Routing by time‑bucket** – the routing key (`_routing`) is derived from the timestamp field; this guarantees that all documents for a given period land in the same shard, keeping read requests deterministic and parallelizable.

The deeper principle is *optimistic concurrency control*: assume no conflict, proceed with minimal locking, and roll back only when a conflict (e.g., rollover) occurs.  

**Non‑obvious insight:**  
Because readers never need to acquire locks on active shards, the system can expose a *virtual* “read request” endpoint that internally proxies to the current index name. This indirection lets Elastic upgrade or change the underlying storage format without breaking client queries – a subtle but powerful design that keeps the API stable while allowing continuous evolution of the data plane.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
