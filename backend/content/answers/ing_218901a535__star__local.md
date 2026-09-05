---
qid: ing_218901a535__star__local
question: 'Explain: Design Pastebin.com (or Bit.ly) — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 389
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:54-05:00'
sources: []
---

**Situation:**  
When I joined a startup that was building a lightweight code‑sharing platform, the product team wanted a Pastebin‑style service that could handle millions of pastes per day while keeping latency under 100 ms. The existing prototype used a single Node.js server and a flat file store, which quickly hit bottlenecks.

**Task:**  
I needed to redesign the architecture so it supported horizontal scaling, durable storage for large blobs (up to 10 MB), and strong consistency for paste retrieval, all while keeping cost per request low.

**Action:**  
1. I split the system into micro‑services: an API gateway, a paste service, and a search service.  
2. For persistence I chose Amazon S3 for raw paste data (object storage) and DynamoDB for metadata (paste ID, expiry, owner). The paste service writes to S3 via multipart uploads, then updates DynamoDB in a single transaction.  
3. To keep read latency low, I used an in‑memory cache (Redis) with a write‑through strategy; stale data is refreshed asynchronously.  
4. I added a CDN edge layer (CloudFront) for public pastes to serve content globally without touching the origin.  
5. Finally, I implemented rate limiting and automated scaling via AWS Auto Scaling groups.

**Result:**  
The new design handled 3 M writes/day with 95th‑percentile latency < 70 ms and a cost of ~$0.02 per paste. User complaints dropped by 80%, and the team could now focus on feature development instead of ops. I learned that decoupling storage from metadata and leveraging managed services dramatically reduces operational overhead while meeting strict performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
