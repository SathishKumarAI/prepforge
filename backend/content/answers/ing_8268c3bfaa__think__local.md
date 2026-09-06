---
qid: ing_8268c3bfaa__think__local
question: 'Explain: Clarifying Requirements — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 442
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:38:06-05:00'
sources: []
---

**1. Clarify the scope & constraints**  
   - Ask: “What features must WhatsApp support? (text, media, group chats?)”  
   - Determine performance goals: latency (<200 ms), uptime (>99.9%), data‑regulation limits.  
   - Note any non‑functional requirements: scalability to billions of users, cost budget, platform availability.

**2. Adopt a layered mental model**  
   - **Client layer:** mobile/desktop UI → API gateway.  
   - **Service layer:** user auth, messaging, media, notifications, presence.  
   - **Data layer:** relational for accounts, NoSQL for messages, CDN for media.  
   - **Infrastructure layer:** autoscaling, load balancers, global edge nodes.

**3. Reason step‑by‑step**  
   1. Map user flows → required services.  
   2. Choose data stores per access pattern (e.g., append‑only log for chats).  
   3. Design APIs: REST vs gRPC, versioning.  
   4. Plan consistency model (eventual vs strong) for message delivery.  
   5. Sketch scaling strategy: sharding by user ID, replication, cache layers.

**4. Avoid common traps**  
   - Don’t over‑optimize early; focus on core use cases first.  
   - Forgeting to handle edge cases like offline delivery or large media uploads.  
   - Ignoring security (encryption at rest, TLS).  
   - Underestimating operational complexity of global latency.

**5. Sanity‑check & communicate**  
   - Re‑explain the architecture in one sentence: “A globally distributed microservice system that routes encrypted messages through a sharded message store and CDN-backed media service.”  
   - Verify each requirement is addressed, then iterate on bottlenecks or missing pieces before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
