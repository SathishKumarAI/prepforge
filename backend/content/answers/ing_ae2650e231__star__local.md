---
qid: ing_ae2650e231__star__local
question: 'Explain: Frequency — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:27-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we hit a traffic spike of 3 M daily active users after launching our new crypto‑wallet feature. Our single Aurora PostgreSQL instance was throttling on read/write latency; the error rate spiked to 4% and response times were above 1.2 s.

**Task** – I had to design and implement a sharding strategy that would scale horizontally, reduce latency below 200 ms for reads, and keep cost under our $5k/month budget while preserving ACID semantics for user balances.

**Action** – I chose horizontal sharding by customer ID using PostgreSQL’s table partitioning, then wrapped each partition in an Aurora Serverless cluster behind a Lambda‑based API Gateway that routed queries to the appropriate shard via DynamoDB metadata. I added read replicas per shard and leveraged AWS Global Accelerator for low‑latency routing. To keep transactions atomic across shards, I employed two‑phase commit logic through SQS queues and used Redshift Spectrum to aggregate analytics without affecting operational traffic.

**Result** – Post‑deployment, read latency dropped from 1.2 s to 140 ms, write throughput doubled, and we avoided a $12k penalty on the next AWS bill. The sharding framework also gave us a clear path for adding new shards as user growth continued. I learned that careful partition key design and leveraging managed services can turn sharding from a pain point into a scalable advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
