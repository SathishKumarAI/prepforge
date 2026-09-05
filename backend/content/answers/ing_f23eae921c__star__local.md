---
qid: ing_f23eae921c__star__local
question: 'Explain: 18 Scaling a Database — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 353
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:31-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with supporting a SaaS analytics platform that had grown from 50k to 3M monthly active users over two years. Our PostgreSQL cluster was hitting >95 % CPU and read latency spiked to 350 ms during peak hours, jeopardizing SLA commitments.

**Task:**  
I needed to redesign the data layer so it could handle a ten‑fold increase in traffic while keeping write throughput above 10k ops/sec and read latency under 100 ms for our core dashboards.

**Action:**  
1. **Sharding strategy** – I implemented horizontal sharding on the `user_id` hash, distributing tables across four nodes with Patroni for HA.  
2. **Read replicas** – Added asynchronous read replicas (using Slonik) and introduced a connection pool per shard to balance load.  
3. **Caching layer** – Integrated Redis for hot aggregates; used Lua scripts to keep counters in sync with PostgreSQL via logical decoding.  
4. **Indexing & partitioning** – Created partial indexes on frequently queried columns and time‑based table partitions to speed scans.  
5. **Monitoring & auto‑scaling** – Leveraged Prometheus + Grafana dashboards, set up alerts for CPU/latency thresholds, and scripted EC2 scaling based on metrics.

**Result:**  
After deployment, read latency dropped to 65 ms on average, write throughput exceeded 12k ops/sec, and the system handled a 15× traffic surge with zero downtime. I learned that coupling sharding with targeted caching and automated monitoring is key to sustainable database scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
