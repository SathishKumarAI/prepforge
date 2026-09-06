---
qid: ing_00236cf51a__think__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 484
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:45:49-05:00'
sources: []
---

**1️⃣ Clarify the task & assumptions**  
   * Identify what “those spots are full” refers to (e.g., a specific level or all levels).  
   * Assume we’re designing an online parking‑garage system that must handle real‑time occupancy, reservations, and dynamic pricing.  

**2️⃣ Choose a mental model / framework**  
   * Use the **system‑design checklist**: requirements → high‑level architecture → data modeling → APIs → consistency & scalability → monitoring & failure handling.  
   * Think in terms of *stateless services* (API gateway, reservation service) + *stateful stores* (Redis cache for quick occupancy checks, relational DB for persistence).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Requirements**: functional (reserve, check availability, cancel), non‑functional (latency < 200 ms, 99.9% uptime).  
   2. **High‑level diagram**: client → API gateway → load balancer → stateless microservice → cache + DB.  
   3. **Data model**: `Spot(id, level, status)`; index by level for bulk queries.  
   4. **Cache strategy**: keep a bitmap per level in Redis; update on reservation/cancellation.  
   5. **Consistency**: use optimistic locking or a message queue to serialize spot allocation.  

**4️⃣ Common traps to avoid**  
   * Ignoring race conditions when two users reserve the last spot simultaneously.  
   * Over‑optimizing for cache misses – forget persistence fallback.  
   * Assuming all spots are identical; neglecting special zones (disabled, electric).  

**5️⃣ Sanity checks & verbal communication**  
   * Verify that each microservice has a single responsibility and clear API contract.  
   * Explain how the cache invalidation flow works when a spot becomes occupied or freed.  
   * Summarize latency guarantees: cache hit < 20 ms, DB read < 50 ms, overall < 200 ms.  

By walking through these steps you’ll arrive at a robust, scalable parking‑garage design that gracefully handles “all spots full” scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
