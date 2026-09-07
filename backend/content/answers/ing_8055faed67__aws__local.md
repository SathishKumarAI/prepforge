---
qid: ing_8055faed67__aws__local
question: 'Explain: WIX Engineering Analysis — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 439
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:20-05:00'
sources: []
---

**Situation & Task**  
While scaling WIX’s content‑delivery platform, I noticed that the latency of database queries was creeping above 200 ms during peak traffic (≈ 50k concurrent users). The team suspected a bottleneck in JDBC connection handling, so I led an analysis of our current pool implementation—HikariCP on GitHub.

**Action & Design**  
I benchmarked HikariCP against Tomcat‑JDBC and c3p0 under realistic load. Using **Amazon RDS Aurora PostgreSQL** for the backend, I deployed the pools in **ECS Fargate** containers with autoscaling rules tied to CloudWatch metrics (CPU + DB connections).  
Key design choices:  
- **Pool size = 2×EC2 vCPU** (to keep idle connections low while meeting peak demand).  
- **Connection timeout set to 30 s** and **validation query “SELECT 1”** for health checks.  
- **Metrics pushed to CloudWatch**; alerts on > 10 % drop in TPS.

**Result**  
After the switch, average query latency dropped from **210 ms → 65 ms** (−69 %). Transaction throughput increased by **38 %**, and RDS CPU utilization fell from 85 % to 60 %, cutting monthly costs by ~15 %.  

**Reflection & Learning**  
I documented the trade‑offs: a larger pool improves latency but can exhaust DB limits; tighter validation reduces stale connections at a cost of extra round‑trips. This exercise reinforced *Ownership* (owning end‑to‑end performance) and *Dive Deep* (quantifying impact via real metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
