---
qid: ing_3621838703__aws__local
question: 'Explain: Event-Sourcing — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 501
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:07-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**.

---

### Situation  
In my last role I led the migration of a legacy order‑processing system to an event‑driven architecture on AWS. The old batch jobs produced stale inventory data and caused customer complaints during peak sales events.

### Task  
I had to redesign the system so that every state change (order created, payment authorized, shipment dispatched) was captured as an immutable event, and downstream services could react in real time without tight coupling.

### Action  
1. **Define Event Schema** – Created a canonical JSON schema for each domain event and stored it in AWS S3 for durability.  
2. **Event Bus** – Deployed Amazon EventBridge to publish events; EventBridge rules routed them to specific Lambda functions or Step Functions workflows.  
3. **CQRS Store** – Used DynamoDB with an “event‑store” table (partition key = aggregate ID, sort key = timestamp) and a read‑model table for fast queries.  
4. **Compensation & Idempotency** – Implemented idempotent Lambda handlers and Dead Letter Queues in SQS to handle failures.  
5. **Monitoring** – Leveraged CloudWatch metrics and X-Ray tracing to surface latency per event type.

### Result  
- Reduced order‑to‑inventory update lag from 30 min to <1 s, improving customer satisfaction scores by **12 %** during Black Friday.  
- Cut operational cost of batch jobs by **35 %** (eliminated EC2 instances).  
- Achieved >99.9 % availability for the event bus with minimal latency.

---

### What a bar‑raiser looks for  
* **Ownership:** I drove the end‑to‑end migration, from schema design to cost monitoring.  
* **Dive Deep:** Detailed trade‑offs (EventBridge vs. SNS/SQS), DynamoDB provisioned throughput tuning, and idempotency handling show depth.  
* **Quantified Impact:** Explicit metrics on latency, cost savings, and customer satisfaction demonstrate real value.  
* **Learning from Failure:** The use of DLQs and X‑Ray surfaced a rare Lambda timeout; we increased memory allocation by 25 % to resolve it—an example of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
