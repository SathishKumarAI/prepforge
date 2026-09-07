---
qid: ing_46e093d26f__aws__local
question: 'Explain: New Components for Offline Handling — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 465
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:57-05:00'
sources: []
---

**Situation & Task**  
When I joined the WhatsApp product team, we discovered that our offline‑message queue was bursting during peak hours—latency spiked from 50 ms to >1 s and message loss rose to 3%. The goal: design a resilient “offline handling” component that keeps throughput >10 M messages/s while guaranteeing at‑least‑once delivery.

**Action (Design)**  
I introduced a **partitioned, sharded queue layer** built on **Amazon Kinesis Data Streams**. Each shard handles ~200 k msgs/s; we auto‑scaling the number of shards via CloudWatch metrics so that during 8 am–11 pm traffic peaks we run 20 shards (400 M msg capacity).  
To persist state and enable replay, I added **Amazon DynamoDB Streams** to capture per‑user offset metadata. A Lambda function (Python) pulls from Kinesis, writes the message payload to **Amazon S3** (object size < 1 KB), and updates DynamoDB with a status flag (`PENDING → SENT`).  
For failure recovery, I used **SQS DLQ** on the Lambda output; messages stuck >5 min go to a separate “dead‑letter” queue for manual triage.  

**Result**  
After deployment, latency dropped to 45 ms (10% improvement), and message loss fell below 0.1%. Cost increased by only **$3k/month**, a 12% uplift against the $25k baseline, because we leveraged serverless compute (Lambda) and auto‑scaling shards.

**Reflection**  
I owned the end‑to‑end data flow (“Ownership”), dug into shard metrics to tune throughput (“Dive Deep”), and iterated on failure paths after observing a 2 % spike during a test. This experience reinforced that **Customer Obsession**—ensuring every user sees their messages instantly—must drive architectural choices, while **Bias for Action** keeps us moving fast with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
