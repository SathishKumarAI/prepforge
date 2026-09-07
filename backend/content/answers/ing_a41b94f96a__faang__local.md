---
qid: ing_a41b94f96a__faang__local
question: 'Explain: Terminology — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:55-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *live comment system* (e.g., for streaming video or social media). Key requirements: real‑time delivery, high write/read throughput, low latency, ordering per stream, fault tolerance, and eventual scalability. I’d confirm limits: max comments/sec, peak concurrent viewers, acceptable read lag, persistence needs, and whether moderation is in‑flight.

**Approach**  
1. **Front‑end** → WebSocket/HTTP long‑poll to a *gateway* that authenticates users.  
2. **Ingestion layer** → Publish each comment to a distributed log (Kafka or Pulsar) partitioned by stream ID for ordering.  
3. **Processing** → Consumer groups write to a *read‑optimized store* (Redis cache + Cassandra/Spanner).  
4. **Delivery** → Subscribers pull from Redis; if missed, fetch from persistent store.  
5. **Monitoring & scaling** → Auto‑scale consumers and cache nodes based on topic lag.

**Depth**  
- *Latency*: WebSocket to Kafka < 50 ms, consumer to Redis < 10 ms.  
- *Throughput*: Kafka scales linearly; each partition can handle ~10k writes/sec.  
- *Ordering*: Partitioned by stream ensures per‑stream order; cross‑stream ordering not required.  
- *Consistency*: Write‑ahead log guarantees durability; eventual consistency for read cache.  
- *Complexity*: O(1) per write/read, with sharding overhead for partitioning.

**Edge Cases**  
- Burst traffic: Kafka backpressure + auto‑scale consumers.  
- Network partitions: fallback to HTTP polling.  
- Moderation failures: flag comments in store and serve “hidden” placeholders.  

**Optimize & Communicate**  
Future improvements: use a CDN‑edge cache for hot streams, introduce per‑user rate limiting, add AI moderation pipeline. I’d explain trade‑offs (latency vs consistency) and how each component scales, ensuring interviewers see clear reasoning and design rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
