---
qid: ing_45a6250fd4__faang__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 530
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:45-05:00'
sources: []
---

**Clarify**  
We’re asked to walk through the *Communications* section of the “system‑design‑primer” README that describes how a high‑traffic microblogging service (like Twitter) handles message delivery, scaling and fault tolerance. Key assumptions: read/write traffic is highly skewed toward reads, data is eventually consistent, latency ≤ 200 ms for most users, and we need to support global availability.

**Approach**  
1. **Message Ingestion** – a write‑side API receives tweets, validates, assigns an ID, timestamps, and writes to a write‑through cache + persistent store.  
2. **Storage Layer** – sharded relational or NoSQL DB (e.g., Cassandra) keyed by user id for “user timeline” and by tweet id for “tweet feed”.  
3. **Read Path** – serve timelines from read replicas; use a fan‑out-on‑write cache (Redis/Memcached).  
4. **Delivery** – push notifications via message queues (Kafka/NSQ) to followers’ clients, with eventual consistency guarantees.

**Depth**  
- *Write path*: `POST /tweet` → API gateway → rate limiter → enqueue → worker → write to DB + publish to Kafka topic “tweets”.  
- *Read path*: `GET /timeline?userId=U` → read‑replica lookup in sharded table `user_timeline(U)`; fallback to recompute if cache miss.  
- *Fan‑out strategy*: either **push** (write time fan‑out) or **pull** (on request). Push uses Kafka partitions per follower group; pull keeps storage smaller but increases read latency.  
- *Consistency*: eventual consistency via asynchronous propagation; strong consistency for user profile updates using distributed locks.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale Kafka brokers & DB nodes.  
- Network partition → use quorum reads/writes to avoid split brain.  
- Data loss in queues → enable idempotent producers and consumer replay from offsets.

**Optimize & Communicate**  
To improve throughput, shard by user hash and use read‑replicas per region. Add a CDN for static assets. Explain trade‑offs: push fan‑out reduces read latency but increases write load; pull is lighter on writes but may miss real‑time updates. Conclude with monitoring metrics (latency percentiles, queue depth) to detect bottlenecks early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
