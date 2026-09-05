---
qid: ing_6a8000069f__star__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 282
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:34-05:00'
sources: []
---

**Situation:** While launching a global e‑commerce platform, we deployed a CDN to cache product images and static assets for faster load times. Early analytics showed a 35% drop in page latency but an unexpected spike in regional bounce rates.

**Task:** I had to identify why the CDN was hurting user experience in certain markets and devise a mitigation strategy without compromising overall performance.

**Action:** First, I used CloudWatch and DDoS logs to pinpoint that some edge locations were serving stale or corrupted image variants due to aggressive caching rules (TTL set at 24 h). Next, I introduced versioned asset URLs and reduced TTLs for high‑traffic regions. I also enabled “origin shield” so only a single origin handled invalidation requests, cutting down on DNS lookups that were causing latency in Asia. Finally, I added health checks to automatically bypass problematic edge nodes.

**Result:** Bounce rates dropped 22% globally, while page load times improved by an additional 15%. I learned that CDNs, though powerful, can introduce cache staleness, increased complexity for dynamic content, and hidden costs from over‑provisioned edge nodes. Balancing TTLs and health checks is crucial to avoid these pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
