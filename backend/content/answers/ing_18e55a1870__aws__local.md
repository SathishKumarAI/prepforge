---
qid: ing_18e55a1870__aws__local
question: 'Explain: Video and Audio Streaming — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 553
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:16-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at my previous company, we were tasked with launching a new “Live‑Events” product that streamed high‑definition video and low‑latency audio to millions of users worldwide. The challenge was to deliver sub‑200 ms latency for live streams while keeping operational costs below $2 per GB delivered.

**Task** – Design an end‑to‑end CDN architecture that guarantees global reach, fault tolerance, and cost efficiency, and present a plan to monitor performance in real time.

**Action** –  
1. **Edge Layer (AWS CloudFront + Lambda@Edge)**:  
   * Distribute cached content globally; use origin failover to a secondary S3 bucket.  
   * Edge‑side logic rewrites URLs for adaptive bitrate streaming (ABR) and inserts user‑specific encryption keys, keeping 95 % of traffic served from the edge.

2. **Origin Layer (Amazon S3 + Elastic Transcoder)**:  
   * Store raw video/audio in S3; on upload trigger a Lambda that launches MediaConvert jobs to generate HLS/DASH variants at multiple bitrates.  
   * Use S3 Transfer Acceleration for ingest, reducing latency by ~30 % for uploads from distant regions.

3. **Real‑time Analytics (Amazon CloudWatch + Kinesis Data Firehose → Athena)**:  
   * Stream CDN logs to Firehose, load into Redshift for ad‑hoc queries; set alarms on cache miss >10 % or 5xx errors >1%.

4. **Cost Controls** – Enable S3 Lifecycle policies to transition older segments to Glacier Deep Archive after 90 days; use CloudFront’s “price class” to limit edge usage in low‑traffic regions.

**Result** – After launch, we achieved:  
* **Latency**: Mean round‑trip <180 ms for live streams, meeting SLAs.  
* **Cost**: $1.85 per GB delivered (≈15 % below target).  
* **Reliability**: 99.999% uptime over the first six months; cache hit ratio >93%.

**Leadership Principles Reflected**  
- **Customer Obsession** – Built a low‑latency experience that kept viewers engaged.  
- **Ownership & Dive Deep** – Tracked every metric, iterated on caching rules, and reduced costs by re‑architecting the ingest path.

**Bar‑raiser takeaway** – Demonstrated ownership through measurable impact, depth in understanding CDN trade‑offs (latency vs. cost), and a clear learning loop from monitoring data to continuous optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
