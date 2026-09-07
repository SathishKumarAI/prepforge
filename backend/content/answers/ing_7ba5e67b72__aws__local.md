---
qid: ing_7ba5e67b72__aws__local
question: 'Explain: acks=all - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 477
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role on the data‑platform team, we migrated our real‑time analytics pipeline from an on‑prem Kafka cluster to Amazon MSK. The customer was a retail chain that required *exactly once* processing of every click event; any duplication would inflate conversion metrics and trigger costly fraud alerts.

**Situation & Task**  
The existing cluster had `acks=1`, which meant the broker only waited for the leader’s acknowledgment. When a follower failed, we lost up to 20 % of events during peak hours (≈ 500 k messages/min). I owned the redesign to eliminate this loss while keeping latency below 200 ms.

**Action**  
I set `acks=all` and enabled *idempotence* on producers. To keep throughput high, I added a **deduplication Lambda** that consumed from a Kafka topic and wrote de‑duplicated records into an S3 data lake (via Kinesis Data Firehose). The architecture leveraged:

- **Amazon MSK** – fully managed, scalable broker cluster with automatic leader election.  
- **AWS IAM & VPC Peering** – secure connectivity.  
- **Amazon CloudWatch** – custom metrics for producer latency and duplicate count.  

I ran a staged rollout: 10 % traffic first, monitored `kafka.producer.record.errors` and `duplicate_event_rate`. After verifying < 0.01 % duplicates and average latency of 180 ms, I rolled out to 100 %.  

**Result**  
Duplicate events dropped from 20 % to < 0.001 %, saving the client $1.2M in fraud‑related payouts per quarter. Latency stayed below SLA, and the solution cost only 12 % more than the previous setup due to efficient use of MSK’s spot instances.

**Learning**  
I learned that *ownership* means validating every assumption with data—here, measuring duplicates before and after—and that *dive deep* into Kafka internals (ack semantics) can unlock significant business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
