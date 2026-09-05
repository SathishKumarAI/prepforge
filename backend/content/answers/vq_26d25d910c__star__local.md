---
qid: vq_26d25d910c__star__local
question: What is a Transaction ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 311
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:21-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with redesigning the order‑processing module for an e‑commerce platform that handled over 20 000 orders per minute. The existing system logged each step (payment capture, inventory update, shipment creation) independently, so a crash midway left data inconsistent – customers saw “order confirmed” while items were never reserved.

**Task**  
I had to guarantee that all database changes for an order either completed together or not at all, without hurting the 50 ms latency target for checkout. This meant implementing transactional integrity across multiple tables and services.

**Action**  
I introduced a two‑phase commit (2PC) pattern using PostgreSQL’s `BEGIN`, `COMMIT`, and `ROLLBACK` statements wrapped in a single stored procedure. For cross‑service coordination I used a lightweight message broker (Kafka) to publish “order started” events, then awaited acknowledgements from payment and inventory services before issuing the final commit. I also added row locks (`SELECT … FOR UPDATE`) on inventory records to avoid race conditions during high traffic.

**Result**  
After deployment, order consistency improved to 99.999% – only one orphaned record per year. Checkout latency increased by just 8 ms, well within SLA. The exercise taught me how to balance strict ACID guarantees with performance constraints in a distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
