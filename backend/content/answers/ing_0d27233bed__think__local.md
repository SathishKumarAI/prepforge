---
qid: ing_0d27233bed__think__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 453
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:35:02-05:00'
sources: []
---

**1. Clarify the scope and constraints**  
   * Is this a global, low‑latency service or an internal tool?  
   * What volume of users / events per second?  
   * Which consistency guarantees are required (strong vs eventual)?  
   * Are there cost or privacy limits on data retention?  

**2. Adopt a layered design framework**  
   * **Client layer** – websockets, long‑polling, push notifications.  
   * **State store** – in‑memory cache + durable persistence.  
   * **Event bus / message queue** for state changes.  
   * **API gateway & auth** to expose status updates.  

**3. Step‑by‑step reasoning**  
   1. Capture user activity (login, heartbeat, idle timeout).  
   2. Emit events into a topic; use partitioning by shard key (user ID) for ordering.  
   3. Consume events with stateful workers that update an in‑memory cache (Redis, Memcached).  
   4. Persist snapshots to a fast NoSQL store (Cassandra, DynamoDB) for durability and recovery.  
   5. Broadcast status changes to interested clients via websockets or push services.  

**4. Avoid common pitfalls**  
   * **Thundering herd** on cache invalidation – use per‑shard locks or optimistic concurrency.  
   * **Message duplication** – idempotent processing of events.  
   * **Cold starts** – keep a warm pool of worker instances for low latency.  

**5. Sanity‑check & communicate**  
   * Verify that the read path (client → cache) meets the 10 ms SLA.  
   * Ensure write amplification is acceptable: one event → one cache update + one DB write.  
   * Explain trade‑offs (e.g., using Redis for speed vs. Cassandra for durability).  

By following this structured approach, you can iteratively refine the design and surface key decisions early in the interview or documentation process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
