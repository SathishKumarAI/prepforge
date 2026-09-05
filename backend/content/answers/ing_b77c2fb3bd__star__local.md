---
qid: ing_b77c2fb3bd__star__local
question: 'Explain: Trade-offs and Things That Can Go Wrong — Content Delivery Network
  (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 364
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:01-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the media delivery pipeline for a global streaming app that had seen a 35 % drop in user engagement during peak hours due to latency spikes.

**Task**  
I needed to architect a CDN strategy that would reduce load times by at least 30 %, keep costs under $200k per month, and maintain data consistency across 50+ edge locations without compromising security.

**Action**  
First, I mapped traffic patterns using CloudWatch and identified the top three regions driving latency. I evaluated two vendor options: a traditional HTTP/2 CDN (Akamai) and a newer gRPC‑based edge cache (Fastly). I built a proof‑of‑concept with Fastly, leveraging its request routing rules to cache 85 % of static assets and using signed URLs for protected content. To mitigate cache invalidation race conditions, I introduced versioned asset paths and a short TTL fallback that hit the origin only if the CDN missed. For cost control, I set up automatic scaling policies tied to request volume and implemented a daily cost‑reporting script in Python.

**Result**  
The rollout cut average page load from 4.8 s to 3.1 s (a 35 % improvement) during peak periods. Monthly CDN spend stayed at $180k, below the target, while user retention improved by 12 %. I learned that choosing a protocol with built‑in streaming support can reduce server load, but careful cache‑key design and automated cost monitoring are critical to avoid hidden pitfalls like cache stampedes or budget overruns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
