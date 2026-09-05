---
qid: ing_2b00a42e21__star__local
question: 'Explain: Priority Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 386
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:03-05:00'
sources: []
---

**Situation**  
At my previous company we built an ad‑delivery platform that had to process millions of bid requests per second. The latency budget for each request was under 5 ms, but the traffic pattern was highly bursty – peak hours saw a 3× spike.

**Task**  
I was tasked with designing the back‑end queueing layer so that high‑priority ads (e.g., premium partners) were served first without starving lower priority traffic, while still keeping throughput and fault tolerance in mind.

**Action**  
I evaluated two patterns: a classic message queue (Kafka/Redis Streams) that guarantees ordering per topic, and an in‑memory priority queue backed by a skip list. I chose a hybrid approach: use Kafka for durability and horizontal scaling, but expose a lightweight “priority broker” built on Redis Sorted Sets that pulls messages from Kafka, tags them with a priority score, and pushes them to worker pools sorted by urgency. Workers fetch from the priority broker using ZPOPMIN/ZPOPMAX, ensuring O(log N) pop time. I added rate‑limiting via token buckets per priority level and implemented graceful degradation: if Redis goes down, workers fall back to plain Kafka consumption.

**Result**  
The new design cut average bid‑processing latency from 12 ms to 4.3 ms during peak hours (a 64% improvement) while maintaining 99.9% throughput. We also reduced the number of dropped requests by 70%. I learned that combining durable queues with in‑memory priority structures can deliver both reliability and low‑latency service, especially when traffic patterns are highly skewed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
