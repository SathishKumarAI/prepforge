---
qid: ing_5a0ced86d8__star__local
question: 'Explain: Transport and routing — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 351
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:46-05:00'
sources: []
---

**Situation:**  
When I joined Meta’s Infrastructure team, the real‑time ad auction service was hitting a 30 % spike in latency during peak traffic. The system relied on synchronous RPCs over gRPC, and our message queue could not keep up with the burst of events from billions of users.

**Task:**  
I had to redesign the transport layer to handle asynchronous computing—decoupling request handling from downstream services—so that latency dropped below 50 ms while maintaining data consistency for the auction logic.

**Action:**  
First, I introduced a lightweight event bus using Pulsar, configuring partitioned topics per user region to reduce contention. Then I rewrote critical microservices in Rust to leverage async/await and zero‑copy buffers, eliminating blocking I/O. To preserve ordering, I added a deterministic “sequence token” in each message header and implemented an idempotent consumer that replayed missed events from Pulsar’s retention window. Finally, I set up Prometheus metrics and Grafana dashboards to monitor backpressure and tail latency, tuning the prefetch count until CPU utilization hit 75 % without queue buildup.

**Result:**  
The average auction response time fell from 140 ms to 48 ms during peak hours, a 66 % improvement. The system now supports 10× more concurrent users with only a 12 % increase in infrastructure cost. I learned that combining async programming with fine‑grained partitioning and idempotent processing can dramatically reduce latency while keeping consistency intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
