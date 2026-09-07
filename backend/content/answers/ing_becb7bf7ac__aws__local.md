---
qid: ing_becb7bf7ac__aws__local
question: How can each cache replica be updated? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 450
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:39-05:00'
sources: []
---

**Situation / Task**  
I was the lead architect for a global TinyURL‑style service that needed to keep every CDN edge cache consistent after a user creates or updates a short link. Our traffic hit ~200 M requests/day and we had to guarantee <5 ms latency while keeping cost under $2 k/month.

**Action / Design**  
1. **Event‑driven write‑through** – When a link is created/updated, the API writes to a *DynamoDB* table (partition key = short code). A DynamoDB Stream triggers an **AWS Lambda** that publishes the change to an **SNS topic**.  
2. **Cache invalidation pipeline** – Subscribed to SNS are two consumer Lambdas:  
   * `InvalidateEdge` pushes a lightweight message to **SQS FIFO** (one message per edge region).  
   * A scheduled **Lambda@Edge** function runs on CloudFront, reads the SQS payload, and sends an HTTP PURGE to the corresponding edge cache.  
3. **Idempotency & deduplication** – The Lambda@Edge uses the short code as a key in a short‑lived **ElastiCache Redis** (cache‑ttl 10 s) to ensure each edge receives at most one purge per update.  

**Result**  
- Cache hit rate rose from 92 % to 98.6 %, cutting downstream DB reads by ~30 M requests/day (~$1.4 k/month).  
- Latency stayed below 5 ms for 99.9 % of traffic, meeting SLA.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dove deep into DynamoDB Streams and Lambda@Edge limits, quantified performance gains, and learned that a simple FIFO queue + idempotent purge is cheaper and more reliable than a full Pub/Sub mesh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
