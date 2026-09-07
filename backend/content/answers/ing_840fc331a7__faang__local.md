---
qid: ing_840fc331a7__faang__local
question: 'Explain: Asynchronism and microservices — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 451
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:54-05:00'
sources: []
---

**Clarify**  
The interview asks how *asynchronism* and *micro‑services* can be applied to a Twitter‑style system (high read/write, real‑time feeds). I’ll assume: • millions of users; • each tweet is 280 chars; • read latency < 200 ms; • writes must propagate quickly but eventual consistency is acceptable for timelines.  

**Approach**  
1. Split the monolith into micro‑services: Auth, Tweet, Follow, Feed, Search, Notification.  
2. Use message queues (Kafka/RabbitMQ) to decouple write paths from read paths.  
3. Store raw tweets in a partitioned NoSQL DB; build per‑user timelines asynchronously via stream processing.

**Depth**  
- **Write path:** User posts → Tweet service writes to DB + publishes “tweet‑created” event.  
- **Async fan‑out:** Stream processor consumes the event, looks up followers from Follow service, and pushes tweet IDs into each follower’s timeline queue (e.g., Redis Streams).  
- **Read path:** Feed service reads a user’s timeline queue; if missing, falls back to on‑demand aggregation.  
Complexity: O(#followers) per write (handled in background), read latency O(1). Trade‑off: eventual consistency—followers may see tweets slightly delayed but system scales.

**Edge cases**  
- *Massive follower counts* (celebrities): use partitioned fan‑out, throttle or batch.  
- *Out‑of‑order events*: include timestamps; consumer sorts before enqueueing.  
- *Failure of queue:* retry policies and dead‑letter queues.

**Optimize & communicate**  
Explain that asynchronism trades immediate consistency for scalability and lower read latency. Micro‑services isolate concerns, enable independent scaling (e.g., Feed service on GPU instances). I’d highlight monitoring: lag in message processing, back‑pressure signals. This structured explanation showcases clear problem framing, thoughtful design, and awareness of real‑world trade‑offs—key to a high FAANG score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
