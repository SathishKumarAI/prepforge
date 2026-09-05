---
qid: ing_ee5bfae228__star__local
question: 'Explain: Less Origin Load — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 352
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:15-05:00'
sources: []
---

**Situation:**  
At my previous company we had a global e‑commerce site that suddenly saw a 70 % spike in traffic during the holiday sale. Our origin servers were already maxed out on CPU and I/O, causing page latency to climb from 250 ms to over 1 s for many users.

**Task:**  
I needed to reduce load on the origin by at least 50 % while keeping data freshness within a 5‑minute window, all without breaking existing API contracts or user experience.

**Action:**  
I designed and rolled out a CDN strategy:  
- Deployed CloudFront (AWS) with edge caching for static assets and API responses that changed less than every 3 minutes.  
- Configured Lambda@Edge to rewrite dynamic URLs on the fly, adding cache‑control headers based on user region.  
- Implemented a “stale‑while‑revalidate” policy: if an origin hit occurred, the CDN served stale content for up to 2 minutes while asynchronously fetching fresh data.  
- Added health checks and automatic failover to a secondary origin in a different AZ.  
- Monitored cache hit ratios with CloudWatch metrics; tweaked TTLs until we hit a 78 % hit ratio.

**Result:**  
Origin CPU usage dropped from 95 % to 42 %, while page latency fell back to 260 ms on average. The CDN handled the holiday traffic peak without any outages, and I learned how to balance freshness against cache efficiency using edge functions and TTL tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
