---
qid: ing_5aa11b562d__faang__local
question: 'Explain: CDN Request Routing — Why are Content Delivery Networks (CDN)
  so Popular?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 476
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:17-05:00'
sources: []
---

**Clarify**  
The question asks why CDNs dominate content delivery today. I’ll assume we’re talking about web‑scale media (video, images, static assets) served globally to millions of users.

**Approach**  
1. List core CDN benefits.  
2. Explain the underlying mechanisms that enable those benefits.  
3. Highlight trade‑offs and typical edge cases.

**Depth**  

| Benefit | Mechanism | Typical Impact |
|---------|-----------|----------------|
| **Low latency & high throughput** | Edge servers cache content near users; DNS/Anycast routes request to nearest node; TCP optimizations (ALPN, HTTP/2) reduce round‑trips. | < 50 ms average RTT for most regions. |
| **Scalability & reliability** | Distributed topology spreads load; automatic failover and health checks keep traffic alive even if a region goes down. | Handles 10⁶+ concurrent connections without single‑point bottlenecks. |
| **Cost efficiency** | Offloads origin servers, reduces egress bandwidth; content is often compressed/optimized on the edge. | Origin costs drop 30–70 % for high‑traffic sites. |
| **Security & compliance** | Integrated WAF, DDoS mitigation, TLS termination, geo‑restriction. | Meets PCI‑DSS / GDPR out of the box for most providers. |

**Edge cases**  
- Dynamic or user‑specific data can’t be cached; requires “origin pull” and may increase latency.  
- Strict privacy laws (e.g., EU ePrivacy) may forbid caching certain data, forcing edge policy changes.  
- Very small sites with minimal traffic might overpay for CDN tiers that charge per request.

**Optimize & communicate**  
I’d suggest starting with a simple origin‑only deployment, then progressively add edge caching and WAF features while monitoring latency and cost. Communicate trade‑offs clearly: “If we cache more aggressively we lower latency but risk stale data; if we restrict caching for compliance we pay higher origin bandwidth.” This shows structured thinking, deep technical grasp, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
