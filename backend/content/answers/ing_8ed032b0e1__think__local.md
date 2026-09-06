---
qid: ing_8ed032b0e1__think__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 490
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:30:26-05:00'
sources: []
---

**1️⃣ Clarify & Scope**  
   * Ask: “What exactly do you need to know about a spot?” (free/occupied, type, location, capacity).  
   * Assume we’re building a scalable system for a multi‑level garage with thousands of spots.

**2️⃣ Mental Model**  
   * Treat the garage as a **grid of entities** (spots) stored in a fast lookup store.  
   * Use **event sourcing** or **CQRS** to keep state consistent and support real‑time queries.

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Data Model** – SpotID, Level, Row, Column, Type (compact, electric, handicap), Status.  
   2. **Storage** – NoSQL key/value for O(1) status lookup; secondary indexes for filters (type, level).  
   3. **API Design** – `GET /spots/{id}` → spot state; `GET /levels/{lvl}/available?type=compact`.  
   4. **State Updates** – When a car enters/exits, publish an event to a queue; consumer updates DB and caches.  
   5. **Caching** – Use Redis for hot spots (e.g., near entrance) with TTL or pub/sub invalidation.  
   6. **Scalability** – Partition by level or region; use load balancer and autoscaling microservices.

**4️⃣ Common Traps to Avoid**  
   * Over‑optimizing latency at the expense of consistency.  
   * Forgetting eventual consistency for spot status across replicas.  
   * Ignoring fault tolerance—no retry logic on queue failures.

**5️⃣ Sanity Check & Communicate**  
   * Verify that a single read operation can return status in <10 ms.  
   * Explain trade‑offs: cache hit vs DB write, eventual consistency vs strong consistency.  
   * Summarize the flow from car arrival → event → state update → real‑time query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
