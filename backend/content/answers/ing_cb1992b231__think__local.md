---
qid: ing_cb1992b231__think__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 659
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:20:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Goal*: Build a high‑throughput, low‑latency “post upload” pipeline for an Instagram‑style app.
- *Key constraints*: millions of daily uploads, eventual consistency, media storage, real‑time feed updates, and global distribution.
- *Assumptions*: users are authenticated, images/videos are pre‑validated client‑side, we can use cloud services (S3, CDN), and we’re okay with a relaxed read model.

**2️⃣ Adopt a layered mental model**

1. **Client → API Gateway**  
   Handles auth, rate limits, and routing.
2. **Upload Service**  
   Accepts the media blob, validates size/type, stores it, and triggers downstream processing.
3. **Storage & CDN**  
   Persist original media + derived thumbnails; serve via edge caches.
4. **Metadata Store**  
   Holds post metadata (owner, timestamps, tags) in a highly available database.
5. **Feed Engine**  
   Pushes the new post to followers’ feeds or schedules background jobs.

This “upload‑then‑push” decomposition keeps each layer focused and scalable.

**3️⃣ Step‑by‑step reasoning**

- *Client uploads*: POST `/api/upload` → API Gateway → Auth check.
- *Direct upload to S3*: Use pre‑signed URLs so the client writes directly to storage, reducing load on our servers.
- *Metadata creation*: Once upload completes, an event (e.g., SNS topic) triggers a Lambda/worker that:
  - Generates thumbnails via image processing service.
  - Stores metadata in a NoSQL DB (DynamoDB/Cassandra).
  - Publishes “new post” message to a feed queue (Kafka/RabbitMQ).
- *Feed update*: A consumer reads the queue and pushes the post ID into each follower’s feed shard. Use sharding or fan‑out strategies (e.g., write to “user:feed:{id}” sorted set).
- *Read path*: When a user opens their feed, fetch from the cache/DB; for high traffic users, pre‑populate a Redis list.

**4️⃣ Common traps to avoid**

- **Tight coupling between upload and feed** → leads to latency spikes. Decouple via async messaging.
- **Storing large media in DB** → bloats the database. Keep only URLs.
- **Ignoring CDN** → every image hit goes back to origin, hurting bandwidth.
- **Single point of failure for queue** → use a distributed broker.

**5️⃣ Sanity‑check & verbalize**

- *Throughput*: Estimate MB/s and ensure S3 bucket policies allow it.  
- *Latency*: Target < 500 ms for client upload; feed propagation can be eventual.  
- *Scalability*: Show that each component (S3, queue, DB) scales horizontally.  
- *Reliability*: Discuss retry logic, dead‑letter queues, and monitoring.

By walking through these layers, assumptions, and pitfalls, you can articulate a robust design for the “Post Uploads” feature in an interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
