---
qid: ing_960fc6e633__faang__local
question: What is a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md at master
  \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 500
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:55-05:00'
sources: []
---

**Clarify**  
A Content Delivery Network (CDN) is a globally distributed cache that serves static and dynamic content closer to end‑users, reducing latency and load on origin servers. I’ll assume we’re talking about HTTP/HTTPS assets (images, JS/CSS, media) rather than custom protocols.

**Approach**  
1. Explain the core components: edge nodes, origin server, routing layer.  
2. Highlight key benefits: lower RTT, higher throughput, DDoS mitigation, SSL termination.  
3. Mention typical use‑cases and how CDNs fit into modern web stacks.

**Depth**  
- **Edge Nodes** are geographically dispersed servers that cache content after the first request from an origin. They often have local storage (SSD) and high‑speed network links.  
- **Origin Server** hosts the authoritative copy; CDNs fetch new or updated objects via HTTP(S) with conditional requests (ETag/Last‑Modified).  
- **Routing Layer** uses DNS tricks, Anycast IPs, or HTTP redirects to point clients to the nearest node based on proximity, health, and load.  
- **Cache Invalidation**: Pull‑through vs push; stale‑while‑revalidate; cache‑control headers control TTL.  
- **Security**: TLS termination at edges, token‑based signed URLs, WAF integration.  
- **Performance**: Edge caching reduces round‑trip time by ~50–70 ms on average, enabling faster page loads and higher SEO scores.

**Edge Cases**  
- Dynamic content with per‑user personalization may bypass cache or use edge computing functions (e.g., Cloudflare Workers).  
- Large objects (>100 MB) can exceed CDN limits; streaming approaches are required.  
- Regulatory compliance: data residency rules might force specific edge locations.

**Optimize & Communicate**  
When explaining, start with a real‑world analogy (“think of Amazon’s warehouses spread worldwide”) to ground the concept. Emphasize that a CDN is not a database but a smart cache layer. Conclude by noting trade‑offs: higher costs vs performance gains, and the need for careful cache‑control strategy. This demonstrates structured thinking, depth in networking fundamentals, and awareness of operational nuances—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
