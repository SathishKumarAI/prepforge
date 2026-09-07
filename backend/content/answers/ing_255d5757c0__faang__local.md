---
qid: ing_255d5757c0__faang__local
question: 'Explain: 🔄 Asynchronous Communication — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 420
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:37-05:00'
sources: []
---

**Clarify**  
The candidate wants a concise guide on *asynchronous communication* for system‑design interviews—i.e., messaging patterns (queues, pub/sub), event‑driven architectures, and the trade‑offs compared to synchronous RPC.

**Approach**  
1. Define key concepts: latency vs throughput, eventual consistency, decoupling.  
2. Map common patterns: point‑to‑point queues (RabbitMQ, SQS), publish/subscribe (Kafka, Pub/Sub).  
3. Explain reliability mechanisms—acknowledgements, retries, dead‑letter queues.  
4. Highlight design questions an interviewer will probe (ordering guarantees, idempotency, scaling).

**Depth**  
- **Queues**: FIFO guarantees (Amazon SQS Standard vs FIFO), visibility timeouts, at‑least‑once delivery → need idempotent consumers.  
- **Pub/Sub**: Topic partitioning (Kafka) for horizontal scalability; consumer groups provide load balancing and fault tolerance.  
- **Event sourcing**: Store events as immutable logs to rebuild state; useful for audit trails.  
- **Reliability**: Use retry back‑off, circuit breakers, and dead‑letter topics to avoid message loss.  
- **Latency trade‑offs**: Asynchronous decouples services, increases throughput but introduces eventual consistency and higher read latency.

**Edge Cases**  
- Ordering violations (e.g., multiple partitions).  
- Duplicate messages if consumer crashes before ack.  
- Back‑pressure when downstream services slow down.  
- Security: encrypt payloads, authenticate producers/consumers.

**Optimize & Communicate**  
Summarize with a quick diagram of producer → broker → consumer flow, note that choosing between queue vs pub/sub hinges on whether you need strict ordering or many-to-many distribution. End by stressing the importance of idempotency and graceful degradation—key points interviewers look for in an async design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
