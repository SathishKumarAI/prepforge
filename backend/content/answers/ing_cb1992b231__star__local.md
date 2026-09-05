---
qid: ing_cb1992b231__star__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 438
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:18-05:00'
sources: []
---

**Situation:**  
At my previous role at a fast‑growth photo‑sharing startup, we hit 10 M daily active users and the upload latency was ballooning to 4–5 seconds during peak hours.

**Task:**  
I was tasked with redesigning the post‑upload pipeline so that a new image or video could be persisted in <1 second, while guaranteeing eventual consistency across all user feeds and supporting a 10× traffic spike without breaking the CDN cache.

**Action:**  
I broke the write into three micro‑services:  
1. **Ingest Service** – receives multipart uploads, streams directly to S3 using pre‑signed URLs to avoid buffering on our servers.  
2. **Metadata Service** – writes a lightweight JSON document (user_id, timestamp, media_url, tags) to a sharded PostgreSQL cluster with an auto‑incrementing partition key (`upload_ts % 256`). I added a write‑through cache in Redis for the most recent 1 M posts per shard.  
3. **Feed Service** – publishes a Kafka event (“new_post”) that triggers a background worker which fan‑out to a pre‑computed “top‑feed” table (columnar ClickHouse) and invalidates edge caches via Cloudflare API. I also added idempotent retries and a dead‑letter queue for failures.

I introduced rate limiting per IP and used AWS Lambda for transient scaling during traffic surges, keeping the cost under 15% of the previous monolithic design.

**Result:**  
Upload latency dropped from 4 s to 0.8 s (95th percentile). The system handled a 12× spike with zero outage, and the feed propagation time improved from 3 min to <10 sec. I learned that decoupling storage, metadata, and fan‑out layers, combined with edge caching and asynchronous processing, is key for scalable media uploads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
