---
qid: ing_f488b026cf__faang__local
question: 'Explain: Email Processor — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 489
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:08:37-05:00'
sources: []
---

**Clarify**  
We need a scalable service that receives inbound emails, parses them, and emits notifications (push, SMS, etc.) to users or downstream services. Key assumptions: *high throughput* (thousands of e‑mails/sec), *low latency* (< 200 ms per email), *exact‑once* delivery, *multi‑tenant* users, and *support for attachments & HTML*.  

**Approach**  
1. **Ingestion Layer** – use an HTTP/SMTP gateway that pushes raw emails into a distributed queue (Kafka).  
2. **Processing Workers** – stateless microservices consume from Kafka, parse MIME using a library, extract metadata, store in a NoSQL DB (Cassandra) for idempotency.  
3. **Notification Engine** – a routing service reads parsed events, looks up user preferences (Redis cache + PostgreSQL fallback), and dispatches to appropriate channel adapters (FCM, Twilio).  
4. **Observability & Retry** – each step emits metrics; failed notifications go to a DLQ with exponential back‑off.  

**Depth**  
- *Parsing*: use streaming parsers to avoid OOM on large attachments.  
- *Idempotency*: store a hash of the email’s Message‑ID in Cassandra; if duplicate arrives, skip processing.  
- *Latency*: keep workers stateless → horizontal scaling; cache routing rules in Redis (latency < 1 ms).  
- *Throughput*: Kafka partitions per tenant; consumers auto‑scale with CPU usage.  

**Edge Cases**  
- Corrupt MIME or unsupported encoding → log and route to DLQ.  
- Missing Message‑ID → generate UUID, risk duplicates.  
- Attachment size > 10 MB → stream directly to S3, only store pointer.  

**Optimize & Communicate**  
Explain trade‑offs: using NoSQL for speed vs eventual consistency; Kafka for decoupling but adds complexity in ordering per tenant. Suggest future improvements: serverless workers (Lambda) for burst traffic, AI‑based spam filtering before routing. Conclude with expected SLA: 99.9 % of notifications within 200 ms, 99.95 % processed daily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
