---
qid: ing_20cf077dfd__fp__local
question: 'Explain: is clearly the consumed one is so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 394
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:55-05:00'
sources: []
---

**Why DynamoDB works “the way it does”**

At its core DynamoDB is a *partitioned key‑value store* that must answer two hard constraints:  
1) **Low latency** – sub‑millisecond reads/writes for billions of items;  
2) **Linear scalability** – adding nodes should increase capacity and throughput proportionally.

The solution follows from the *distributed hash table (DHT)* principle: split data by a *hash key* into 10,000+ partitions (“shards”). Each partition is an Amazon‑owned EC2 instance that runs a small “table engine” (a memory‑resident B‑Tree + on‑disk log).  

To keep latency constant, each table engine:

- **Prefetches hot pages** into a read cache and keeps a write buffer in RAM.  
- Uses **single‑writer semantics**: writes are first appended to an immutable log; the log is flushed asynchronously to SSD, guaranteeing durability without blocking the client.  
- Maintains a **commit‑log index** that allows point‑in‑time recovery and supports multi‑region replication.

The *probabilistic consistency* model (eventual consistency with optional strong reads) emerges from allowing each partition to serve requests independently; only when an application explicitly demands a “strong read” does DynamoDB perform a cross‑partition quorum, incurring the latency penalty.

**Non‑obvious insight:**  
Because every write is first recorded in a log that is *append‑only*, DynamoDB can batch compaction and garbage collection without downtime. This turns the traditional trade‑off between write amplification and read performance into a single, scalable operation: writes are cheap (just append), reads stay fast (cached B‑Tree), and storage overhead stays bounded by controlled compaction schedules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
