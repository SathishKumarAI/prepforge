---
qid: ing_960fc6e633__fp__local
question: What is a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md at master
  \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 366
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:24-05:00'
sources: []
---

**What is a CDN?**  
A Content Delivery Network (CDN) is a geographically distributed system of cache servers that solves the *latency–scalability* trade‑off inherent in serving static and dynamic web content.  

At its core, every HTTP request travels from client → edge node → origin server if uncached. The path length introduces round‑trip latency \(L\), bandwidth constraints, and load spikes that can overwhelm a single origin. A CDN re‑architects the network as a *hierarchical caching graph*: each edge node stores popular objects for a short TTL (time‑to‑live). When a client requests a resource, the request is routed—via DNS or HTTP redirects—to the nearest node. If the object is cached locally, the response latency drops to \(L_{\text{edge}}\) (typically < 100 ms), and traffic bypasses the origin entirely.

The design follows two deeper principles:

1. **Redundancy as a form of load‑balancing** – multiple copies reduce per‑node utilization, enabling each node to handle peak demand without overprovisioning.
2. **Cache locality as an information‑theoretic compression** – by storing only the most frequently requested items (Zipfian distribution), the CDN maximizes hit rate with minimal storage.

A non‑obvious insight: *edge caching also improves security*. Because fewer requests reach the origin, the attack surface shrinks, and edge nodes can terminate TLS, providing a first line of defense against DDoS attacks. Thus, CDNs are not just performance boosters—they are distributed, fault‑tolerant, security‑first architectures that transform how data is delivered over the Internet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
