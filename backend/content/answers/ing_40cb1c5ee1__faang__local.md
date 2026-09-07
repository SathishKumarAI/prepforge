---
qid: ing_40cb1c5ee1__faang__local
question: 'Explain: Sending an Email: A Step-by-Step Guide — Design Gmail'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:44-05:00'
sources: []
---

**Clarify**  
You want a step‑by‑step design of the “Send Email” feature in Gmail, focusing on the backend flow, data models, and key constraints (delivery latency, reliability, scalability). Assume: • Users are authenticated; • Emails may contain attachments up to 25 MB; • We must support retry, spam filtering, and analytics.  

**Approach**  
1. **API endpoint** (`POST /messages/send`) – validate auth & payload.  
2. **Validation layer** – MIME parsing, size checks, attachment encoding.  
3. **Persist draft** in a *Message* table (id, sender, recipients, subject, body, state).  
4. **Enqueue to a distributed message queue** (e.g., Kafka) for asynchronous delivery.  
5. **Delivery worker** consumes the queue, performs SMTP/SMTP‑over‑TLS send, retries on transient failures.  
6. **Post‑delivery hooks** – update state, log events, trigger analytics, push notifications.  

**Depth**  
*Data model*: `Message(id PK, sender_id FK, recipients[], subject, body, attachments[], status, created_at)`.  
*Queue size*: 10k msgs/sec; workers auto‑scale via Kubernetes.  
*Latency target*: <200 ms for API response (acknowledgement).  
*Reliability*: idempotent message IDs, deduplication at worker level.  

**Edge Cases**  
- Attachments >25 MB → reject with user error.  
- Invalid email addresses → bounce handling.  
- Network partitions → retry with exponential backoff.  
- Spam detection failure → route to quarantine queue.  

**Optimize & Communicate**  
To reduce API latency, offload heavy MIME parsing to a separate microservice and cache validation results. Use sharding on the Message table by user ID for horizontal scalability. In my explanation I’d narrate the flow diagrammatically, highlight trade‑offs (sync vs async), and emphasize observability (metrics: send success rate, queue depth). This showcases structured thinking, technical depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
