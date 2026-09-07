---
qid: ing_f9c785bf5e__aws__local
question: 'Explain: Message Queue — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:04-05:00'
sources: []
---

**Situation / Task**  
At a SaaS startup I was tasked to build a *distributed counter* that could handle > 5 M increments per second while guaranteeing eventual consistency across 10 regions. The goal: keep latency < 50 ms and cost <$0.05/1 M ops.

**Action (Design)**  
I chose **Amazon SQS FIFO** as the message queue to preserve order per key, then used **AWS Lambda** (scaled via SQS triggers) to process batches of 100 messages. Each lambda wrote a *partial* count to **DynamoDB Global Tables** with `UpdateItem` and an atomic `ADD`. For cross‑region aggregation I added a **Kinesis Data Streams** shard that fans out the increments to a secondary Lambda, which updates a *summary table* in DynamoDB (partition key = counter ID).  
To keep cost low, I enabled **DynamoDB On‑Demand** for hot counters and **Provisioned** for cold ones. A CloudWatch alarm throttles lambdas when queue depth > 10 k to prevent burst spikes.

**Result**  
The system processed 5.3 M ops/s with 98% of requests < 40 ms. Quarterly cost dropped from $12K to $7.8K (‑35%). After a failure where an old lambda version missed updates, I introduced a *dead‑letter queue* and automated replay, reducing data loss from 0.02% to 0.001%.

**Reflection (Bar‑raiser)**  
I demonstrated **Ownership** by redesigning the entire pipeline after the failure, **Dive Deep** into latency sources via X-Ray traces, quantified impact with real metrics, and learned that idempotent writes are critical in distributed counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
