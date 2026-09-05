---
qid: ing_57cc3e775d__star__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 355
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:11-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a video streaming service that suddenly hit a 15 % drop in uptime during peak hours because our single origin server was overloaded by regional traffic spikes.

**Task:**  
I had to design and deploy a CDN‑based solution that would keep latency under 50 ms for users worldwide while ensuring the system could scale up to 10× traffic without any single point of failure.

**Action:**  
First, I evaluated open‑source edge caching (Varnish) versus commercial CDN providers. I chose Cloudflare for its global PoP network and integrated DDoS protection. I implemented a multi‑layer cache hierarchy: local in‑region caches on Kubernetes nodes using NGINX with a 24 h TTL, then the Cloudflare edge with automatic purging hooks tied to our CI pipeline. I rewrote our content delivery API to support signed URLs for DRM‑protected media and added health‑check endpoints that triggered instant failover to backup origins if latency exceeded 200 ms. Finally, I set up Grafana dashboards to monitor cache hit ratios and origin load in real time.

**Result:**  
The rollout cut average page load times from 1.2 s to 0.4 s and improved uptime from 85 % to 99.8 %. Cache hit ratio jumped to 92 %, saving us $30k/month on origin bandwidth. I learned that balancing edge caching aggressiveness with dynamic content freshness is key, and that monitoring should be baked into the deployment pipeline from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
