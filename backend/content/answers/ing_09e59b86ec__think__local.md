---
qid: ing_09e59b86ec__think__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 502
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:22:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The client wants a *notification service* that alerts when data is archived (moved from hot to cold storage).  
- Assume: high‑volume ingest, 24/7 availability, GDPR compliance, and that “old” means > 90 days in hot tier.  
- Clarify if notifications go via email/SMS/APIs or internal dashboards.

**2️⃣ Pick a mental model**  
Use the *“Event‑Driven Architecture + CQRS”* framework:  
- **Command side** moves data → triggers an event.  
- **Query side** stores “archived” state for fast reads.  
Add a **notification dispatcher** that subscribes to the event bus.

**3️⃣ Step‑by‑step reasoning**  

1. **Ingest & TTL** – Data lands in hot store (e.g., Kafka → Redis).  
2. **Scheduler/Watcher** – A cron or stream processor checks age every day/hour.  
3. **Archive Trigger** – When age > threshold, a *DataArchived* event is published to a message broker (Kafka/Kinesis).  
4. **Event Handlers** –  
   - *Storage Service*: moves blob to cold tier (S3 Glacier, HDFS archive).  
   - *Notification Service*: receives event, enriches with metadata.  
5. **Notification Delivery** – Push via chosen channels (email through SES, SMS via Twilio, webhook).  
6. **Audit & Idempotence** – Store event IDs in a ledger to avoid duplicate notifications.  

Use **partitioning by tenant** for scalability and **dead‑letter queues** for failures.

**4️⃣ Common traps**  
- *Race conditions*: two archivers acting on same record → use distributed lock or deduplication.  
- *Latency*: waiting for archival to finish before notifying can block; decouple with async events.  
- *Message loss*: rely on durable brokers and consumer groups.  

**5️⃣ Sanity‑check & communicate**  
- Sketch a diagram: ingest → hot store → scheduler → event bus → storage + notification.  
- Verify each component’s SLA meets requirement (e.g., 99.9% uptime).  
- Reiterate the flow aloud, checking that every step addresses “when data is archived” and “who gets notified.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
