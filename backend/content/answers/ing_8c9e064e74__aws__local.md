---
qid: ing_8c9e064e74__aws__local
question: 'Explain: This is especially effective with a CDN — What Is A CDN? How Does
  It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:56-05:00'
sources: []
---

**Situation / Task**  
When I joined the media‑delivery team, our latency to end users was 200 ms on average, yet we needed sub‑100 ms for live streams. The goal: reduce edge latency while keeping cost under $1M/yr.

**Action**  
I proposed a **Content Delivery Network (CDN)** architecture using Amazon CloudFront + S3.  
- **What is a CDN?** A globally distributed cache that stores content closer to users, automatically routing requests to the nearest healthy edge location.  
- **How does it work?** Requests hit an edge location; if cached, the object is served instantly (cache‑hit). If not, CloudFront fetches from the origin (S3), caches it, and returns it—this is a cache‑miss. Subsequent hits are local.

I added **Lambda@Edge** for custom header injection and **Origin Shield** to reduce origin load. I also enabled **Cache Control headers** with 24 h TTLs, leveraging S3 Transfer Acceleration for the origin.

**Result**  
Latency dropped from 200 ms to 75 ms (63% improvement). Cache hit ratio rose to 92%, cutting origin requests by 80% and saving $350k annually. The solution was highly available (99.999%) and cost‑effective, staying below budget while scaling to millions of concurrent viewers.

**Learning / Ownership**  
I owned the end‑to‑end flow, iterated on TTLs, and monitored CloudWatch metrics daily. When a sudden spike in cache misses appeared, I traced it to stale objects, updated invalidation logic, and documented the fix—ensuring continuous improvement.  

*Leadership Principles: Customer Obsession, Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
