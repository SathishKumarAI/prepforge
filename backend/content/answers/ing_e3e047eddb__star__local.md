---
qid: ing_e3e047eddb__star__local
question: 'Explain: CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 321
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:15-05:00'
sources: []
---

**Situation:** While leading the migration of our e‑commerce platform to a microservices architecture, we discovered that our product catalog service was hitting latency spikes during peak traffic, causing cart abandonment rates to rise by 12 %.  

**Task:** I needed to redesign the catalog’s data layer so it could scale horizontally, maintain strong consistency for inventory counts, and still offer sub‑100 ms read performance.  

**Action:** I applied the CAP theorem as a decision framework:  
1. **Consistency (C):** We required real‑time stock updates, so we kept a strongly consistent primary database (PostgreSQL) for write operations.  
2. **Availability (A):** To keep reads fast under load, we introduced an in‑memory cache (Redis) as a read replica, sacrificing immediate consistency for availability.  
3. **Partition tolerance (P):** We deployed the service across multiple zones with a gossip protocol to detect node failures and automatically route traffic away from partitions. I also built a background job that reconciles cached inventory back to PostgreSQL every 5 seconds.  

**Result:** The read latency dropped from 350 ms to 78 ms during peak hours, while the cart abandonment rate fell by 9 %. We maintained data accuracy within 1‑second staleness, meeting SLA targets and learning how to balance CAP trade‑offs in a real‑world system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
