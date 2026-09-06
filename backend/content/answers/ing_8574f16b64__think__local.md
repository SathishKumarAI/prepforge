---
qid: ing_8574f16b64__think__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 769
total_tokens: 968
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:50:41-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- The interviewer wants a high‑level design of an “Instagram‑style” user feed service (e.g., `GET /feed`).
- Assume millions of users, billions of posts, real‑time posting.
- Focus on scalability, latency (<200 ms), freshness, and personalization.
- Ignore lower‑layer concerns like networking protocols unless they affect the design.

**2️⃣ Adopt a mental model**

Use the classic **“Data‑pipeline + Serving Layer”** framework:

1. **Ingest layer** – capture posts, user actions → write to durable store.
2. **Processing layer** – compute feeds (pre‑compute or on‑demand).
3. **Storage layer** – where pre‑computed feeds live (cache, DB).
4. **Serving layer** – API endpoint that fetches and streams the feed.

This keeps responsibilities clear and lets you reason about trade‑offs.

**3️⃣ Step‑by‑step reasoning**

1. **Define feed semantics**  
   - What “feed” means: newest posts from followees, maybe with algorithmic ranking.
2. **Choose pre‑compute vs on‑demand**  
   - Pre‑compute gives sub‑100 ms latency but requires huge storage and refresh logic.  
   - On‑demand is cheaper to store but can hit >200 ms if you have to scan many posts per request.
3. **Design ingestion pipeline**  
   - Use a message queue (Kafka) → microservice that writes to Postgres for durability, then pushes updates to an in‑memory cache or stream processor.
4. **Compute feed shards**  
   - Partition by user ID; each shard holds the top N posts per followee.  
   - Use a “fan‑out” strategy: when a user posts, push to all followers’ queues.
5. **Storage choice**  
   - Redis/Memcached for hot feeds (e.g., last 200 items).  
   - NoSQL (Cassandra/BigTable) for long‑term persistence.
6. **Serving logic**  
   - API gateway → fetch from cache; if miss, read from DB, merge, sort, return paginated cursor result.
7. **Pagination & cursors**  
   - Use opaque cursors based on timestamp+id to support infinite scroll.
8. **Scaling & sharding**  
   - Horizontal scaling of both ingestion and serving nodes.  
   - Rate limiting per user/IP.

**4️⃣ Common pitfalls**

- Mixing *data* and *service* responsibilities (e.g., letting API layer do heavy ranking).  
- Ignoring cache invalidation: stale feeds if you don’t refresh when users unfollow or delete posts.  
- Underestimating write amplification in fan‑out patterns.  
- Forgetting about eventual consistency between ingestion and serving layers.

**5️⃣ Sanity checks & verbal walk‑through**

- Verify latency targets: count hops (queue → processor → cache/DB → API).  
- Check that the storage cost of pre‑computed feeds scales linearly with follower counts.  
- Ask “What happens when a user follows someone new?” and ensure the system updates their feed promptly.  
- Explain trade‑offs clearly: e.g., if we switch to on‑demand, what latency penalty do we accept?  

Wrap up by summarizing: a pipeline that ingests posts → pushes updates to follower shards → stores top N per shard in fast cache → API fetches and merges for the user. This structure balances freshness, scalability, and low latency while remaining extensible (e.g., add algorithmic ranking later).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
