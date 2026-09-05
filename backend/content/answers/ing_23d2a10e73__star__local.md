---
qid: ing_23d2a10e73__star__local
question: 'Explain: Maybe you note down 50 devices or — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 335
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:43-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the edge caching layer for our global e‑commerce platform, which served over 200 million page views per day. The existing CDN had stale content issues and a high cache miss rate of 35%, especially during flash sales.

**Task:**  
I needed to build a lightweight, self‑healing CDN prototype that could dynamically discover new edge nodes (up to ~50 devices) and reduce the miss rate below 15% while keeping latency under 80 ms for 95 % of requests.

**Action:**  
I started by enumerating all potential edge devices—IoT routers, local servers, and cloud VMs—and built a discovery service using mDNS and a lightweight REST API to register each node. I then implemented a weighted round‑robin load balancer that adjusted weights based on real‑time cache hit ratios collected via Prometheus metrics. For content invalidation I used a Bloom filter to quickly check if an object existed locally, falling back to the origin only when necessary. Finally, I automated rollback with Terraform scripts so any node failure triggered an instant redeploy.

**Result:**  
After two weeks of staged rollout, cache misses dropped from 35% to 12%, and average latency improved by 25 %. The system handled a 150 % traffic spike during a holiday sale without degradation. This experience taught me how to blend simple discovery protocols with observability to scale edge delivery efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
