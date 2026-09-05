---
qid: ing_ba21a01b62__star__local
question: What is the difference between pull and push CDNs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 312
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:18-05:00'
sources: []
---

**Situation:**  
When I was migrating a media‑heavy e‑commerce site to reduce latency, the dev team noticed that our CDN was pulling each image on every user request, causing a spike in origin server load during peak traffic.

**Task:**  
I needed to choose between a pull or push CDN strategy and implement it so we could serve high‑resolution product images faster while keeping the origin cost down.

**Action:**  
First I mapped out our traffic patterns: 70 % of requests were for static assets that never changed. I set up a **push CDN** by pre‑uploading all image variants (desktop, tablet, mobile) to the edge using the vendor’s CLI and scheduled nightly syncs via cron. For rarely updated assets like promotional banners, I kept a **pull CDN** setup so new banners could be fetched on demand without extra uploads. I also added cache‑control headers (`max-age=86400`) and used signed URLs for sensitive content.

**Result:**  
After the switch, origin hits dropped by 85 %, page load times improved from 3.2 s to 1.8 s on average, and we cut CDN bandwidth costs by ~40 %. I learned that a hybrid approach—push for static heavy assets and pull for dynamic ones—delivers both performance and operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
