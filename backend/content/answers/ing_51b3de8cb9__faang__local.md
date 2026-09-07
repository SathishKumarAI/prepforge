---
qid: ing_51b3de8cb9__faang__local
question: 'Explain: around 9:30 or so we actually got — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 525
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:26-05:00'
sources: []
---

**Clarify**

You want a concise technical overview of the 2018 re:Invent session “Amazon DynamoDB Under the Hood” (DAT321).  
Assumptions:  
* Audience knows basic NoSQL concepts but not DynamoDB internals.  
* We’ll focus on architecture, scaling, consistency and trade‑offs rather than code.

**Approach**

1. Outline DynamoDB’s core design goals.  
2. Walk through the data model (partition keys, sort keys).  
3. Explain storage layer: SSD‑backed shards + key‑value store.  
4. Detail horizontal partitioning & automatic rebalancing.  
5. Cover consistency options and latency guarantees.  
6. Touch on resiliency (multi‑AZ replication) and performance tuning.

**Depth**

- **Partitioning** – Items are distributed across ~2 TB “shards” by hash of the primary key; each shard is a single‑writer, multiple‑reader storage engine.  
- **Storage** – Uses a LSM‑tree style log‑structured merge with compaction to SSDs; read/write latency < 10 ms at scale.  
- **Scaling** – Auto‑scaling provisioned throughput per table/partition; when hot partitions exceed limits, DynamoDB splits them (sharding) without downtime.  
- **Consistency** – Two modes: *Eventually* (default, low‑latency) and *Strongly Consistent* (single‑AZ read after write). Reads use a local cache of the latest commit log for strong reads.  
- **Resiliency** – Each shard is replicated across 3 AZs; writes are logged to all replicas first, then applied asynchronously—ensuring durability even during network partitions.  

**Edge Cases**

* Hot keys can trigger split churn; monitor and pre‑shard if predictable.  
* Provisioned throughput underestimates → throttling (5 % error rate).  
* Cross‑region reads require eventual consistency unless using Global Tables.

**Optimize & Communicate**

Highlight that DynamoDB’s “under the hood” design mirrors a distributed key‑value store with automatic sharding, SSD persistence, and configurable consistency—allowing teams to scale petabytes of data while keeping latency low. Conclude by noting that this architecture lets developers focus on application logic rather than cluster management, which is why it’s a flagship AWS service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
