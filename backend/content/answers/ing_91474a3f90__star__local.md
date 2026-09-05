---
qid: ing_91474a3f90__star__local
question: 'Explain: Distributed Transactions consistency Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 342
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:23-05:00'
sources: []
---

**Situation**  
At my previous company we were rolling out a new recommendation engine that had to pull user data from two micro‑services—one holding purchase history, the other handling browsing logs—while writing back aggregated scores to a central cache. Our SLA required less than 5 % stale reads and <30 ms latency.

**Task**  
I needed to design a distributed transaction strategy that kept read‑your‑own‑write consistency without sacrificing performance or introducing deadlocks across the services.

**Action**  
I implemented a *two‑phase commit* (2PC) pattern with optimistic concurrency control. Each service exposed an idempotent “prepare” endpoint that locked its row using a version number and returned a transaction ID. The coordinator sent prepare to both services, waited for acknowledgments, then issued commit or abort depending on the responses. To reduce latency I used *pipelined 2PC*: while waiting for the second service’s ack, the coordinator pre‑fetched cached scores from Redis so the client could receive a provisional result immediately. If any service failed, the coordinator rolled back locally and sent compensating deletes to keep data clean.

**Result**  
The system maintained <1 % stale reads under peak load (10k req/s) while keeping average latency at 28 ms. The rollback logic cut orphaned records by 98 %. I learned that combining optimistic locking with pipelined 2PC can deliver strong consistency in high‑throughput environments without the heavy weight of full ACID guarantees across all nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
