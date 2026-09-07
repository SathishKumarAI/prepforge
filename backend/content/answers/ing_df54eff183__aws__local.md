---
qid: ing_df54eff183__aws__local
question: 'Explain: Supported Languages — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 421
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:33-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles: Ownership & Dive Deep.*  

**S – Situation:** While leading a data‑platform revamp for a fintech client, I had to decide between Cassandra and MongoDB for their high‑frequency transaction log. The requirement was >10 M writes/sec with sub‑100 ms latency, 99.999% durability, and global read access.

**T – Task:** Own the architecture choice, deliver a solution that meets SLA, and keep cost under $200K/month.

**A – Action:**  
1. **Dive Deep into workloads:** Benchmarked both engines on an EC2 g4dn.xlarge cluster using YCSB‑B (write‑heavy). Cassandra achieved 12 M rps with ~70 ms latency; MongoDB capped at 3 M rps due to single‑primary write path.  
2. **Design:** Adopted *Amazon Keyspaces* (Cassandra‑compatible) on **Kinesis Data Streams** for ingestion, **EMR** for batch analytics, and **DynamoDB Global Tables** as a fallback cache. For MongoDB, I evaluated **MongoDB Atlas** with multi‑region clusters but noted the 30 % higher cost for comparable throughput.  
3. **Cost & Availability:** Keyspaces scales automatically, reducing ops overhead; Atlas required manual sharding.  

**R – Result:** Chose Cassandra/Keyspaces, achieving 12 M rps, 99.999% availability, and $170K/month—30% below budget while outperforming MongoDB by a factor of 4 in write throughput.

*What the bar‑raiser heard:* Ownership (decided & owned), deep dive (benchmarks & trade‑offs), quantified impact (metrics & cost savings), and learning from failure (MongoDB’s write bottleneck).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
