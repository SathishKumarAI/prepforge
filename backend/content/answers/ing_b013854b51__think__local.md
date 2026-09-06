---
qid: ing_b013854b51__think__local
question: 'Explain: Functional Requirements — Real Time Presence Platform System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 555
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:37:57-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What* is a “real‑time presence platform”?  Think of services like Slack’s online/offline status, gaming lobbies, or IoT device heartbeats.  
- *Scope*: Do we need only status (online/offline) or richer info (activity, latency, battery)?  
- *Scale*: Estimate users, updates per second, geographic spread.  
- *Latency tolerance*: How fast must a presence change propagate?  

**2️⃣ Adopt a layered design framework**  
1. **Client layer** – push notifications / websockets for instant updates.  
2. **API gateway** – authentication, rate‑limiting, routing to microservices.  
3. **Presence service** – core logic: store current state, merge concurrent changes.  
4. **Data store** – choose fast in‑memory (Redis, Memcached) + durable fallback (Cassandra, DynamoDB).  
5. **Event bus / pub‑sub** – propagate updates to downstream services (messaging, analytics).  
6. **Monitoring & scaling** – auto‑scale based on QPS, health checks.  

**3️⃣ Step‑by‑step reasoning**  
- **State representation**: a key = userID, value = status struct (online, lastSeen, device).  
- **Update flow**: client sends “set status” → API gateway → presence service → update store & publish event.  
- **Read flow**: client queries or subscribes; service reads from cache and streams changes via websockets.  
- **Failure handling**: retry logic, eventual consistency guarantees, fallback to durable DB if cache miss.  

**4️⃣ Common pitfalls to avoid**  
- *Stale data*: not invalidating cache on updates.  
- *Race conditions*: simultaneous status flips without proper locking or compare‑and‑swap.  
- *Over‑scaling*: adding more nodes before measuring bottlenecks (e.g., write amplification).  
- *Ignoring privacy*: exposing raw timestamps or device info to unintended parties.  

**5️⃣ Sanity checks & communication**  
- Verify **latency targets**: e.g., < 200 ms propagation for 95% of updates.  
- Run a **load test** simulating peak QPS and monitor memory, CPU, network.  
- Explain trade‑offs to stakeholders: “We use Redis for speed but back up to DynamoDB for durability.”  

By following this structured thought process you can articulate a robust real‑time presence platform design that balances performance, scalability, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
