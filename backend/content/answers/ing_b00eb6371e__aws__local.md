---
qid: ing_b00eb6371e__aws__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 483
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:32-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the backend team for a photo‑sharing app, we had to add a “Get Comments” endpoint that could serve millions of users per day while keeping latency under 100 ms.

**Action (A) – Design**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **API Gateway + Lambda@Edge** | Edge‑first routing | Lowing RTT to < 20 ms for global users. |
| **DynamoDB Global Tables** | Comment store (partitioned by `postId`) | 99.999% availability, auto‑replication across regions. |
| **ElasticCache Redis** | Hot comment cache (TTL = 5 min) | Drastically reduces DB hits for popular posts; cost ≈ 30 % of read traffic. |
| **SQS + Lambda** | Async write pipeline for new comments | Decouples UI from persistence, enabling eventual consistency and 99.9% durability. |
| **CloudWatch & XRay** | Observability | Real‑time metrics (RPS, latency) and root‑cause tracing. |

*Scalability:* DynamoDB auto‑scales to 10⁶ RPS; cache scales horizontally with Redis Cluster.  
*Availability:* Multi‑AZ + Global Tables guarantees 99.99% uptime.  
*Cost:* Estimated $0.01 per million comment reads (cache) + $0.02 per million writes (DynamoDB), under budget.

**Result (R)**  
After rollout, read latency dropped from **350 ms → 45 ms** and cost per request fell by **68%**, supporting a 4× traffic surge with zero outages.  

---

### Leadership Principles Highlighted
- **Customer Obsession:** Prioritized end‑user latency and reliability.  
- **Ownership & Dive Deep:** Built the entire pipeline, tuned partition keys, and monitored every metric.

**Bar‑raiser Takeaway**  
Shows deep technical ownership (service choices, trade‑offs), quantifiable impact (latency/cost metrics), and learning loop (continuous monitoring & iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
