---
qid: ing_8e6f72f1a9__think__local
question: 'Explain: User Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 594
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:28:31-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - *What is a “User Service” for Instagram?*  
     Assume it handles user‑level data: profile, authentication, follow relationships, and basic activity logs.  
   - *Scope:* Ignore media storage, recommendation engines, or real‑time messaging—focus on CRUD + social graph operations.  
   - *Scale assumptions:* millions of users, high read/write, eventual consistency for following edges.

**2️⃣ Adopt a system‑design framework**  
   - **Requirements matrix:** functional (profile CRUD, follow/unfollow), non‑functional (latency < 100 ms, 99.9% availability).  
   - **Components stack:** API gateway → load balancer → stateless app servers → caching layer → database cluster → background workers.  
   - **Data model & partitioning strategy**: User table + Follower/Following adjacency lists; shard by user ID hash.

**3️⃣ Reason step‑by‑step toward a concrete design**  
   1. *API surface* – RESTful endpoints for CRUD and follow ops, rate‑limit per IP.  
   2. *Stateless services* – use containers behind a load balancer; horizontal scaling.  
   3. *Caching* – Redis/Memcached for hot users and follower counts to reduce DB hits.  
   4. *Database choice* – NoSQL (Cassandra) for write‑heavy follow graph, relational DB for profile attributes.  
   5. *Consistency model* – eventual consistency on following edges; optimistic concurrency control for profile edits.  
   6. *Background jobs* – update follower counts, send notifications asynchronously.  
   7. *Monitoring & resilience* – health checks, circuit breakers, retry logic.

**4️⃣ Avoid common traps**  
   - Don’t over‑optimize “user” tables; remember the graph is sparse but grows fast.  
   - Don’t assume single‑region deployment—plan for multi‑AZ or geo‑replication.  
   - Beware of “write amplification” in follow/unfollow if you store both directions redundantly without a clean delete strategy.

**5️⃣ Sanity‑check & verbalize**  
   - **Latency test:** Estimate 1 ms cache hit, 10 ms DB read → < 20 ms total.  
   - **Throughput estimate:** 100k req/s → shard into ~200 instances; ensure each can handle ~500 req/s.  
   - **Explain trade‑offs**: “We chose eventual consistency for follows to keep latency low, but we’ll use a background job to reconcile counts.”

By walking through these steps you’ll produce a clear, scalable design that covers the core of an Instagram‑style user service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
