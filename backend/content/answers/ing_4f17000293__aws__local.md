---
qid: ing_4f17000293__aws__local
question: 'Explain: What is a CDN? Why should we — What Is A CDN? How Does It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 502
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:01-05:00'
sources: []
---

**What is a CDN and why do we need one?**  

> **Leadership Principles:** *Customer Obsession* – deliver low‑latency content; *Ownership* – own the entire delivery stack.

### Behavioral (STAR)

- **Situation:** Our global e‑commerce site saw 40 % of users in Asia reporting slow image load times, hurting conversion.
- **Task:** Reduce average latency for static assets to < 200 ms worldwide.
- **Action:** I championed a migration from our origin S3 bucket to **Amazon CloudFront**. I set up geo‑aware edge locations, enabled HTTP/2 and Brotli compression, and configured cache invalidation rules that matched product update cycles.
- **Result:** Page load latency dropped by 68 % (from 520 ms to 170 ms) in the Asia region; conversion rate increased 12 %, generating an additional $1.8 M in quarterly revenue. The cost was only a 9 % increase in monthly spend, but we gained 95 % of traffic served from edge caches.

### Technical

- **What it is:** A CDN (Content Delivery Network) is a globally distributed set of cache servers that store copies of static assets (images, CSS, JS) closer to end users.
- **How it works:**  
  1. Client requests an asset → DNS resolves to the nearest edge location.  
  2. Edge checks its cache; if hit, serves immediately.  
  3. If miss, edge fetches from the origin (S3 or ALB), caches it for a TTL, and returns it.  
- **AWS services involved:** CloudFront (edge caching, SSL termination, WAF integration), S3 (origin storage), Route 53 (latency‑based routing if needed).  
- **Scalability & Availability:** Edge locations auto‑scale; 99.999 % availability SLA.  
- **Cost trade‑offs:** Pay for data out and requests; caching reduces origin load, lowering overall spend.

**Takeaway:** A CDN turns a single origin into a global, low‑latency service, directly improving customer experience and business metrics—exactly what Amazon’s leadership principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
