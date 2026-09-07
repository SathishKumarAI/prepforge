---
qid: vq_94b680a1e8__aws__local
question: How can I generate primary key values for my table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:07-05:00'
sources: []
---

**S – Situation & Task**

In a recent migration of our on‑prem HR system to Amazon Aurora MySQL, the team was stuck generating unique employee IDs that had to be globally unique across all shards and also preserve insertion order for audit trails.

**T – Action**

I owned the solution:  
1. **Design** – Adopted a *snowflake* ID format (64‑bit) so each key is time‑ordered, shard‑aware, and collision‑free.  
2. **AWS Services** – Used **Amazon DynamoDB** as a high‑throughput counter table (`ShardId → Counter`) with conditional writes to avoid race conditions.  
3. **Implementation** – Created a Lambda (Python) that reads the current counter for the shard, increments it atomically via `UpdateItem` with `ReturnValues='UPDATED_NEW'`, and concatenates epoch ms + shard id + sequence to form the PK. The Lambda is invoked through API Gateway from the application layer.  
4. **Scalability & Cost** – DynamoDB’s provisioned capacity (10 k RCU/WCU per shard) keeps latency < 2 ms; cost ~$0.25/day for 100 shards.  
5. **Fallback** – For offline scenarios, the Lambda falls back to a local in‑memory counter with eventual sync to DynamoDB.

**R – Result**

- Reduced ID generation latency from ~30 ms (sequential DB auto‑increment) to <2 ms.  
- Eliminated deadlocks and key collisions across 5 shards, improving throughput by **45%** during peak load.  
- Cost per request dropped from $0.0004 to $0.00001.  

**Learning & Bar‑raiser cues**

*Ownership*: I identified the bottleneck early and drove the end‑to‑end solution.  
*Dive Deep*: I benchmarked DynamoDB’s RCUs, analyzed time‑stamp skew, and tuned the snowflake layout.  
*Quantified Impact*: 45% throughput lift, $30/month savings.  
*Failure Insight*: Initial prototype used a single DynamoDB counter causing contention; pivoting to shard‑local counters resolved it without sacrificing global uniqueness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
