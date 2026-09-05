---
qid: ing_a0487c4f62__star__local
question: 'Explain: Server-Side Encryption — Amazon Kinesis Data Streams Terminology
  and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 373
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:03-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated a real‑time analytics pipeline from on‑prem Kafka to Amazon Kinesis Data Streams (KDS). During the audit, the compliance team flagged that all data being streamed was unencrypted at rest, which could expose sensitive user telemetry.

**Task:**  
I had to enable server‑side encryption (SSE) for our KDS stream without disrupting ingestion rates of 200 k records per second or compromising low latency (<10 ms) processing downstream in Lambda functions.

**Action:**  
First, I reviewed the KDS documentation and identified that SSE with AWS Managed Keys (SSE-KMS) is supported. I created a dedicated CMK in Key Management Service, granted Kinesis and IAM roles permissions to use it, and then updated the stream’s configuration via the CLI: `aws kinesis update-stream --stream-name analytics --shard-count 10 --encryption-type KMS --key-id alias/analytics-key`. To ensure no downtime, I used a blue‑green deployment: spun up a new stream with SSE enabled, mirrored data using Lambda for cross‑stream replication, switched the ingestion producer to the new stream after verifying throughput and latency. I also added CloudWatch metrics to monitor encryption overhead and adjusted shard count from 10 to 12 to absorb any additional processing cost.

**Result:**  
Encryption was fully operational within 48 hours, with no measurable increase in end‑to‑end latency (kept at ~9 ms). The audit passed, and we reduced our compliance risk score by 30%. I learned how to balance security requirements against performance constraints using KMS keys and Kinesis’ SSE features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
