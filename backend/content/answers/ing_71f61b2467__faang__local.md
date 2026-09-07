---
qid: ing_71f61b2467__faang__local
question: 'Explain: Example: AI Job Completed Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 447
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:30-05:00'
sources: []
---

**Clarify**  
We’re designing a webhook‑based “AI job completed” notification system. The client (e.g., a ML platform) submits a training job; when the job finishes we must reliably deliver an HTTP callback to the consumer’s endpoint. Key assumptions:  
* Jobs can be long‑running, many per second.  
* Consumers may be offline or rate‑limited.  
* Delivery must be at least once and in order per job.  

**Approach**  
1. **Job Queue & Worker** – Use a durable queue (Kafka/Redis Streams) to persist completion events.  
2. **Delivery Service** – A stateless worker polls the queue, sends POSTs with idempotency tokens, retries on 5xx or timeout using exponential back‑off + jitter.  
3. **Tracking Store** – Persist event state in a NoSQL DB (DynamoDB/Firestore) keyed by jobId+consumerId to dedupe and support query.  
4. **Circuit Breaker & Rate Limiting** – Per consumer bucket to avoid spamming broken endpoints.  

**Depth**  
* Complexity: Queue ops O(1), DB ops O(log N).  
* Idempotency ensures no duplicates even if a worker crashes mid‑send.  
* Back‑pressure handled by Kafka partitions; scaling workers horizontally.  

**Edge Cases**  
* Consumer endpoint never responds → after N retries mark as failed, notify via UI.  
* Job id collision or consumer deletes job before completion → dedupe logic prevents stray callbacks.  
* Network partition between worker and DB → eventual consistency ensures retry.  

**Optimize & Communicate**  
Explain trade‑offs: using a managed queue reduces operational overhead but introduces cost; a custom in‑memory solution cuts latency but risks data loss. Emphasize that the system guarantees at‑least‑once delivery with ordering per job, scales horizontally, and is observable via metrics (retry counts, success rates). This narrative showcases structured problem solving, clear communication, and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
