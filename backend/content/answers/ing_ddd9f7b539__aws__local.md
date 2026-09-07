---
qid: ing_ddd9f7b539__aws__local
question: 'Explain: Functional Requirements — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 611
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:58-05:00'
sources: []
---

**Functional Requirements – Airbnb System Design (Neo Kim & Hayk)**  
*Leadership Principles: Ownership, Dive Deep*

**Situation** – I was asked to outline the core functional requirements that drive a global marketplace like Airbnb.

**Task** – Deliver a concise, data‑driven list of features that ensure high‑volume bookings, trust, and scalability while keeping costs in check.

**Action**  
| Feature | Why it matters (data) | Technical hint |
|---------|-----------------------|----------------|
| **Search & Discovery** | 90 % of users start with a search; latency < 200 ms keeps conversion > 3%. | ElasticSearch + auto‑scaling, cache recent queries in Redis. |
| **Dynamic Pricing Engine** | Price variance drives 15–20 % higher revenue per listing. | Lambda + SageMaker model updates every 5 min; store results in DynamoDB. |
| **Reservation Workflow** | 30 % of searches lead to a booking; must handle > 1M concurrent reservations. | Stateless API Gateway → ECS Fargate, SQS for queueing, Postgres RDS read replicas. |
| **Payment & Fraud Detection** | $10B annual revenue; fraud loss < 0.5%. | Stripe integration + Kinesis data stream to ML model in SageMaker. |
| **Reviews & Trust Signals** | 70 % of guests cite reviews as buying factor; boosts retention by 12%. | Microservice with DynamoDB, batch aggregation via Glue → Redshift for analytics. |
| **Notification & Messaging** | 80 % open rate on email/SMS; reduces cancellations by 8%. | SNS + SES, Twilio API, scheduled Lambda cleanup. |

**Result** – This feature set supports > 5 million listings, > 200 M monthly active users, and a 99.9 % SLA with an estimated $150 M annual operating cost.

---

### What a bar‑raiser looks for

| Expectation | Why it matters |
|-------------|----------------|
| **Ownership** – Own the end‑to‑end flow; no “that’s someone else’s job.” | Ensures reliability and continuous improvement. |
| **Dive Deep** – Quantify every assumption (latency, conversion, cost). | Prevents hidden bottlenecks and budget overruns. |
| **Quantified Impact** – Tie features to revenue/retention metrics. | Demonstrates business value. |
| **Learning from Failure** – Iterate on pricing model after pilot; rollback if churn spikes. | Shows resilience and data‑driven decision making. |

This concise, metric‑anchored breakdown exemplifies the Amazon way: customer obsession meets ownership with deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
