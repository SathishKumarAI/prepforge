---
qid: ing_63815514fa__aws__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 516
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:10-05:00'
sources: []
---

**Situation / Task**

When I joined the audio‑streaming team at a fast‑growing startup, we hit a bottleneck: users in Europe and Asia were buffering during peak hours because our media files lived on a single S3 bucket behind an EC2 proxy. The goal was to redesign the delivery layer so that 99.9 % of streams started within 200 ms globally.

**Action**

I championed a CDN architecture built around **Amazon CloudFront** (Customer Obsession, Ownership).  
* **Origin** – An S3 “media‑library” bucket with versioned MP3/FLAC objects, lifecycle rules to archive old tracks.  
* **Cache policy** – Edge caching for 24 h, custom cache keys that include bitrate and DRM token, ensuring users receive the correct quality tier.  
* **Edge logic** – Lambda@Edge rewrites URLs on the fly (e.g., `/track/12345?quality=320`) to point to the right S3 key, and injects a signed cookie for premium listeners.  
* **Origin shield** – A single CloudFront region caches 50 % of requests, reducing S3 read costs by ~70 %.  
* **Monitoring** – Alarms on `4xx`/`5xx` error rates; CloudWatch dashboards show latency per continent.

I also added a **Geo‑routing** Route 53 policy to direct users to the nearest edge location, and used SQS + Lambda for bulk pre‑warm of new releases (cache “pre‑fill”) to avoid cache misses during launch events.

**Result**

* Latency dropped from 800 ms average to 180 ms globally.  
* Peak bandwidth cost fell by **$120k/month** due to reduced S3 reads and edge caching.  
* User churn decreased by 3 % in the first quarter post‑launch, directly tied to smoother playback.

**Reflection**

I learned that *designing for failure* (adding fallback origins) and *continuous monitoring* are as critical as the initial architecture. The bar‑raiser was impressed by my ownership of both performance metrics and cost savings, and by my ability to dive deep into CloudFront’s cache behavior to achieve measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
