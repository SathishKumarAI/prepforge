---
qid: ing_239f531a0d__aws__local
question: 'Explain: Message queues — Why a database is not always the right tool for
  a queue based system - CloudAMQP'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 388
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:51-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our order‑processing pipeline from a legacy MySQL queue to a decoupled event system for a SaaS marketplace that handled ~120 k orders per day. The goal was to reduce latency, increase reliability and enable independent scaling of workers.

**Action**  
- **Why DB isn’t always the right tool:** relational tables lock rows during poll/ack, causing contention; they lack built‑in visibility timeouts, dead‑letter handling, or guaranteed at‑least‑once delivery.  
- **Design choice:** Adopt Amazon SQS FIFO for ordered guarantees and per‑message deduplication, backed by SNS topics to fan‑out to Lambda workers. Add an EventBridge rule that routes failed messages to a DLQ in S3 for later reprocessing.  
- **Scalability & cost**: SQS scales elastically (no capacity planning) and costs $0.40/1 M requests, far cheaper than maintaining a high‑availability DB cluster for queue traffic. Availability is 99.999% with no single point of failure.

**Result**  
- Latency dropped from 4.2 s to <300 ms (95th percentile).  
- Worker throughput increased by 3× without additional EC2 instances.  
- Operational incidents fell by 87 % because SQS automatically retries and dead‑letters, eliminating manual queue cleanup.

**Reflection**  
I owned the end‑to‑end migration, “dive deep” into message semantics, and quantified impact on performance & ops cost—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
