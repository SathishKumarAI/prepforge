---
qid: ing_2da2fadbc6__aws__local
question: 'Explain: Geographic Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:26-05:00'
sources: []
---

**Situation & Task**  
While leading the redesign of a global e‑commerce platform, I was asked to guarantee *99.999% availability* even during an entire region outage (e.g., the EU‑Central zone). The goal: maintain uninterrupted checkout flow and keep latency under 200 ms for all users.

**Action**  
I architected a **geo‑redundant architecture** using:

| Service | Role |
|---------|------|
| **Amazon Route 53** | Latency‑based routing + health checks |
| **S3 Cross‑Region Replication (CRR)** | Immutable product catalog & media |
| **Aurora Global Database** | Read replicas in US‑East and EU‑West, multi‑region failover |
| **Elastic Load Balancer + Auto Scaling** | Distribute traffic across EC2 instances in two AZs per region |
| **CloudFront with Lambda@Edge** | Edge caching + instant rollback on routing changes |

We implemented a *multi‑region active‑active* pattern: each region ran an identical microservice stack. Route 53 automatically redirected traffic to the healthiest endpoint; if one region failed, failover was <2 s.  

**Result**  
During a real EU‑Central outage (3 h), our system stayed online with 99.9998% uptime. Checkout latency increased from 45 ms to 70 ms—well below the SLA—and revenue loss dropped from an estimated $12M to <$100k. Cost increased by only 15% due to dual‑region traffic, but we achieved **continuous availability** and a higher *customer trust* score (↑ 30%).

**Learning & Ownership**  
I conducted a post‑mortem: discovered that stale Route 53 health checks caused a 1‑minute delay; I automated proactive checks and added a manual override. This reinforced my commitment to *Ownership* and *Dive Deep*, ensuring the system scales, remains available, and costs are controlled while delivering measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
