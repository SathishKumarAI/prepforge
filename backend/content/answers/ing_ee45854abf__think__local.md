---
qid: ing_ee45854abf__think__local
question: 'Explain: Requirement Clarification — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 548
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:45:04-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Constraints**  
   - Confirm whether we’re building *just* a photo‑sharing feed or an entire Instagram clone (auth, stories, reels, messaging).  
   - Ask about scale expectations (users, uploads per second), latency targets, and key KPIs.  
   - Define non‑functional requirements: availability (e.g., 99.9 %), durability of media, privacy rules.

**2️⃣ Adopt a Layered System Design Framework**  
   - **Client layer:** mobile/web UI → API gateway.  
   - **API layer:** stateless REST/GraphQL services for feed, upload, auth.  
   - **Storage layer:** object store (S3‑compatible) + CDN, relational DB for metadata, NoSQL for feeds.  
   - **Processing layer:** async workers for image resizing, thumbnail generation.  
   - **Search & recommendation layer:** inverted index or search engine, ML model serving.

**3️⃣ Reason Step‑by‑Step Through Key Subsystems**  
   1. *User auth*: OAuth + JWT, rate limits.  
   2. *Upload pipeline*: client → presigned URL → CDN → object store; trigger worker for transformations.  
   3. *Feed generation*: fan‑out vs pull; cache recent posts in Redis, use push notifications for real‑time updates.  
   4. *Scalability*: sharding by user ID, horizontal scaling of API servers, load balancer health checks.  
   5. *Consistency*: eventual consistency for feeds, strong consistency for account settings.

**4️⃣ Avoid Common Pitfalls**  
   - Don’t ignore the “write‑heavy” nature; naïve relational models will bottleneck.  
   - Beware of CDN cache invalidation on edits/ deletes.  
   - Skip over security: encrypt media at rest, enforce HTTPS everywhere.  
   - Forget to plan for *data growth*—design bucket key patterns to avoid hot partitions.

**5️⃣ Sanity‑Check & Communicate**  
   - Verify that each requirement maps to a concrete component or trade‑off.  
   - Run through a user story: “User uploads photo → thumbnail generated → appears in followers’ feeds within 2 s.”  
   - Summarize the high‑level diagram, highlight bottlenecks, and propose monitoring metrics (request latency, error rates, cache hit ratio).  

This structured approach keeps the discussion focused, demonstrates architectural thinking, and shows how you translate vague requirements into a robust, scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
