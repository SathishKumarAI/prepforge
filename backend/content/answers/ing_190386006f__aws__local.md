---
qid: ing_190386006f__aws__local
question: 'Explain: E-commerce Order Processing — Event-Driven Architecture (EDA):
  A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:31-05:00'
sources: []
---

**Situation & Goal**  
At my last e‑commerce startup we had a monolithic order service that crashed during flash sales—downtime cost ~ $15k/day and lost 8% of revenue. I owned the redesign to an event‑driven architecture (EDA) so every micro‑service could react independently while guaranteeing ACID order state.

**Task & Approach**  
I scoped a **Kafka → Lambda → DynamoDB** pipeline, anchored in *Customer Obsession* (instant feedback for shoppers) and *Ownership* (end‑to‑end delivery). Orders generate an `OrderCreated` event; Lambda splits it into `PaymentRequested`, `InventoryReserved`, and `ShippingScheduled`. Each consumer writes to its own DynamoDB table with conditional writes for idempotency. A final “order‑status” aggregator updates a single read‑optimized table used by the front‑end.

**Result**  
- 99.99 % availability during peak events (vs 93 % prior).  
- Latency dropped from 1.2 s to 250 ms on average.  
- Operational cost fell 35 % (serverless vs EC2 + RDS).  
- Customer satisfaction score rose 12 points.

**Technical Details & Trade‑offs**  
*AWS services*: Amazon MSK, Lambda, DynamoDB Streams, Step Functions for orchestration, CloudWatch for observability.  
Scalability: Kafka partitions allow linear scaling; Lambdas auto‑scale with concurrency limits. Availability: Multi‑AZ MSK + DynamoDB global tables. Cost: Pay‑per‑use eliminates idle compute but increases storage costs—balanced by reduced operational overhead.

**Bar‑raiser Insight**  
Interviewers look for *deep ownership* (I drove the migration), *dive deep* (understood idempotency and eventual consistency nuances), *quantified impact* (clear metrics above), and learning from failure (initial monolith crashes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
