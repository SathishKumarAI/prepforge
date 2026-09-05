---
qid: ing_960fc6e633__star__local
question: What is a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md at master
  \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 344
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:56-05:00'
sources: []
---

**Situation** – While leading the rollout of our new recommendation engine, we noticed that the model inference latency spiked from 120 ms to over 800 ms during peak traffic in Europe and Asia. The API served static assets (JS bundles, CSS, images) from a single US‑based server, so users had to wait for round‑trip delays.

**Task** – I needed to reduce end‑to‑end latency by at least 60 % and ensure consistent performance across all regions, without adding extra load on our inference servers.

**Action** – I introduced a Content Delivery Network (CDN). First, I selected Cloudflare because of its low‑latency edge network and easy integration with our existing S3 bucket. I pushed the static assets to the CDN, configured HTTP/2 and Brotli compression, and set cache-control headers for 30 days. Then I updated our CDN rules so that dynamic API responses bypassed caching but still hit a regional edge proxy that forwarded requests to our nearest inference cluster. Finally, I monitored edge metrics in Cloudflare’s dashboard and tweaked cache purging thresholds.

**Result** – Latency dropped from 800 ms to 200 ms globally, giving us an average 75 % reduction. Traffic from Europe increased by 40 %, and we saw a 15 % lift in conversion rates. I learned that a CDN isn’t just for static files—it can be orchestrated with edge functions to accelerate dynamic ML workloads while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
