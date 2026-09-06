---
qid: ing_d5989e27f4__fp__local
question: 'Explain: Partition keys and request throttling — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 456
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:24-05:00'
sources: []
---

**Why the partition key matters for throttling**

A DynamoDB table is split into *partitions* (physical shards) based on the hash of its primary‑key value.  
Each partition has a fixed capacity: **1 000 write‑unit‑seconds and 3 500 read‑unit‑seconds per second** (or whatever you provision).  
When every request hashes to the same partition, all of those requests compete for that single pool of units—*hot‑partition throttling*.  
Conversely, if keys are spread evenly across many partitions, each key gets its own share of capacity and the table scales linearly with the number of partitions.

**Deriving the rule**

1. **Throughput ≈ Σ capacity per partition** – because DynamoDB does not redistribute traffic once a partition is created.  
2. **Hot spot = high‑frequency keys → low effective throughput** – each key can only use the units allocated to its partition.  
3. Therefore, *to avoid throttling you must design a key that yields a uniform hash distribution*.

**Practical insight**

A common mistake is to think “just add random digits” will help; it does, but only if those digits are truly independent of request patterns.  In many workloads (e.g., timestamp‑based keys) the first few bytes change slowly, causing a burst of writes to one partition even though later bytes vary wildly.  
The fix is to **prepend a hash or a time‑bucket value** that changes rapidly, ensuring each write lands in a different partition *before* DynamoDB applies its own internal hashing.

In short: choose a partition key whose values are both unique and *random‑ish*, not just unique, to keep throttling at bay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
