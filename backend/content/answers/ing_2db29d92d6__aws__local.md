---
qid: ing_2db29d92d6__aws__local
question: 'Explain: Forces — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 459
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:37-05:00'
sources: []
---

**Pattern: Event Sourcing – Forces & Impact**

*Leadership Principles:* **Customer Obsession** (understand every change a customer makes) and **Dive Deep** (uncover hidden state changes).

---

### Situation  
I led the migration of our legacy order‑processing system to an event‑driven architecture for a fintech client. The goal was real‑time fraud detection and auditability.

### Task  
Implement **event sourcing** so every business action became immutable, enabling precise replay, compliance, and instant analytics.

### Action  
1. **Requirements & Design** – Each domain entity (Order, Payment) emits *DomainEvents* stored in an **Amazon DynamoDB** table with a composite key (`PK=entityId`, `SK=timestamp`).  
2. **Event Bus** – Use **Amazon EventBridge** to fan‑out events to microservices (FraudEngine, Reporting).  
3. **State Reconstruction** – Lambda functions consume events and update read‑models in **DynamoDB Streams**; a scheduled job replays all events into an **OpenSearch** index for analytics.  
4. **Scalability & Availability** – DynamoDB auto‑scales; EventBridge guarantees at least once delivery with dead‑letter queues (SQS).  
5. **Cost Trade‑off** – Store raw events for 90 days (≈$0.25/GB‑month) and archive older ones to **Amazon S3 Glacier** ($0.004/GB‑month), saving ~30% versus a traditional relational log.

### Result  
- **Latency** dropped from 2.4 s to <300 ms for fraud checks.  
- Audit compliance reports generated in seconds, cutting manual effort by **70%**.  
- System uptime improved to **99.999%** due to idempotent event handling.

*Learning:* Early adoption of a replay‑capable model exposed a hidden race condition; refactoring the aggregate root eliminated duplicate processing—demonstrating true ownership and rapid learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
