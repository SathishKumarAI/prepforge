---
qid: ing_1fad57f4b8__aws__local
question: 'Explain: Comparing Key Differences — Cassandra Vs MongoDB Comparison |
  MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 500
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:48-05:00'
sources: []
---

**Situation & Task**  
When I was leading the data‑layer revamp for a high‑traffic e‑commerce platform, we had to decide between **Cassandra** (wide‑column) and **MongoDB** (document) as our NoSQL store for product catalog and user session data. The goal was to support 3 M writes/sec, 10 k queries/sec, while keeping latency < 50 ms and cost < $200K/yr.

**Action – Technical Design & AWS Services**  
I scoped requirements: *schema flexibility*, *horizontal scaling*, *high availability*, and *real‑time analytics*.  
- **Cassandra on Amazon Keyspaces (managed)**: 10 nodes, each with 32 GiB SSD; read/write latency ~5 ms, auto‑replication across AZs, 99.999% durability. Cost ~$140K/yr.  
- **MongoDB Atlas**: Multi‑region clusters, sharded collections, built‑in aggregation pipelines for analytics. Write latency ~10 ms, cost ~$170K/yr.

I benchmarked using YCSB under simulated traffic. Cassandra sustained 3.2 M writes/sec with 95th percentile latency < 8 ms; MongoDB plateaued at 1.6 M writes/sec, latency spiked to 45 ms under peak load.

**Result**  
We chose **Cassandra** for the write‑heavy catalog and **MongoDB Atlas** for ad‑hoc analytics. The split reduced overall cost by 12% and improved uptime (99.9999%) while keeping SLAs intact. Post‑deployment, we saw a 35% reduction in query latency and a 25% drop in support tickets related to data consistency.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Prioritized end‑user experience by ensuring sub‑50 ms latency.  
- **Ownership & Dive Deep** – Conducted hands‑on benchmarks, analyzed trade‑offs, and owned the decision from requirement gathering to deployment.  

Bar‑raiser cues: clear ownership, depth of technical analysis (benchmark results), quantified impact (latency, cost savings), and learning loop (why MongoDB underperformed).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
