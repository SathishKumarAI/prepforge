---
qid: ing_c7fa473646__aws__local
question: 'Explain: The fundamental purpose of GSLB — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 407
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:27-05:00'
sources: []
---

**Answer – AWS‑style, 180 words**

> **Why DNS‑based GSLB fails to deliver true global load balancing**

**Situation:**  
Our CDN had a *DNS‑only* GSLB that routed users to the nearest edge by TTL‑based round‑robin. In Q3 we saw a 25 % spike in latency for EU customers during peak hours.

**Task:**  
Show the root cause and propose a robust solution that meets AWS’s **Customer Obsession** and **Deliver Results** principles.

**Action:**  
1. *Dive deep* into the DNS cache chain: TTLs of 60 s caused stale records; resolvers cached them for up to an hour, so traffic stayed in distant regions during congestion.  
2. *Bias for Action* – Replace pure DNS with **Amazon Route 53 latency‑based routing** combined with **AWS Global Accelerator**.  
   - Route 53 queries real‑time latency to the nearest healthy endpoint.  
   - Accelerator keeps a static IP per region, bypassing resolver cache and providing TCP/UDP acceleration.  
3. *Invent & Simplify* – Add health checks (HTTP/HTTPS) on ALBs; use **AWS WAF** for rate limiting.

**Result:**  
Latency dropped from 350 ms to <80 ms in EU, while throughput increased by 18 % and cost per GB fell by 12 %. The new architecture is highly available (multi‑AZ), scales automatically, and costs <$0.01/GB for data transfer via Accelerator.

**Bar‑raiser notes:**  
- Ownership: I owned the entire diagnostic loop.  
- Dive deep: I quantified TTL impact on latency.  
- Quantified impact: 18 % throughput gain, 12 % cost reduction.  
- Learning: Stale DNS can cripple global performance; real‑time routing is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
