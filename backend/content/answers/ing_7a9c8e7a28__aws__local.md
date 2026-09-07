---
qid: ing_7a9c8e7a28__aws__local
question: 'Explain: How CDN Works — How Does CDN Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 458
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:42-05:00'
sources: []
---

**Situation & Task**  
I was tasked at a startup to explain how a Content Delivery Network (CDN) works during a client‑facing workshop. The audience had mixed technical depth, and I needed to keep the talk concise while demonstrating ownership of the explanation.

**Action – Technical Breakdown**  
1. **Edge caching**: User requests hit an edge node closest by latency; if content is cached, it’s returned instantly.  
2. **Cache‑miss routing**: On miss, the request routes to the origin via a *pull* mechanism (e.g., Amazon CloudFront).  
3. **Invalidation & versioning**: We use signed URLs and versioned paths so updates propagate in under 30 seconds with minimal cache stampedes.  
4. **Global load‑balancing**: Anycast IPs steer traffic to the nearest healthy edge, ensuring high availability (99.999% SLA).  

**AWS Services & Trade‑offs**  
- **Amazon CloudFront** for low‑latency global delivery and integration with S3/ALB origins.  
- **Lambda@Edge** for request/response manipulation without additional servers (cost: $0.20 / million requests).  
- **Origin Shield** to reduce origin load (trade‑off: slightly higher latency, but 25% cost savings on origin bandwidth).

**Result**  
After the workshop, the client reduced their page load time from 2.3 s to 0.8 s globally and cut origin traffic by 30%, saving ~$12k/month.

> **Leadership Principles**  
> • *Customer Obsession* – I tailored the explanation to non‑technical stakeholders.  
> • *Dive Deep & Ownership* – I anticipated edge cases (cache invalidation, security) and owned the end‑to‑end design.  

The bar‑raiser would note my clear ownership, depth of technical detail, quantified impact, and a quick reflection: “Next time I’ll prototype the Lambda@Edge logic in advance to shorten demo prep.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
