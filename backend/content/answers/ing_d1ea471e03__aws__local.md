---
qid: ing_d1ea471e03__aws__local
question: 'Explain: Databases — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:28-05:00'
sources: []
---

**Situation (S)**  
I led the migration of a legacy on‑prem MySQL cluster to Amazon Aurora Serverless for a fintech client whose latency had risen above 200 ms after scaling to 5× traffic during peak hours.

**Task (T)**  
Design a resilient, low‑latency database layer that guarantees data integrity while keeping costs < $2k/month. The key decision was whether to expose the DB over **TCP** (standard RDS connections) or **UDP** (for faster read‑only replicas via Aurora Global Database).

**Action (A)**  
1. *Requirement dive*: UDP is stateless and unreliable—no built‑in transaction guarantees, unsuitable for writes but perfect for high‑throughput reads.  
2. *Design*:
   - Use **Aurora Serverless v2** with TCP for all transactional traffic (ensures ACID).  
   - Spin up a read replica in another AZ and expose it via **AWS Global Accelerator + UDP** for analytics queries, adding an internal **Redis cache** to absorb spikes.  
3. *Services*: RDS Aurora, Global Accelerator, ElastiCache Redis, CloudWatch, Cost Explorer.  
4. *Trade‑offs*: TCP offers reliability but 5 % higher latency; UDP cuts read latency by ~30 ms at the cost of potential packet loss (mitigated by retry logic).  

**Result (R)**  
Post‑migration, read latency dropped from 200 ms to **115 ms** (+43 %) and write throughput improved by **2.5×** while keeping spend at **$1,800/month**—a 10 % cost saving versus the baseline. The client reported higher user satisfaction scores (↑ 15 points).  

*Learning*: Always separate read/write workloads by protocol; UDP can boost performance when data consistency is relaxed, but rigorous testing and monitoring are essential to avoid silent failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
