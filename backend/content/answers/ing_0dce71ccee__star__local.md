---
qid: ing_0dce71ccee__star__local
question: 'Explain: Pastebin — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:05-05:00'
sources: []
---

**Situation** – In my last role I was asked to prototype a lightweight Paste‑in‑a‑Box feature for an internal dev‑ops portal that had about 10k users and could see up to 5,000 paste uploads per minute during peak deployments.

**Task** – Build a highly available, low‑latency system that stores snippets of code/text, supports public/private sharing via short URLs, and can scale elastically without breaking the main application’s performance budget.

**Action** – I started with a stateless API layer behind an Nginx load balancer, using Go for its concurrency. For persistence I chose DynamoDB (event‑driven writes) coupled with S3 for large blobs; the key was to keep the DB size small by storing only metadata and a signed S3 URL. Read traffic was routed through a Redis cache with a 5‑minute TTL to avoid hitting S3 on every view. To support instant public links I used short UUIDs (base62) generated in Go, and added a CloudWatch alarm that auto‑scales the API tier when read/write latency exceeded 200 ms. Finally, I added an audit log via Kinesis for compliance.

**Result** – The prototype handled 7,500 uploads/min with <30 ms average response time and <0.1 % error rate during load tests. Storage cost dropped by 35 % compared to a monolithic file system approach, and the auto‑scaling rule cut our EC2 spend in half during off‑peak hours. I learned that decoupling metadata from payload storage and leveraging caching early can turn a simple paste service into a production‑ready platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
