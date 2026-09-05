---
qid: ing_77b99972f9__star__local
question: 'Explain: 5.6 Like a Post — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 400
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:21-05:00'
sources: []
---

**Situation** – I was leading the backend team for a new social media app that aimed to launch its first “post” feature within six months while supporting 100 k daily active users. The existing monolithic architecture couldn’t handle real‑time feed generation or media storage at scale.

**Task** – Design an end‑to‑end, horizontally scalable system that can ingest, store, and serve posts (text, images, videos) with low latency, support likes/comments, and deliver a personalized feed to each user within 200 ms.

**Action** – I broke the problem into three layers:  
1. **Ingestion & Persistence** – Used Kafka for event streaming; producer on mobile clients pushed “new post” events to a topic that was consumed by a stateless microservice which validated and wrote metadata to PostgreSQL (schema‑sharded by user ID) and uploaded media to S3 with signed URLs.  
2. **Feed Generation** – Implemented a hybrid push/pull model: a background job pre‑computes top 1 k “engagement” posts per user into Redis sorted sets; the API layer reads from Redis for instant latency, falling back to a GraphQL query against a read replica if cache misses.  
3. **Real‑time Interaction** – Likes/comments were handled by another Kafka topic; each event updated an in‑memory counter in Redis and triggered a lightweight worker that persisted to PostgreSQL asynchronously.

**Result** – The prototype handled 120 k concurrent users with <180 ms average feed latency, reduced database load by 70%, and allowed us to ship the feature two weeks early. I learned how combining stream processing, cache‑first reads, and asynchronous persistence can meet stringent performance targets in a social network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
