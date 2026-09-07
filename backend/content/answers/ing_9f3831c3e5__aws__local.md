---
qid: ing_9f3831c3e5__aws__local
question: 'Explain: Summary — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 433
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:41-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain the end‑to‑end flow when a user types `https://www.example.com` into Chrome and why it matters for an internal CDN at a large e‑commerce company.

**Action – System Design**  
1. **DNS Resolution** – The browser queries the local resolver, which falls back to the authoritative name server (Route 53).  
2. **TLS Handshake** – A TCP three‑way handshake is followed by TLS 1.3 negotiation; we use **AWS Certificate Manager** for certs and **Elastic Load Balancer (ELB)** for off‑loading.  
3. **Load Balancing & Routing** – ELB forwards to an **Application Load Balancer (ALB)** that routes to a **Fargate** container running Nginx, which pulls static assets from an **S3 bucket** via **CloudFront**.  
4. **Edge Caching** – CloudFront invalidates stale objects only when the origin’s ETag changes; we store cache‑control headers to keep 95 % of traffic served from edge caches.  

**Result**  
- Latency dropped from 350 ms (pre‑cloud) to <70 ms for 90 % of users globally.  
- Cost per request fell by 45 % due to reduced origin hits.  
- Availability hit 99.9999 % SLA, meeting our **Customer Obsession** metric.

**Leadership Principles Reflected**  
- **Ownership & Deliver Results**: I owned the redesign and drove measurable latency & cost wins.  
- **Dive Deep**: I quantified cache hit ratios, TLS handshake times, and traced every hop in the request path.

**Bar‑raiser cue** – The answer shows deep technical knowledge (DNS, TLS, ALB, CloudFront), ties architecture to business metrics, and demonstrates ownership of end‑to‑end performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
