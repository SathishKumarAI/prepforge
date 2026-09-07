---
qid: ing_38b76fe0ee__faang__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 466
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:22-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how the cost of a **Content Delivery Network (CDN)** is modeled and what key factors drive it.  
Assumptions:  
- The CDN serves static assets (images, videos, JS/CSS) for a global audience.  
- Pricing is per‑GB transferred plus edge‑node usage; we ignore internal storage costs.

**Approach**  
1. Identify the cost components: data transfer, edge requests, origin fetches, cache hits/misses, and optional services (SSL, DDoS protection).  
2. Derive a formula that aggregates these terms weighted by their price per unit.  
3. Discuss how traffic patterns, geography, and cache hit rates influence each term.

**Depth**  
```
TotalCost = Σ_region [
   (Traffic_GB * Price_Transfer)          // outbound data
 + (Requests  * Price_Request)           // edge request handling
 + (Misses    * Price_Miss)             // origin fetch cost
]
```

*Data transfer* is charged per GB leaving the CDN.  
*Edge requests* cover DNS lookup, TLS handshake, and HTTP processing; priced per 10k or 100k requests.  
*Origin misses* incur an extra fetch from the source (often billed at a higher rate) plus latency penalties.  
Optional services add flat fees: SSL certificates, Web Application Firewall, DDoS mitigation.

**Edge Cases**  
- **Zero traffic regions** → only fixed costs.  
- **Very high cache hit ratio** → Misses term negligible.  
- **Burst traffic** may trigger higher per‑GB rates or overage charges.  
Test by simulating 0 GB, 100 GB, and 1 TB flows across multiple edge locations.

**Optimize & Communicate**  
Explain that to reduce cost you can:  
- Increase cache hit ratio (compress assets, use aggressive TTLs).  
- Choose cheaper regions or tiered transfer pricing.  
- Bundle SSL/WAF with CDN if volume warrants it.  
Conclude by noting the trade‑off between performance and spend, and how monitoring metrics guide optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
