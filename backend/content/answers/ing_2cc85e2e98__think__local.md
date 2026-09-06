---
qid: ing_2cc85e2e98__think__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 577
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:37:12-05:00'
sources: []
---

**1. What to clarify first + assumptions to state**  
   • Identify the scope of the “Airbnb system design” interview: is it a full‑stack architecture, a specific feature (search, booking), or scalability concerns?  
   • Clarify performance targets (e.g., 10 k requests/sec), data consistency needs, and any regulatory constraints (GDPR).  
   • Assume typical AWS‑style microservices with relational DBs for persistence, but be ready to adapt.

**2. The mental model / framework to apply**  
   • Use the classic **“System Design Canvas”**: define *user stories*, *functional requirements*, *non‑functional constraints*, *data model*, *service decomposition*, *communication patterns*, *caching*, *consistency models*, *scaling strategy*, and *monitoring*.  
   • Leverage the **CAP theorem** to decide where eventual consistency is acceptable (e.g., search index) versus strict ACID (booking).

**3. How to reason step by step toward the answer**  
   1. Start with high‑level use cases: search listings, view details, make a reservation, manage host listings.  
   2. Sketch core services: Search Service, Booking Service, User Service, Payment Service, Notification Service.  
   3. Design data flows and state transitions (e.g., booking → pending → confirmed).  
   4. Introduce scaling layers: load balancers → stateless API gateways → microservices behind autoscaling groups.  
   5. Add caching (Redis for search results), eventual‑consistency queues (Kafka) for background tasks, and a CDN for static assets.  
   6. Discuss failure handling: circuit breakers, retry policies, graceful degradation.

**4. Common traps and wrong turns to avoid**  
   • Don’t jump straight into code or database tables; first nail the high‑level flow.  
   • Avoid over‑optimizing early (e.g., micro‑services for every tiny feature).  
   • Be wary of claiming “everything is eventually consistent” without noting critical paths that need strong consistency.

**5. How to sanity‑check and communicate it out loud**  
   • Reiterate the problem statement to confirm understanding, then summarize your architectural diagram verbally.  
   • Ask the interviewer if any component should be prioritized (e.g., latency vs throughput).  
   • After each major design choice, explain its trade‑offs: “We use Redis for search because we need sub‑100 ms response; the downside is stale data until reindexing.”  

This structured approach keeps the conversation focused and demonstrates a clear problem‑solving mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
