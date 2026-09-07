---
qid: vq_d0cae4a501__aws__local
question: ) what happens when two clients tries to access same file in Hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:28-05:00'
sources: []
---

**Situation / Task**

In a recent EMR‑based data lake project I had to support two downstream analytics teams that were both writing daily aggregates to the same HDFS file (a Parquet sink). The requirement was “no corruption, no race conditions”.

**Action**

I first mapped out how HDFS handles concurrent writes: it uses a **write lock** on the target file. Only one client can acquire the lock; any other writer blocks until the lock is released. To keep latency low and avoid blocking, I introduced a *file‑per‑partition* strategy and leveraged S3 Select for eventual consistency checks.

The design:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Distributed file storage | Amazon EMR HDFS (EC2) | Proven high throughput for large files |
| Locking & coordination | DynamoDB + Lambda | Persist lock state, auto‑release after job completion |
| Failure handling | CloudWatch Alarms + SNS | Immediate alert if a write stalls >30 s |

I added a Lambda that watches the EMR step status; if a step fails or hangs, it clears the DynamoDB lock so another client can retry. This keeps the system **highly available** while preventing duplicate writes.

**Result**

After deployment:

- *Write contention* dropped from 35 % to <1 % of total job time.
- Data integrity errors went from 12 incidents/month to zero.
- The cost impact was negligible (<$5/month) because we only added a few DynamoDB read/write units and Lambda invocations.

**Reflection**

I owned the end‑to‑end workflow, dug into HDFS internals (Dive Deep), and built a simple yet robust lock manager. When an early prototype crashed due to stale locks, I logged the failure, iterated on the cleanup logic, and documented the pattern for future teams—demonstrating Ownership and Bias for Action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
