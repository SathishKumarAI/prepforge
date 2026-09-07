---
qid: ing_c354265d79__think__local
question: 'Explain: Message Throughput — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 530
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T15:08:14-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify what “message throughput” means in this context (bytes/sec, messages/sec).  
- Assume we’re designing a *WhatsApp‑style* messaging service at scale (millions of users).  
- Decide on the key constraints: latency (< 200 ms), reliability, eventual consistency.  

**2️⃣ Adopt a layered mental model**  
1. **User–app layer** – mobile clients push messages via HTTP/WebSocket.  
2. **API gateway / load‑balancer** – routes traffic to back‑ends.  
3. **Message ingestion service** – queues, deduplication, metadata extraction.  
4. **Storage & replication** – persistent store (NoSQL/relational), CDN for media.  
5. **Delivery layer** – push notifications, presence handling.  

Use this framework to map throughput requirements at each stage.  

**3️⃣ Step‑by‑step reasoning**  
- *Estimate traffic*: 10 M users × 2 msgs/min ≈ 333 k msg/s.  
- *Throughput target*: ~500 msg/s per ingestion node for safety.  
- *Queue design*: Kafka topics partitioned by conversation ID; calculate partitions = (total msg/s ÷ target per broker).  
- *Horizontal scaling*: Add brokers/consumers as load grows; auto‑scale based on queue depth.  
- *Back‑pressure handling*: Slow consumers signal via acknowledgments; throttle producers.  

**4️⃣ Common pitfalls to avoid**  
- Ignoring bursty traffic (e.g., group chats); plan for peak > average by 5×.  
- Overlooking per‑message metadata (timestamps, read receipts) that adds size overhead.  
- Assuming a single monolithic database will handle the write load; separate storage for messages vs. media.  

**5️⃣ Sanity‑check & articulate**  
- Verify numbers: 500 msg/s × 60 s ≈ 30 k msgs/min → 1.8 M msgs/hr, plausible for large user base.  
- Cross‑check with real‑world benchmarks (e.g., WhatsApp reportedly handles > 100 M msg/s globally).  
- Communicate clearly: start with high‑level architecture, then drill into throughput calculations and scaling strategy.  

This structured approach ensures you cover the design space, justify your assumptions, and present a coherent answer in an interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
