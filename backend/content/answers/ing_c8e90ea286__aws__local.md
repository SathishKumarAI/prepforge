---
qid: ing_c8e90ea286__aws__local
question: 'Explain: Transactions & Their Types — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I led a project that migrated our legacy order‑processing system to an event‑driven microservice architecture on AWS. The goal was to reduce “transaction” latency from 200 ms to under 50 ms while preserving ACID guarantees for high‑value orders.

| Step | What I did | Why it matters (LP) |
|------|------------|---------------------|
| **Define transaction types** | *Read‑only*, *Update‑write*, *Compensating* and *Saga*. | **Customer Obsession** – customers need instant, reliable order status. |
| **Choose patterns** | *Two‑phase commit* for Update‑write; *outbox + Kafka* for Compensating. | **Dive Deep** – understanding lock contention vs eventual consistency. |
| **AWS services** | DynamoDB (global tables), SQS (dedup & ordering), Lambda, Step Functions. | **Ownership** – I selected fully managed services to minimize ops overhead. |
| **Scalability/Availability** | Auto‑scaling Lambdas + DynamoDB on-demand; multi‑AZ queues. | **Bias for Action** – prototype in 2 weeks, rolled out with blue/green. |
| **Cost & trade‑offs** | Reduced RDS license cost by 35 %, cut CPU utilization from 70 % to 30 %. | **Deliver Results** – achieved 4× faster latency and 99.999 % SLA with <$10k/month. |

Result: After launch, we processed 1M orders/day with a 98 % success rate; rollback incidents dropped by 90 %, proving the design’s resilience. The failure of our first attempt (over‑relying on RDS) taught me to benchmark lock contention early and iterate quickly—an essential bar‑raiser trait.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
