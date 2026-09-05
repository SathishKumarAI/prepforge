---
qid: ing_38b76fe0ee__star__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 345
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:06-05:00'
sources: []
---

**Situation:**  
I was working on a video‑streaming startup that had just hit 3 million daily users. Our CDN costs were ballooning—$12 k/month for the same traffic volume as a competitor who managed $6 k. The engineering lead asked me to pinpoint why and propose a cost‑effective delivery strategy.

**Task:**  
Reduce CDN spend by at least 40% while keeping latency under 200 ms globally and maintaining 99.9% uptime, all within a two‑week sprint.

**Action:**  
1. **Data‑driven profiling:** I instrumented edge logs to map request patterns per region, discovering that ~30 % of traffic was from low‑traffic zones served by expensive premium endpoints.
2. **Edge caching policy tweak:** Implemented a tiered cache-control scheme—shorter TTLs for dynamic content and 24‑hour TTLs for static assets—to boost hit ratios from 55% to 78%.
3. **Geolocation routing adjustment:** Switched underutilized high‑cost nodes to cheaper, regional edge caches using Cloudflare Workers, reducing inter‑continental data transfer by 35%.
4. **Cost‑monitoring dashboard:** Built a Grafana panel that alerts when spend crosses thresholds, integrating with the billing API for real‑time cost visibility.

**Result:**  
CDN costs dropped from $12 k to $7 k/month—a 42% savings—while latency improved by 15 ms on average. The project taught me that granular traffic analytics coupled with policy automation can uncover hidden waste and drive sustainable scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
