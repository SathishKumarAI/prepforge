---
qid: ing_928f49933f__star__local
question: 'Explain: Robots and Exclusions — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 312
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:07-05:00'
sources: []
---

**Situation:** In my last role at an e‑commerce analytics firm, we needed a real‑time price‑tracking engine that crawled thousands of retailer sites daily. Our previous crawler kept hitting “403 Forbidden” errors and was flagged by many hosts, which threatened our IP reputation.

**Task:** I had to redesign the crawler to respect each site’s `robots.txt` directives while still maintaining high throughput and low latency for price updates.

**Action:** First, I built a lightweight robots‑parser module that fetched and cached each domain’s `robots.txt`, parsed crawl‑delay, disallow/allow rules, and stored them in Redis with TTLs to avoid repeated downloads. The crawler worker then consulted this cache before issuing any request, applying per‑domain rate limits and back‑off logic based on the `Crawl-delay` header. I also introduced a “robots compliance” flag that could be toggled for internal testing. For robustness, the system logged every disallowed URL hit so we could audit policy violations.

**Result:** After deployment, our crawler’s error rate dropped from 18% to <2%, and we achieved a 35% increase in successfully fetched product pages per hour without any new IP bans. I learned that treating `robots.txt` as a first‑class API, not an afterthought, dramatically improves both reliability and ethical standing in large‑scale web scraping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
