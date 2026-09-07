---
qid: ing_533a4c6695__aws__local
question: 'Explain: Topic — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 405
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:58-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our event‑driven analytics pipeline at a fintech startup that shipped 2 M events per day. The legacy polling architecture caused >30 s latency and cost $1.5k/month in EC2 overhead.

**Action**  
- **Built an AWS‑native Pub/Sub service** using *Amazon SNS* for topic routing, *SQS* as durable queue back‑end, and *Lambda* for consumer scaling.  
- Implemented *Dead‑Letter Queues* (DLQ) and exponential back‑off to guarantee at‑least‑once delivery.  
- Added *CloudWatch Alarms* on `ApproximateNumberOfMessagesVisible` and `BatchSize` to auto‑adjust Lambda concurrency, ensuring 99.95 % availability during traffic spikes.  
- Used *AWS Step Functions* for multi‑step processing (validation → enrichment → storage), reducing code complexity by 40 %.  
- Introduced a *Cost Explorer* rule that capped daily spend at $200, cutting the original $1.5k/month to $280/month.

**Result**  
Latency dropped from 30 s to <2 s (99th percentile). Throughput increased by 4× without code changes. The new system processed every event with >99.9 % success rate and saved **$14,000 annually**.

**Reflection**  
I took full ownership of the migration, diving deep into AWS throttling limits and cost models. Learned that decoupling producers from consumers via SNS/SQS gives elasticity; however, careful DLQ design is critical to avoid silent failures. This experience reinforced my bias for action while validating every metric before production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
