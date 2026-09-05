---
qid: ing_a6035b0284__star__local
question: 'Explain: Design Instagram — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 321
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:59-05:00'
sources: []
---

**Situation:**  
At my previous startup, we were tasked with building a photo‑sharing platform similar to Instagram that could handle millions of daily uploads while keeping latency under 300 ms for the feed.

**Task:**  
I had to design the core system: storage, caching, real‑time feed generation, and scalable image delivery, all within a tight two‑month sprint.

**Action:**  
I chose a microservices architecture. For storage I used **S3** (or equivalent object store) for raw images and **Aurora Serverless** for metadata. The feed service pulled recent posts via a **Kafka** stream; we sharded feeds by user ID and cached the top 200 items in **Redis Cluster**, refreshing every 5 s. Image thumbnails were generated on‑the‑fly with a Lambda function and served through a CDN (CloudFront). To handle growth, I implemented horizontal scaling for the feed service behind an ALB, used **Circuit Breaker** patterns to isolate failures, and added rate limiting per user to protect against abuse.

**Result:**  
Within two months we launched a beta that supported 1.2 M concurrent users with average feed latency of 180 ms. The system handled a 300% traffic spike during launch without downtime. I learned the importance of decoupling real‑time data pipelines from static asset delivery and how to use caching tiers strategically to meet strict SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
