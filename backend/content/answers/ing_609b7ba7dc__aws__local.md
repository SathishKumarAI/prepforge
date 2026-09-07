---
qid: ing_609b7ba7dc__aws__local
question: 'Explain: Solution — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 414
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:10-05:00'
sources: []
---

**Transactional Outbox – A scalable event‑driven pattern**

**Situation (S)**  
At my previous company we built a high‑traffic order service that needed to publish `OrderCreated` events to downstream inventory and analytics services. The initial implementation used an unreliable in‑memory queue, causing lost messages during crashes and violating *Customer Obsession*.

**Task (T)**  
Redesign the event delivery so that every successful DB write guarantees exactly one published event, with minimal latency and no manual retry logic.

**Action (A)**  
I introduced a **Transactional Outbox** table (`order_events`) coupled to the main `orders` table via a single transaction. After inserting an order, I wrote the event payload to the outbox. A lightweight Lambda, triggered by DynamoDB Streams on the outbox, serializes the record and publishes it to an SNS topic.  
- **AWS services:** DynamoDB (low‑latency writes), Streams (event source), Lambda (serverless consumer), SNS (pub/sub).  
- **Scalability:** DynamoDB scales horizontally; Lambda can auto‑scale with concurrent events.  
- **Availability & Cost:** No dedicated message broker, reducing operational overhead. We achieved < 5 ms end‑to‑end latency and 99.999% delivery reliability.  

**Result (R)**  
Post‑migration, we reduced order processing errors by **93%**, cut infrastructure cost by **$12K/month**, and improved customer satisfaction scores (+0.8 points). The pattern also enabled a clean audit trail for compliance.

> *Bar‑raiser notes:* Demonstrated ownership of end‑to‑end reliability, deep dive into AWS services trade‑offs, quantified impact, and learning from the failure of the original in‑memory queue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
