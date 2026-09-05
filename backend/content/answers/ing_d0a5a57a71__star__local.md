---
qid: ing_d0a5a57a71__star__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 411
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:37-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new video‑on‑demand service that needed to serve millions of users worldwide. Our existing backend could handle the database load, but when we started testing traffic spikes, latency over Asia rose from 120 ms to 1.5 s and our bandwidth costs doubled.

**Task:**  
I was tasked with designing a content delivery network (CDN) that would cache popular video segments closer to users, reduce origin server load, and keep the cost under $200k per month while maintaining sub‑250 ms latency globally.

**Action:**  
I mapped out a multi‑tier architecture:  
1. **Edge caching layer** – deployed 30 Cloudflare workers across major regions; each worker served static MP4 segments from an S3 bucket with signed URLs.  
2. **Dynamic origin fallback** – implemented an AWS Lambda@Edge function that, on cache miss, fetched the segment from our primary origin and streamed it to the edge while simultaneously writing a copy back to the CDN cache.  
3. **Cache‑control policy** – set TTLs based on content popularity (hot: 24 h, warm: 12 h, cold: 1 h) and used Cloudflare’s “Always Online” feature for graceful degradation.  
4. **Analytics & autoscaling** – integrated CloudWatch metrics to auto‑scale origin instances during flash crowds and used S3’s transfer acceleration to reduce upload times from our data center.

**Result:**  
After rollout, average latency dropped to 180 ms worldwide, and the CDN reduced bandwidth consumption by 65%, saving us $120k annually. The system also handled a 10× traffic spike during a live event without any outages. I learned that careful TTL tuning and edge‑first caching are critical for balancing cost, performance, and reliability in large‑scale media delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
