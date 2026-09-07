---
qid: ing_a796e099f5__aws__local
question: 'Explain: Ensuring Data Durability — Amazon Dynamo Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:30-05:00'
sources: []
---

**Scenario (S)**  
At a previous role I led the redesign of our recommendation engine’s data store. The existing DynamoDB table was hitting hot‑partition limits and we risked losing user preference events during spikes.

**Task (T)**  
I had to guarantee 99.999% durability for every write while keeping latency under 5 ms, all on a cost‑effective architecture that could scale to millions of writes per second.

**Action (A)**  

| Design choice | Why it matters |
|---------------|----------------|
| **Use DynamoDB Global Tables + DynamoDB Streams** | Replicates data across AZs for durability and offers cross‑region failover. |
| **Enable Point‑In‑Time Recovery (PITR) & backups** | Provides immutable snapshots against accidental deletes or corruption. |
| **Partition key = user_id#timestamp, sort key = event_type** | Distributes writes evenly; avoids hot spots. |
| **Write sharding via Lambda that batches 1 k items per batch_write_item** | Reduces throttling and costs (batch write is ~10× cheaper). |
| **Monitor with CloudWatch Alarms on `ConsumedReadCapacityUnits` & `ThrottledRequests`** | Immediate feedback loop for scaling. |

I also added a **Kinesis Data Firehose** sink to an S3 bucket, enabling a 30‑day immutable archive for audit and ML re‑training.

**Result (R)**  
- Write latency dropped from 12 ms to 4 ms average.  
- Throttled requests fell by 93 %.  
- Cost stayed within budget because batch writes cut provisioned throughput by ~40 %.  
- In a simulated outage, the system recovered in <30 s with no data loss.

---

**Leadership Principles Highlighted**

1. **Ownership** – I took end‑to‑end responsibility for durability and performance.  
2. **Dive Deep** – Detailed analysis of partitioning patterns, stream lag, and cost per request drove the solution.  

Bar‑raisers listen for quantified impact (latency & cost reductions), evidence of ownership, deep technical rationale, and lessons learned when a prior hot‑spot strategy failed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
