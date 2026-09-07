---
qid: ing_4c795bd017__aws__local
question: 'Explain: Related patterns — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 505
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:57-05:00'
sources: []
---

**Situation (S)**  
In a recent project we were building a micro‑service architecture for an e‑commerce platform that had to serve 2 M concurrent users during Black Friday. The ML inference service needed to scale on demand, but the other services didn’t know its endpoint because it rotated across multiple Availability Zones.

**Task (T)**  
Implement *server‑side service discovery* so that any consumer could locate the latest ML inference endpoint without manual reconfiguration, while keeping latency < 50 ms and cost < 5 % of the overall spend.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| **Register endpoints** | Amazon ECS Service Discovery (AWS Cloud Map) | Built‑in DNS resolution; automatically registers tasks as they start. |
| **Health checks** | Elastic Load Balancer + CloudWatch | Guarantees only healthy instances are advertised. |
| **Client lookup** | AWS SDK with `DiscoverInstances` API | Bypasses hard‑coded URLs, enabling dynamic routing. |
| **Caching** | Amazon ElastiCache (Redis) | Reduces DNS lookups by 70 % and keeps failover fast. |

*Scalability*: ECS autoscaling triggers new tasks; Cloud Map propagates instantly.  
*Availability*: Service discovery is region‑wide; if an AZ fails, the remaining endpoints stay reachable.  
*Cost*: We pay only for the ECS tasks and minimal CloudMap usage (~$0.20/instance/day).  

**Result (R)**  
Latency dropped from 120 ms to 42 ms, and we achieved 99.999% uptime during peak traffic. The dynamic discovery eliminated manual redeploys, saving ~30 hrs of ops effort per month.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Ensured a flawless user experience by keeping latency low.
- **Ownership & Dive Deep** – Built the end‑to‑end solution, tuned caching, and analyzed failure logs to refine health checks.  

Bar‑raisers will notice my ownership (design + ops), depth (service‑level trade‑offs), quantified impact (latency & cost), and lessons learned from an initial DNS‑only approach that caused 15 % outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
