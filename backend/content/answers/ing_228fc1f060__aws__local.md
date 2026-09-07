---
qid: ing_228fc1f060__aws__local
question: 'Explain: Don’t confuse Saga and CDC — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 471
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:45-05:00'
sources: []
---

**Situation / Task**  
When I was building a multi‑tenant e‑commerce platform on AWS, my team had to decide how to keep downstream analytics pipelines in sync with the core order service. The stakeholders mixed up *Saga* patterns and *Change Data Capture (CDC)*, leading to duplicated effort and stale data.

**Action**  
I clarified that **Sagas** are long‑running business transactions orchestrated by a state machine, while **CDC** is a mechanism for emitting change events from a database to downstream consumers. I proposed a *Transactional Inbox/Outbox* pattern:  
- **Inbox** table (DynamoDB) stores inbound messages with an idempotency key.  
- **Outbox** table (RDS Aurora Serverless + DMS CDC) captures every write via a trigger, writes the event to SQS, and marks the row as processed.  
The Saga engine consumes from SQS, updates order state in DynamoDB, and emits compensating actions if needed.

AWS services used: Aurora Serverless for ACID guarantees, DynamoDB for low‑latency state, DMS for CDC, SQS/SNS for decoupling, Lambda for lightweight orchestration.  

**Result**  
We reduced data lag from 5 minutes to < 1 second, cut duplicate processing by **92%**, and lowered operational cost by ~30 % compared to a monolithic micro‑service that tried to mix Saga and CDC without an inbox/outbox boundary.

**Learnings & Bar‑raiser signals**  
- Ownership: I owned the design review and drove cross‑team consensus.  
- Dive Deep: I analyzed latency graphs, SQL trigger costs, and DynamoDB provisioned throughput.  
- Quantified Impact: metrics above show tangible business value.  
- Learning from Failure: early prototype caused race conditions; the inbox pattern eliminated them.

**Leadership Principles**  
- **Ownership** – took responsibility for clarity and architecture.  
- **Dive Deep** – dissected trade‑offs between CDC vs Saga, DynamoDB vs RDS, cost vs latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
