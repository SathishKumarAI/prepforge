---
qid: ing_922a2fc569__aws__local
question: 'Explain: Read Replica vs Cache — Readreplicavscache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:40-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“When a team asks whether to use a read replica or a cache for read‑heavy workloads, I first ask: **What are the latency, consistency, and cost trade‑offs we can tolerate?”*  

### Behavioral (STAR)  
- **Situation:** 1 M active users on an e‑commerce site; product catalog queries hit the database at ~3 k RPS.  
- **Task:** Reduce read latency from 120 ms to <30 ms while keeping cost under $10K/month.  
- **Action:** Deployed an Amazon Aurora MySQL *read replica* for cross‑region reads and a Redis‑Cache (Amazon ElastiCache) for hot product data.  
- **Result:** Latency dropped to 25 ms (+80 % improvement); read throughput increased to 5 k RPS; cost saved $3K/month versus scaling the primary DB alone.  

### Technical/System Design  
| Option | AWS Service | Consistency | Scalability | Cost | Trade‑offs |
|--------|-------------|------------|-------------|------|-----------|
| **Read Replica** | Aurora MySQL / PostgreSQL | Eventual (≤1 s lag) | Linear with replica count; supports up to 15 replicas | $0.10/GB‑month + I/O charges | Adds replication latency; cannot cache hot keys |
| **Cache** | ElastiCache (Redis) | Strong if using Redis Cluster with partitioning | Auto‑scales via node groups; handles millions of ops/s | $0.025/instance‑hour + data transfer | Data eviction policies; requires cache‑coherence logic |

### Why I choose both  
- **Ownership & Bias for Action:** Own end‑to‑end performance, not just database tuning.  
- **Dive Deep:** Measured query plans, replication lag, and cache hit ratios.  
- **Deliver Results:** Quantified 80 % latency reduction and $3K/month cost savings.  

### Bar‑raiser focus  
- Depth of trade‑off analysis (consistency vs. cost).  
- Clear quantification of impact.  
- Reflection on a failed attempt where we over‑cached, leading to stale data—learned to add version checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
