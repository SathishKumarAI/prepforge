---
qid: ing_19c8b38dc3__faang__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:13-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how a load‑balancing layer would be built for the “Spotify System Design” paper by Neo Kim & Hayk.  
Assumptions:  
- The system serves millions of concurrent audio streams.  
- Latency ≤ 200 ms, fault tolerance is required, and traffic can spike during releases.  
- We’ll use stateless HTTP(S) endpoints for metadata and a separate media delivery network (CDN).  

**2️⃣ Approach**  
1. **Front‑end LB**: Global DNS + edge CDN caches.  
2. **Regional LB**: Layer 4/7 load balancer (e.g., GCP Cloud Load Balancing or AWS ELB) that distributes requests to regional API shards.  
3. **Health checks & sticky sessions** for session persistence on the media server side.  

**3️⃣ Depth**  
- *Global DNS*: Route‑53 latency‑based routing → nearest region.  
- *Regional LB*: Uses health probes (TCP/HTTP) and can shift traffic in < 5 s.  
- *Sharding*: Horizontal partition of user data; each shard has its own LB pool.  
Complexity: O(1) for request dispatch, but requires per‑region scaling policies. Trade‑off: higher cost vs. lower latency.  

**4️⃣ Edge Cases**  
- **Sudden traffic spike**: auto‑scaling may lag → use pre‑warming or “scale‑out” on a schedule.  
- **Cache miss in CDN**: fallback to origin, potentially high latency; mitigate with edge compute.  
- **Health probe false positives**: can cause unnecessary traffic shifts; tune thresholds.  

**5️⃣ Optimize & Communicate**  
Explain that we’d monitor latency, error rates, and use weighted round‑robin plus request weighting by user region. Highlight cost/latency trade‑offs and how the design satisfies SLAs while remaining horizontally scalable. This structured reasoning showcases clear problem framing, depth of technical detail, and consideration of real‑world edge cases—key to a strong FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
