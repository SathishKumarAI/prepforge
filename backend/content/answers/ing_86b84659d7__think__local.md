---
qid: ing_86b84659d7__think__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 538
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:55:45-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- Identify the *clients* (web browsers, iOS/Android apps).  
- Assume a simplified “Instagram‑style” feature set: photo upload, feed, likes/comments, basic auth.  
- Decide on constraints: expected traffic (millions of users), latency targets (< 200 ms for feed).

**2️⃣ Choose a mental model**

Use the classic **“Client–Server + Microservices”** architecture:
- *Presentation layer* (React/Swift/Kotlin) → REST/GraphQL API.  
- *API Gateway* handling auth, rate‑limit, routing.  
- *Microservice clusters*: Auth, Media, Feed, Notifications, Search.

Layer the data store: SQL for relational data (users, relationships), NoSQL (Cassandra/DynamoDB) for feeds, object storage (S3/Blob) for media, Redis for caching.

**3️⃣ Step‑by‑step reasoning**

1. **Auth Service** – OAuth2 + JWT; keep user sessions stateless.  
2. **Media Service** – upload → CDN, generate thumbnails via worker queue.  
3. **Feed Service** – precompute timelines (push or pull) into a fast key‑value store; use fan‑out on new posts.  
4. **Like/Comment Service** – append to a log for eventual consistency; update feed counters in cache.  
5. **Notification Service** – push via APNs/Firebase Cloud Messaging.  
6. **Search Service** – ElasticSearch index on captions, tags.  
7. **Client‑side caching & pagination** – limit payload size, use ETag/If‑Modified.

**4️⃣ Common traps**

- *Over‑optimizing for read* at the expense of write latency (e.g., naive fan‑out).  
- Ignoring CDN placement → high media latency.  
- Mixing synchronous DB writes with async feed updates without a clear consistency contract.  
- Forgetting to scale auth tokens; use short JWT lifetimes.

**5️⃣ Sanity checks & verbalizing**

- **Ask**: “What happens when 10k users post at once?” → ensure queue + fan‑out handles burst.  
- **Check**: latency budgets per component, verify cache hit ratios.  
- **Explain aloud**: walk through a user’s journey (login → upload → feed refresh), mapping each step to the corresponding service and data store.

This structured approach keeps the design clear, scalable, and interview‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
