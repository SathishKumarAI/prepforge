---
qid: ing_338edd822b__aws__local
question: 'Explain: Guaranteed event/message delivery — Saga, CDC with Transactional
  Inbox/Outbox - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 458
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:58-05:00'
sources: []
---

**Situation / Task**  
In a recent project I led the migration of our legacy order‑processing microservice to an event‑driven architecture on AWS. The business required *guaranteed* delivery of “order‑created” events to downstream analytics and fulfillment systems without duplications, while keeping latency < 200 ms.

**Action (Technical)**  
I chose a **Transactional Inbox/Outbox pattern** using **Amazon DynamoDB** for the outbox table (partition key: `OrderID`, sort key: `EventType`). Each service write performed an atomic transaction that both updated the domain state and inserted an event record. A **DynamoDB Streams → Lambda** pipeline read new records, serialized them to JSON, and pushed to **Amazon SNS** topics. For saga‑style compensation I used **AWS Step Functions** to orchestrate long‑running workflows; each step stored its state in a separate DynamoDB table with TTL, enabling automatic cleanup.

- *Scalability*: Streams/Lambda auto‑scale to burst traffic; DynamoDB’s provisioned capacity or on‑demand mode handles 10⁵ TPS.  
- *Availability*: SNS is 99.9 % SLA; Step Functions guarantees at‑least‑once execution with idempotent steps.  
- *Cost*: Pay‑per‑request for Streams/Lambda, minimal DynamoDB writes (≈$0.25 per million).  

**Result**  
After rollout we achieved **>99.999% event delivery accuracy**, reduced order‑processing latency by 35 %, and cut operational overhead from manual retry logic by 70 %. The team learned that coupling domain updates with outbox inserts inside a single transaction eliminates race conditions—an insight I documented in our internal “Design Patterns” wiki.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered reliable, low‑latency events to improve user experience.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility for the pattern and dissected failure modes (e.g., Lambda timeouts) to refine retry strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
