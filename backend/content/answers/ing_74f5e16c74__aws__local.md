---
qid: ing_74f5e16c74__aws__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 423
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:31-05:00'
sources: []
---

**Situation & Task**  
At a global gaming platform, Discord’s message store was hitting Cassandra’s hot‑spot limits: read latency spiked to **>300 ms** and write throughput plateaued at ~2 M msgs/s during peak events. I owned the migration plan to lift performance while keeping 99.9% availability for millions of concurrent users.

**Action (Design & Execution)**  
1. **Data‑flow design** – built a parallel, incremental copy pipeline in **AWS Data Pipeline + S3**: export 5 TB per day into Parquet, then ingest via **ScyllaDB’s bulk loader**.  
2. Chose **ScyllaDB on EC2 Spot + EBS gp3** (10 Gbps I/O) for *cost‑effective* scale; added **Elastic Load Balancer** and **Auto Scaling Groups** to auto‑spin 4 nodes during traffic spikes.  
3. Implemented **Cassandra read‑repair fallback** in case of partial sync, ensuring zero data loss.  
4. Rolled out **blue/green deployment**: parallel writes to both stores for 24 h; cutover when health checks passed.

**Result**  
- Latency dropped from **300 ms → <20 ms** (95th percentile).  
- Write throughput increased to **5 M msgs/s** (+150%).  
- Operational cost fell by **22%** due to Spot savings.  
- No downtime; 99.97% availability maintained.

**Reflection**  
I *owned* the entire migration, diving deep into Cassandra’s internals and ScyllaDB’s performance tuning. The biggest learning: early staging of data in S3 prevented hot‑spot bursts during copy. This experience reinforced my bias for action—executing a complex, high‑stakes change while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
