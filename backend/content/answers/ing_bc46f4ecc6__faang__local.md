---
qid: ing_bc46f4ecc6__faang__local
question: 'Explain: Fan-Out and Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 474
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:40-05:00'
sources: []
---

**Clarify**  
You’re asking about *fan‑out* (broadcasting a message to many subscribers) versus *filtering* (delivering only messages that match a subscriber’s interest) in a publish/subscribe system.  
Assumptions: we need low latency, high throughput, eventual consistency, and the ability to scale horizontally.  

**Approach**  
1. Model each topic as an append‑only log.  
2. On publish, write once; let subscribers read from their own cursor.  
3. For fan‑out, every subscriber reads every entry.  
4. For filtering, index messages by metadata (e.g., tags) and route only relevant ones to the subscriber’s queue.  

**Depth**  
- **Fan‑out**: O(1) write cost; read cost ≈ #subscribers × message size. Use a partitioned log per topic; each partition replicated for fault tolerance. Complexity is linear in subscribers, but we avoid bottlenecks by sharding the log and using consumer groups (Kafka style).  
- **Filtering**: Build inverted indexes or use a stream processor (e.g., Flink) to tag messages. Route to subscriber‑specific queues via message brokers like RabbitMQ or Pub/Sub Lite. Write cost increases due to routing logic, but read cost is O(1) per relevant message. Trade‑off: higher write latency vs lower consumer load.  

**Edge Cases**  
- Sudden spike in subscribers → fan‑out can saturate network; need backpressure or rate‑limiting.  
- Highly selective filters → index maintenance becomes expensive; consider bloom filters to reduce false positives.  
- Late‑arriving messages may miss a subscriber’s window; use watermarking and replay capabilities.  

**Optimize & Communicate**  
Explain that for workloads with many broad subscribers, fan‑out is simpler and cheaper to write but scales poorly on reads. For niche interests, filtering reduces bandwidth and storage per consumer. I’d suggest a hybrid: start with fan‑out, then migrate hot topics to filtered streams when subscriber count grows beyond a threshold. This keeps the system responsive while controlling cost—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
