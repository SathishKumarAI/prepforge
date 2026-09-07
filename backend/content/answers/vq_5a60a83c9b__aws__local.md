---
qid: vq_5a60a83c9b__aws__local
question: Explain Distributed cache in MapReduce Framework?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 496
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task** – While leading a migration of our nightly ETL pipeline from on‑prem Hadoop to EMR, we hit a bottleneck: the shuffle phase kept pulling the same dimension data from HDFS, causing 3× slower job completion and >40 % EC2 spend. I had to design a *distributed cache* that would reduce network traffic and keep memory usage predictable.

**Action** –  
1. **Requirement dive‑deep:** The cache must hold ~120 GB of lookup tables, be read‑only during map tasks, and auto‑expire after 24 h.  
2. **Design & AWS services:** I implemented an *ElastiCache Redis* cluster (cluster mode disabled) with 4 shards (8 GiB each). MapReduce jobs use the Hadoop `DistributedCache` API to load the tables once per task; each mapper pulls keys via a thin Redis client, falling back to HDFS if miss.  
3. **Scalability & cost:** With auto‑scaling on CPU/memory and spot instances for EMR nodes, we reduced EC2 hours by 38 % (from $12k/month to $7.5k) while maintaining 99.9 % cache hit rate.  
4. **Availability trade‑off:** Redis offers single‑point failure risk; I added a Multi-AZ replication group and used a Lambda health check to promote the replica on failover, keeping SLA above 99.95 %.

**Result** – Job runtime dropped from 90 min to 35 min (61 % faster), cost savings of $4.5k/month, and downstream dashboards now refresh in real time.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Faster data delivery directly improved user experience for analytics teams.  
- **Ownership & Dive Deep:** I took end‑to‑end responsibility, dissected performance logs, and chose the optimal caching strategy with measurable ROI.  

**Bar‑raiser signals** – clear ownership narrative, quantitative impact (speed & cost), deep technical rationale, and a risk mitigation plan that shows learning from potential failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
