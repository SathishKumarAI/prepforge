---
qid: ing_57cc3e775d__faang__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 427
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:50-05:00'
sources: []
---

**Clarify**

> *Problem:* Design a system that guarantees high availability for delivering static and dynamic content worldwide, using a CDN‑style architecture.  
> **Assumptions to confirm:** traffic distribution (global vs local), latency targets, cache eviction policy, failure mode tolerance (e.g., 99.999% uptime), and data consistency needs.

**Approach**

1. **Edge Layer** – Deploy read‑only caches in multiple regions (edge nodes).  
2. **Origin Layer** – Centralized storage with strong consistency (e.g., S3 + RDS).  
3. **Load Balancing & Failover** – Global DNS/Anycast to route to nearest healthy edge; health checks trigger failover.  
4. **Cache Invalidation** – Push events or time‑based TTLs; support immediate purge via API.  
5. **Monitoring & Autoscaling** – Real‑time metrics (latency, error rates) trigger scale‑out of edge nodes.

**Depth**

- *Consistency:* Use eventual consistency for cache; origin remains single source of truth.  
- *Cache Miss Path:* Edge forwards request to origin, caches response, returns to client.  
- *Complexity:* O(1) lookup per request at edge; O(log n) for routing in global DNS.  
- *Trade‑offs:* Strong consistency vs latency; larger TTL reduces traffic but increases stale data risk.

**Edge Cases**

- Sudden regional outage → Anycast fails over to next nearest node.  
- Cache stampede on new content → Use a “single flight” lock at origin.  
- Large object (>10 MB) → Split into multiple chunks or use HTTP/2 push.

**Optimize & Communicate**

Explain that adding more edge nodes reduces latency but increases cache hit ratio; propose CDN auto‑scaling based on real‑time traffic spikes. Conclude with a diagram (optional) and highlight how this design meets SLA targets while keeping costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
