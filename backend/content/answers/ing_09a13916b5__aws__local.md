---
qid: ing_09a13916b5__aws__local
question: 'Explain: And if it is then go and — System Design: Content Delivery Networks
  (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 436
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:45-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to design a lightweight CDN for a startup that needed to serve static assets (images, JS/CSS) globally while keeping costs under $5k/month. The goal was to reduce latency from an average of 350 ms to <120 ms and lower bandwidth spend by 30 %.  

**Action**  
I chose **Amazon CloudFront** as the edge layer because it gives sub‑100 ms delivery, automatic TLS termination, and native integration with S3.  
*Cache policy:* a *Custom Cache Policy* that cached on `User-Agent` and `Accept-Encoding`, with TTL 1 day for static files, 10 minutes for dynamic HTML.  
*Origin:* **Amazon S3** (public read only) behind an **AWS WAF** rule set to block malformed requests.  
*Invalidation strategy:* use CloudFront’s *Invalidation API* sparingly—only when a new version of a file is uploaded, keeping the request count <100 per month.  
*Cost controls:* enabled **CloudFront Reserved Capacity** for predictable traffic and used **S3 Intelligent‑Tiering** to auto‑move rarely accessed assets to Glacier.  

**Result**  
Latency dropped from 350 ms to **118 ms** (34% improvement). Bandwidth cost fell by **32%**, saving $1,600/month. Traffic grew 4× over six months without service degradation—demonstrating scalability and high availability.  

**Learning & Leadership Principles**  
I took full *Ownership* of the end‑to‑end pipeline, *Dived Deep* into CloudFront’s caching knobs to avoid waste, and applied a *Bias for Action* by deploying in under two weeks. The bar‑raiser will notice my data‑driven ROI, the trade‑off between cost and cache hit ratio, and how I iterated on cache invalidation after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
