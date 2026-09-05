---
qid: ing_4b5648413b__think__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 600
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:20:40-05:00'
sources: []
---

A Content Delivery Network (CDN) is a globally distributed network of servers designed to deliver web content—such as HTML pages, images, videos, and API responses—to users with low latency and high reliability.  
Key components and concepts:

| Concept | What it means | Why it matters |
|---------|---------------|----------------|
| **Edge servers** | Physical or virtual machines located near major internet exchange points (IXPs) or cities. | Reduce round‑trip time by serving content close to the user. |
| **Origin server** | The primary source of the original data, often a web host or cloud storage bucket. | All edge caches pull fresh copies from here when needed. |
| **Caching** | Storing a copy of a resource on an edge server for a configurable duration (TTL). | Speeds up subsequent requests and offloads traffic from the origin. |
| **Cache invalidation / purging** | Mechanisms to remove or update stale content before its TTL expires. | Keeps users seeing fresh data without manual re‑deployment. |
| **Load balancing & failover** | Automatic routing of user requests to the healthiest edge server, with fallbacks if a node goes down. | Ensures high availability and fault tolerance. |
| **Global load distribution** | Traffic is routed based on geographic proximity, network latency, or health checks. | Minimizes bandwidth costs and improves performance for all regions. |

Typical CDN workflow:
1. User requests `/video.mp4`.  
2. DNS resolves to the nearest edge server (via Anycast).  
3. Edge checks its cache: if hit, serves immediately; if miss, fetches from origin, caches it, then returns to user.  

Benefits of using a CDN:

- **Performance** – Lower latency and higher throughput.
- **Scalability** – Handles traffic spikes without burdening the origin.
- **Reliability** – Redundant nodes mitigate outages.
- **Security** – Many CDNs provide DDoS protection, TLS termination, and WAF capabilities.

Common pitfalls to watch for:

- Over‑caching dynamic content can serve stale data.  
- Misconfigured cache headers (e.g., `Cache-Control: no-store`) prevent CDN caching.  
- Not purging expired assets leads to outdated user experiences.  

When choosing a CDN, evaluate:
- Geographic coverage relative to your audience.  
- Pricing model (pay‑per‑GB vs. flat rate).  
- Integration ease with your existing stack (CDN APIs, SDKs).  
- Additional features needed (image optimization, edge computing).

In short, a CDN acts as a smart intermediary that mirrors and serves content from the nearest possible location, dramatically improving speed, reliability, and cost-efficiency for global web applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
