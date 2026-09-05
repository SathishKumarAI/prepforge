---
qid: ing_86b84659d7__star__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 326
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:53-05:00'
sources: []
---

**Situation:** At my previous startup we launched a new social‑media feature that let users create short video reels. The product team wanted an architecture similar to Instagram’s Reels, but our existing backend was built for static photo uploads and didn’t support real‑time streaming or heavy media processing.

**Task:** I had to design a scalable, low‑latency system that could ingest millions of daily videos from web and mobile clients, process them into multiple resolutions, store them efficiently, and deliver personalized feeds with minimal load times.

**Action:** I started by breaking the flow into three microservices: an ingestion API (Node.js + FastAPI) that accepted multipart uploads and pushed metadata to Kafka; a transcoding worker cluster on Kubernetes using FFmpeg containers, autoscaling via Prometheus metrics; and a CDN‑backed storage layer in S3 with versioning. For personalization I built a GraphQL endpoint backed by Redis for hot data and PostgreSQL for long‑term analytics. To keep the user experience snappy I added edge caching with CloudFront and implemented a progressive download strategy on mobile using HTTP/2 server push.

**Result:** The new pipeline handled 3 M uploads/day with <1 s ingestion latency, reduced storage costs by 25% through aggressive compression, and cut feed load times from 4.8 s to 1.2 s on average. I learned that a modular, event‑driven architecture coupled with edge caching is key for scaling media platforms at Instagram’s level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
