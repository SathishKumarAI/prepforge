---
qid: ing_cadc776176__aws__local
question: 'Explain: Database Replication — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 512
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:48-05:00'
sources: []
---

**Scenario (S)**  
While leading the ML inference service for a global e‑commerce platform, we observed latency spikes in our PostgreSQL read replicas during traffic surges. The team needed a robust replication strategy that would keep data fresh while ensuring low query latency.

**Task (T)**  
Design a database‑replication architecture that supports > 10 k RPS, 99.9 % availability, and < 50 ms read latency across 3 regions.

**Action (A)**  
1. **Choose the right replication model:** Adopt *logical replication* with `pgoutput` so each replica can filter only the tables used by the ML inference layer, reducing unnecessary data transfer.  
2. **Use Amazon RDS + Aurora Global Database** – it natively supports cross‑region read replicas with < 200 ms latency and automatic failover.  
3. **Implement a cache layer (Amazon ElastiCache Redis)** for hot features: 80 % of inference queries hit the cache, cutting read load on DB by ~70 %.  
4. **Monitoring & Auto‑Scaling:** CloudWatch alarms trigger Aurora replica scaling; Lambda rewrites WAL segments to keep replication lag < 5 s.  

**Result (R)**  
- Read latency dropped from 120 ms to 35 ms (≈ 70 % improvement).  
- Replication lag stayed below 3 s during a 200 % traffic spike, maintaining data freshness for ML models.  
- Operational cost decreased by 18 % thanks to cache off‑loading and automated scaling.

**Leadership Principles Highlighted**

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Ownership** | Took full responsibility for end‑to‑end replication health, from design to monitoring. |
| **Dive Deep** | Analyzed WAL traffic, replica lag graphs, and query patterns to identify precise bottlenecks. |

**Bar‑raiser cues**

- Demonstrated *ownership* by building an automated failover pipeline.  
- Showed *depth* with logical vs physical replication trade‑offs and cache hit ratios.  
- Quantified impact: latency & cost reductions.  
- Learned from a prior failure where naive full‑table replication caused 200 ms spikes, leading to the selective replication approach above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
