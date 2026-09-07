---
qid: ing_cca5148f4e__aws__local
question: 'Explain: Scalability — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:37-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑feature‑store team at a fintech startup, we needed a globally consistent database that could ingest **10 M feature updates per day** and serve real‑time inference for **200 k concurrent requests** with <5 ms latency.  

**Action (Design)**  
I chose **Google Cloud Spanner** because it combines horizontal scalability, strong consistency, and global replication—exactly what our ML pipeline required.  
* Sharded tables by user ID to keep hot‑spotting minimal.  
* Enabled **multi‑region replication** (US‑East1 & EU‑West1) for 99.999 % availability; read‑only replicas handled inference traffic, reducing latency by ~30 %.  
* Integrated with **BigQuery** for offline feature aggregation and **Pub/Sub + Dataflow** for real‑time ingestion pipelines.  

I also built a cost‑control layer: automated scaling of instance counts based on daily usage patterns and paused idle replicas during off‑hours, cutting spend by 25 % while keeping SLAs intact.

**Result**  
Within three months we processed **>12 M updates/day**, served **200 k+ concurrent predictions** with <4 ms latency, and maintained 99.998 % uptime—all under a $18K/month budget (≈$0.0015 per request).  

---

### Leadership Principles Highlighted
* **Customer Obsession** – delivering sub‑4 ms inference for end users.  
* **Ownership & Dive Deep** – architecting Spanner sharding, replication, and cost controls from first principles.

Bar‑raisers look for: ownership of the full ML stack, deep technical decisions (sharding logic, replica placement), quantified impact (latency, throughput, cost savings), and lessons learned when scaling beyond initial benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
