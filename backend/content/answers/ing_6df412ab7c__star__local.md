---
qid: ing_6df412ab7c__star__local
question: 'Explain: User Data — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 372
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:14-05:00'
sources: []
---

**Situation:**  
When I joined a product team at a music streaming startup, the existing “user profile” service was monolithic and couldn’t scale with our growing base of 10 M monthly active users. Every time we released a new recommendation feature, the latency hit 300 ms and we’d see cache invalidation spikes.

**Task:**  
I had to redesign the user data layer so that it could serve real‑time personalization requests at sub‑50 ms latency while handling 200k concurrent reads per second, all without breaking backward compatibility with existing APIs.

**Action:**  
1. I split the monolith into three bounded contexts: *Identity*, *Preferences* and *Listening History*.  
2. For Identity, I moved to a read‑optimized PostgreSQL cluster with row‑level security; for Preferences and Listening History I built event‑driven Kafka streams that write to a time‑series NoSQL store (DynamoDB) and keep an in‑memory cache (Redis).  
3. Implemented a sharded “user‑segment” service that uses consistent hashing to route requests to the correct shard, minimizing cross‑node traffic.  
4. Added a fallback circuit breaker for the history service so recommendation queries could still return cached top‑10 tracks if the stream lagged.

**Result:**  
Read latency dropped from 300 ms to 35 ms, and our recommendation engine’s hit rate rose by 12 %. The new architecture supported a 5× user growth over six months with no major outages. I learned that micro‑services must be designed around data access patterns, not just business capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
