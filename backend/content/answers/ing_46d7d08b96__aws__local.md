---
qid: ing_46d7d08b96__aws__local
question: 'Explain: Advantages and disadvantages of write-through'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 485
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:49-05:00'
sources: []
---

**Situation (S)** – At my previous role I led a feature‑store redesign for a real‑time recommendation engine that served ~10 M users daily. The legacy cache used *write‑behind* and we were hitting stale‑data errors, so I proposed switching to **write‑through**.

**Task (T)** – Ensure data consistency while keeping latency < 5 ms for user requests and cost < $0.05 per request.

**Action (A)** –  
1. *Requirements*: Write‑through guarantees that every write hits the persistent store before acknowledging the client.  
2. *Design*: I chose **Amazon DynamoDB** as the primary store (low read/write latency, automatic scaling) and **Amazon ElastiCache Redis** as a cache layer. Using the AWS SDK’s `PutItem` with `ReturnValues=ALL_OLD` ensured that writes were atomic.  
3. *Scalability & Availability*: DynamoDB’s provisioned throughput (10 k RCU/WCU per shard) handled peak traffic, while Redis replicated across three AZs provided 99.999% availability.  
4. *Cost*: Write‑through increased write cost by ~15 %, but we avoided the costly cache‑invalidation logic that had previously required a separate **AWS Lambda** eviction pipeline (≈$0.10/1M invocations).  

**Result (R)** – After rollout, data staleness dropped from 4 % to < 0.01 %. Cache hit rate improved from 78 % to 92 %, cutting overall latency by 30 ms per request and saving ~20 % on Lambda costs. The change also reduced support tickets by 40 %.

**Leadership Principles** – *Ownership* (I took full responsibility for the migration), *Dive Deep* (analyzed read/write patterns, cost models), *Bias for Action* (rolled out in a staged manner). I learned that while write‑through boosts consistency, it can backfire under bursty traffic; hence we added an optional **DynamoDB Accelerator (DAX)** layer to buffer spikes without compromising the sync guarantee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
