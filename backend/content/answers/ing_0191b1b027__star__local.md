---
qid: ing_0191b1b027__star__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:27-05:00'
sources: []
---

**Situation** – At my previous company we had a real‑time analytics platform that served over 10 M daily active users. The API layer was hitting 300 req/s per instance during peak hours and our SLA required <99.5% uptime.

**Task** – I was tasked with designing a load balancer to distribute traffic across the stateless microservices, reduce latency, and provide graceful degradation when a node failed.

**Action** – I chose an **Layer‑4 TCP/UDP round‑robin balancer** backed by HAProxy. First, I set up health checks on `/health` endpoints every 2 s; if a backend returned >5xx or timed out for two consecutive checks, HAProxy removed it from the pool. To handle sudden spikes I added an adaptive rate limiter that throttled clients after 200 req/s per IP, preventing any single user from exhausting resources. I also implemented sticky sessions via source‑IP hashing so session data remained in memory on a single node, which cut cache misses by ~35%. For redundancy, two HAProxy instances ran behind an AWS ELB with cross‑region failover.

**Result** – After deployment the average response time dropped from 450 ms to 210 ms and our uptime rose to 99.97% over the next quarter. I learned that choosing a simple round‑robin + health checks can be more reliable than complex application‑level load balancing, especially when combined with adaptive throttling and sticky sessions for stateful workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
