---
qid: ing_8dfbc905e1__aws__local
question: 'Explain: CDN Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:08-05:00'
sources: []
---

**Answer (Amazon Style)**  

During a project to launch a global e‑commerce catalog, I led the design of a CDN‑backed caching layer that reduced page latency by **70 %** and cut origin traffic by **55 M requests/month**.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our product pages were served from a single region, causing >400 ms latency for 60 % of users outside North America. | Build a scalable CDN cache that serves dynamic product data with freshness guarantees. | • Adopted **Amazon CloudFront** as the edge layer; configured **Cache Behavior** to forward *Accept‑Language* and *User‑Agent* headers, ensuring personalized content. <br>• Implemented **Lambda@Edge** to add a custom cache key (product ID + locale) and to invalidate caches on DynamoDB Streams when product prices changed. <br>• Used **AWS Global Accelerator** to route users to the nearest CloudFront edge, improving TCP handshake times. <br>• Leveraged **S3** for static assets and **ElasticCache‑Redis** for session data; set TTLs based on change‑frequency metadata stored in DynamoDB. | *Latency* dropped from 400 ms to 120 ms (average). *Origin requests* fell by 55 M/month, saving ~$12K/yr in compute cost. <br>Customer satisfaction scores rose 8 points in NPS due to faster page loads. |

**Leadership Principles Reflected:**  
- **Ownership**: I took full responsibility for the end‑to‑end performance impact and drove cross‑team coordination (frontend, backend, dev‑ops).  
- **Dive Deep**: By instrumenting CloudWatch metrics and tracing with X-Ray, I pinpointed that stale cache keys were causing 15 % of failures. Adjusting TTLs fixed this.  

**Bar‑raiser notes:** Look for quantified impact, clear trade‑off reasoning (e.g., Lambda@Edge cost vs latency gain), and evidence of learning from a cache miss incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
