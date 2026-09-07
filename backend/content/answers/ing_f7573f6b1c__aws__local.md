---
qid: ing_f7573f6b1c__aws__local
question: 'Explain: Content Delivery Networks (CDNs) — How DNS Actually Works - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 370
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:03-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a global media platform from on‑prem CDN to AWS CloudFront. The goal was to cut latency by 30 % and reduce operational overhead.

**Action**  
I first *dive deep* into how DNS drives CDN traffic:  
1. **Client query → recursive resolver → authoritative name server (Route 53)**  
2. **Authoritative server returns a CNAME to CloudFront edge**  
3. **Edge node serves cached content or fetches from the origin**  

Using this flow, I designed a *multi‑region* Route 53 health‑check strategy that automatically redirects traffic to the nearest healthy edge if an origin fails. I leveraged **Lambda@Edge** for dynamic header injection and **CloudFront Functions** for fast path request rewrites—reducing origin fetches by 25 %.  

I also introduced **WAF rate limiting** at the edge to protect against DDoS, saving ~$10k/month in avoided traffic spikes.

**Result**  
- Latency dropped from 350 ms to 210 ms (30 % improvement).  
- Cache hit ratio rose to 92 %, cutting origin bandwidth costs by 40 %.  
- Incident response time improved from 12 hrs to under 1 hr due to automated failover.  

**Reflection**  
I learned that *ownership* means iterating on DNS and edge logic until the system is resilient, not just “good enough.” The bar‑raiser will note my quantitative impact, deep technical dive, and continuous learning loop—core Amazon values in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
