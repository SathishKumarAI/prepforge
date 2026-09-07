---
qid: ing_181cbcf8cc__aws__local
question: How can AWS support your pub/sub messaging requirements?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:02-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our real‑time analytics pipeline for a global ad network, we had to replace a legacy RabbitMQ cluster that was hitting 70 % CPU and 2× SLA breaches during peak hours. The goal: deliver sub‑second message delivery at >10 M messages/s while keeping ops overhead minimal.

**Action**  
I chose **Amazon SNS + Amazon SQS FIFO** with **Lambda** as the consumer, leveraging **AWS CloudWatch Auto Scaling** for the queue depth and **S3 Glacier Deep Archive** for long‑term retention.  
- **SNS** handles publisher load (10 M msgs/s) across 50 partitions, auto‑scaling on fan‑out spikes.  
- **SQS FIFO** guarantees ordering with exactly‑once processing; I set `ReceiveMessageWaitTimeSeconds=20` to reduce empty receives.  
- **Lambda** decouples consumers, scales up to 10 k concurrent invocations, and writes results to DynamoDB (high‑throughput, low latency).  
- **CloudWatch Alarms** trigger a Lambda that adjusts SNS topic subscriptions or SQS visibility timeout.

**Result**  
The new architecture reduced CPU usage to <20 %, cut message latency from 250 ms to 35 ms, and achieved 99.999% availability over six months—up from the previous 97%. Cost dropped by 38 % due to serverless scaling and SQS’s pay‑per‑message model.

**Reflection (Bar‑Raiser Lens)**  
I owned every component: defined SLAs, wrote unit tests for idempotency, and performed post‑mortems on the two SLA breaches. I dove deep into CloudWatch metrics to identify the 5 % of messages causing backpressure and tuned the `VisibilityTimeout`. The learning loop—profiling, iterating, and documenting—ensured continuous improvement and alignment with **Customer Obsession** (fast, reliable data for advertisers) and **Ownership** (end‑to‑end accountability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
