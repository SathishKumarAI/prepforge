---
qid: ing_766adc6874__faang__local
question: 'Explain: Online Gaming — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 511
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:19:04-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe how an online‑gaming platform can be built on an event‑driven architecture (EDA).  
*Assumptions I’d confirm:*  
1. Real‑time multiplayer interactions dominate traffic.  
2. Latency < 50 ms is required for user experience.  
3. The system must scale to millions of concurrent players and support feature updates without downtime.

**Approach**  
1. Identify core event types (player actions, matchmaking requests, in‑game purchases).  
2. Define a message bus (Kafka/Redis Streams) and schema registry.  
3. Build microservices that subscribe/publish to relevant topics.  
4. Use sagas for long‑running business processes (e.g., seasonal events).  
5. Incorporate stateful services or distributed caches for session data.

**Depth**  
- **Event Bus:** Kafka partitions per region → horizontal scaling, fault tolerance.  
- **Publishers:** Game clients emit protobuf messages; serializers add timestamps and IDs.  
- **Consumers:** Stateless workers replay events to update player stats, trigger rewards, or adjust matchmaking queues.  
- **State Management:** Redis‑cluster holds active session state; snapshots are persisted to a relational DB for durability.  
- **Consistency:** Employ idempotent handlers; use event sourcing for auditability.  
- **Latency:** Keep processing in < 20 ms by batching microseconds and using async I/O.

**Edge Cases**  
- *Out‑of‑order events:* include sequence numbers, re‑ordering logic.  
- *Duplicate messages:* dedupe via unique IDs.  
- *Network partitions:* graceful degradation of matchmaking until connectivity restores.  
- *Massive event bursts (e.g., global boss spawn):* backpressure by throttling producers.

**Optimize & Communicate**  
- Introduce a **CQRS** layer to separate read/write workloads, improving cache hit rates for leaderboards.  
- Deploy a **hot‑standby replay service** that can catch up after outages without reprocessing the entire stream.  
- Narrate trade‑offs: Kafka offers durability but adds latency; Redis gives speed at cost of eventual consistency—balance per use case.  

This structure demonstrates clear problem framing, methodical planning, deep technical detail, awareness of edge cases, and thoughtful optimization—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
