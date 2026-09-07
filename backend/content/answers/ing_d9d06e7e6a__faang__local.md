---
qid: ing_d9d06e7e6a__faang__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 524
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:05:12-05:00'
sources: []
---

**Clarify**

You want a CDN that delivers static & dynamic assets with low latency, high reliability, and cost‑effective scaling.  
Assumptions:  
* Global audience (latency matters).  
* Mixed content: images, JS/CSS, API responses.  
* Budget constraints but willing to pay for premium features if ROI is clear.  
* Need metrics (RTT, cache hit ratio) and easy integration with CI/CD.

**Approach**

1. **Define requirements** – latency targets, geographic coverage, security needs, analytics, budget.  
2. **Identify candidate CDNs** – Cloudflare, Fastly, Akamai, AWS CloudFront, Azure CDN, Google Cloud CDN.  
3. **Compare on key dimensions** – edge node density, protocol support (HTTP/3), caching policies, origin failover, cost model, developer experience.  
4. **Pilot test** – deploy a subset of assets to each CDN, measure RTT, cache hit ratio, error rates.  
5. **Evaluate results** – pick the one that meets latency & reliability goals within budget; consider multi‑CDN for resilience.

**Depth**

- **Latency**: Measure average RTT from multiple geolocations using `curl -w` or CloudWatch Synthetics.  
- **Cache hit ratio**: Enable CDN logs, aggregate with ELK stack to compute hit/miss rates.  
- **Cost**: Use the provider’s pricing calculator; factor in egress, requests, and optional features (e.g., image optimization).  
- **Security**: Ensure TLS 1.3 support, DDoS protection, WAF integration.  
- **Deployment**: Prefer providers with CDN APIs for automated edge configuration.

**Edge cases**

- Sudden traffic spikes → test auto‑scaling of edge nodes.  
- Mixed content types (e.g., media vs. API) → verify correct cache control headers.  
- Legacy browsers → fallback to HTTP/1.1.  
- Origin downtime → ensure failover policies are in place.

**Optimize & communicate**

After the pilot, present a concise decision matrix highlighting latency, cost per GB, and feature score. Recommend Cloudflare or Fastly for low‑latency global coverage; if tight on budget, AWS CloudFront with S3 integration works well. Communicate that the chosen CDN will reduce first‑byte time by ~30 ms on average and lower origin load, directly improving user engagement metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
