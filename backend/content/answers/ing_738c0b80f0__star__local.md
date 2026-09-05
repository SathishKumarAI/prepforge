---
qid: ing_738c0b80f0__star__local
question: What is Instagram? — Design Instagram | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 308
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:51-05:00'
sources: []
---

**Situation** – In a recent hackathon I was asked to sketch out the architecture for an “Instagram‑style” photo sharing app that could support millions of daily active users and a constant stream of uploads.

**Task** – My goal was to design a scalable, low‑latency system that handled image ingestion, user feeds, likes/comments, and notifications while keeping storage costs reasonable.

**Action** – I started with a microservice split: `Auth`, `Upload`, `Feed`, `Notification`. Images were stored in S3 with CloudFront for CDN delivery. For the feed I used a hybrid approach—pre‑compute “home” feeds in Redis queues using a fan‑out strategy, then fall back to pull from Cassandra for “explore”. Likes/comments hit a write‑optimized Kafka stream that updated a read‑only ElasticSearch index for fast search. Autoscaling on Kubernetes kept latency under 200 ms. I also added rate limiting and an image deduplication pipeline using perceptual hashing.

**Result** – The prototype handled 10k concurrent uploads with <300 ms response, and the feed served 1M users with 95% cache hit ratio. I learned how to balance consistency vs. latency, the importance of choosing the right datastore per workload, and that a well‑planned CDN can dramatically cut costs while improving UX.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
