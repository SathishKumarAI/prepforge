---
qid: ing_a697adb0be__fp__local
question: 'Explain: How adaptive capacity works — How Amazon DynamoDB adaptive capacity
  accommodates uneven data access patterns (or, why what you know about DynamoDB might
  be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 450
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:59:55-05:00'
sources: []
---

**Adaptive Capacity: a principled response to skewed workloads**

At the core of any distributed key‑value store is *partitioning*: data are split into shards (partitions) that can be served in parallel. In DynamoDB each partition receives a *provisioned throughput* budget (read/write capacity units). If one key suddenly becomes hot, its partition must absorb all requests for that key; the rest of the cluster remains idle. The naive solution is to over‑provision every partition— wasteful and expensive.

Adaptive Capacity solves this by *reallocating capacity in real time* without requiring a global rebalancing. It treats each partition as an autonomous queue: incoming requests are counted, and when a queue’s utilization exceeds a threshold, the system **dynamically migrates read/write units** from “cold” queues to the hot one. This is essentially a *continuous load‑balanced queuing network* governed by the principle of *maximum throughput under fairness constraints*. The underlying algorithm is a variant of the *token bucket* model: tokens (capacity) are produced at the provisioned rate, but can be borrowed from neighboring buckets when their local token count falls below demand.

**Why it must work this way**

1. **Granularity** – per‑partition allocation preserves data locality and avoids cross‑node traffic.
2. **Responsiveness** – capacity migration occurs in milliseconds, keeping latency low for hot items.
3. **Simplicity** – no manual sharding or re‑indexing; the system self‑optimises.

**Non‑obvious insight**

Adaptive Capacity does *not* simply “borrow” units from any partition; it uses a *predictive model* of request patterns based on recent history (exponential decay). This anticipates spikes before they hit thresholds, preventing temporary throttling. Thus, the system trades a modest amount of stale capacity for a substantial gain in stability—a subtle but powerful design choice that keeps DynamoDB both efficient and resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
