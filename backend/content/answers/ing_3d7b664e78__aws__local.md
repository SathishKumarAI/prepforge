---
qid: ing_3d7b664e78__aws__local
question: 'Explain: of event sourcing there''s two events going'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 418
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:44-05:00'
sources: []
---

**Context (Situation):**  
In a recent e‑commerce platform revamp I led the migration of our order service from a traditional CRUD model to **Event Sourcing** on AWS. The core business requirement was to guarantee auditability and enable time‑travel debugging for high‑value orders.

**Task:**  
Define how two pivotal events—`OrderCreated` and `OrderPaid`—drive state changes, while ensuring scalability and cost efficiency across the architecture.

**Action (Design & Implementation):**

- **Event Store:** Amazon EventBridge + DynamoDB Streams → immutable log of all domain events.
- **Projection Service:** AWS Lambda functions triggered by EventBridge rules rebuild read‑models in a separate RDS Aurora cluster (PostgreSQL).  
  - `OrderCreated` seeds the order row.  
  - `OrderPaid` updates status, triggers payment settlement via Step Functions orchestrating Stripe API calls.  
- **Scalability:** Lambda concurrency auto‑scales; DynamoDB partitions by `orderId`.  
- **Availability & Cost:** Serverless eliminates over‑provisioning; pay per event (~$0.000025/1K events).  
- **Monitoring:** CloudWatch metrics on event lag; alerts for >5 s delay.

**Result (Outcome):**  
Within three weeks, the new pipeline processed 200k orders/day with <2 ms read latency and a 99.999% SLA. Audit trail completeness increased by 30%, reducing compliance review time from 3 days to under an hour. The team adopted **Customer Obsession** (accurate order state) and **Ownership** (end‑to‑end visibility), and the bar‑raiser noted my deep dive into event idempotency and cost modeling.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
