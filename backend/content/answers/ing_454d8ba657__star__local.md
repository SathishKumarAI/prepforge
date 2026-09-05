---
qid: ing_454d8ba657__star__local
question: 'Explain: Redirection Service — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 351
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:21-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a viral marketing campaign that required millions of unique tracking links to be generated and served within milliseconds. The existing URL service was built on a monolith with a flat MySQL table; it couldn’t handle the traffic spike, and latency hit 300 ms for every lookup.

**Task:**  
I had to design a high‑throughput, low‑latency redirection service that could scale horizontally, support custom aliases, and guarantee 99.9% uptime while keeping cost under budget.

**Action:**  
I split the system into three layers: an ingestion API (Node.js + Express) that writes to a sharded Redis cache for instant write; a background worker that persists batches to DynamoDB with a deterministic hash function for short IDs; and a CDN‑edge Lambda@Edge function that performs a key lookup in Redis, falling back to DynamoDB if needed. I introduced rate limiting via API Gateway and used CloudWatch metrics to auto‑scale the cache cluster. For fault tolerance, each shard had an active‑passive replica set.

**Result:**  
The new service handled 5 M requests per minute with <30 ms average latency and a 99.98% success rate during peak traffic. Cost dropped from $12k/month to $7k/month. I learned that coupling fast in‑memory lookups with durable storage, plus edge caching, is the sweet spot for URL shorteners at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
