---
qid: ing_ba22b720c7__faang__local
question: 'Explain: thing we call it rep out the — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 587
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:37-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of DynamoDB’s core design from the 2018 re:Invent talk “Under the Hood.” We’ll assume they’re interested in how Amazon built a distributed, highly‑available key‑value store that scales to millions of requests per second.

---

**Approach**  
1. Highlight the *data model* (partition key + optional sort key).  
2. Explain the *sharding* strategy (hash‑based partitioning → tablets).  
3. Describe replication & consistency: Dynamo’s quorum reads/writes, anti‑entropy, and eventual vs. strong consistency options.  
4. Touch on performance knobs: provisioned throughput, auto‑scaling, caching (DAX), and the use of SSDs for latency.

---

**Depth**  

- **Sharding & Tablets** – Each item is hashed to a *partition key*; partitions are split into tablets that live on different nodes. A tablet holds 10 GB–100 GB of data and can be replicated across three availability zones.
  
- **Replication & Consistency** – DynamoDB uses *quorum replication*: writes go to the majority of replicas (2‑of‑3 for strong consistency, 1‑of‑3 for eventual). Reads can be served from any replica; if a node is slow or down, the system falls back to another. The anti‑entropy service reconciles divergent replicas via Merkle trees.

- **Provisioned Throughput** – Tables are configured with read/write capacity units (RCUs/WCUs). Auto‑scaling adjusts these based on traffic patterns, while *on‑demand* mode charges per request.

- **Latency & Storage** – Data is stored on SSDs; each tablet’s index is in memory for sub‑millisecond lookups. DynamoDB Accelerator (DAX) adds an in‑memory cache layer for read‑heavy workloads.

---

**Edge Cases**  

- *Hot partitions* (skewed traffic) can cause throttling; mitigation includes key design and sharding.  
- *Network partitions* are handled by quorum but may increase latency or lead to temporary inconsistencies.  
- *Large items* (>400 KB) must be split or stored in S3 with a reference.

---

**Optimize & Communicate**  

I’d stress that DynamoDB’s brilliance lies in its *simple API + powerful back‑end*: a hash‑sharded, replicated system that abstracts complexity while offering fine‑grained control over consistency and throughput. I would conclude by noting how this architecture scales horizontally—adding nodes automatically splits tablets and redistributes traffic—making it fit for the millions of requests Amazon services generate daily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
