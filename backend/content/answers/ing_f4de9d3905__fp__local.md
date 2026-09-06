---
qid: ing_f4de9d3905__fp__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 503
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:09-05:00'
sources: []
---

**Why DynamoDB caps a table at five Global Secondary Indexes (GSIs)**  

At its core, DynamoDB is a key‑value store that guarantees *constant‑time* reads and writes by partitioning data across thousands of nodes. Each item is stored in a single partition (determined by the primary key), and every write must be replicated to **N** replicas for durability.  

A GSI is essentially a *second view* of the same items: it projects a subset of attributes onto a new hash‑key / sort‑key pair, and each update to an item must also update all projected GSIs.  
This introduces two costs:

1. **Write amplification** – every `PutItem` or `UpdateItem` now touches *k+1* tables (the base table plus k GSIs).  
2. **Space amplification** – each GSI holds a copy of the projected attributes, increasing storage and I/O.

The DynamoDB design team derived an upper bound that keeps these amplifications within acceptable limits for their target workloads: **five GSIs**. The reasoning is:

| k (GSIs) | Approx. write amplification | Storage overhead |
|----------|-----------------------------|------------------|
| 1        | 2×                         | ~2×              |
| 5        | 6×                         | ~6×              |

Beyond five, the cost curve steepens sharply; adding a sixth GSI would double the writes and storage for many workloads without a commensurate benefit.  

**Optimization principle:**  
The system trades *fan‑out* (number of indexes) against *latency* and *throughput*. By bounding k, DynamoDB guarantees that **every write remains bounded by O(k)** operations, preserving its advertised single‑digit millisecond latency even at petabyte scales.

**Non‑obvious insight:**  
The limit is not a hard‑coded architectural flaw but an *operational safety margin* for the underlying *partitioned replication* scheme. Each GSI resides on separate partitions; if you exceed five, the probability that all replicas of one partition miss out on a particular GSI increases, breaking DynamoDB’s strong consistency guarantees for those indexes. Thus, the cap protects both performance and correctness in a distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
