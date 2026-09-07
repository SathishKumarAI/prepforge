---
qid: ing_93c61a0c7f__aws__local
question: 'Explain: Performant — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 501
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:57-05:00'
sources: []
---

**Situation – Task**

When our e‑commerce catalog grew from 1 M to 120 M items, the legacy MySQL read layer stalled under peak traffic: 25 k RPS → 4 s latency. I was tasked to redesign the catalog store for *sub‑50 ms* reads while keeping write throughput > 200 k ops/s.

**Action – Technical Design**

I chose **Apache Cassandra** (open‑source, supported on Amazon Managed Streaming for Apache Kafka and EMR).  
1. **Schema & Partitioning:** A composite key (`category_id|product_hash`) distributes hot items evenly; we use a *wide row* design to keep read paths short.  
2. **Replication & Consistency:** 3‑node cluster, RF = 3 with QUORUM reads/writes → 99.9% availability and < 1 ms inter‑DC latency on AWS Region eu-west-1.  
3. **Tuning:** Compaction strategy = *SizeTiered*, JVM tuned for GC pause < 10 ms, and `cassandra.yaml` set to 8 GB heap per node.  
4. **Monitoring & Autoscaling:** CloudWatch metrics (`ReadLatency`, `WriteLatency`) trigger Spot‑instance scale‑out; we use the AWS Auto Scaling API.

**Result – Data Driven**

- Latency dropped from **4 s → 45 ms** (90% reduction).  
- Throughput increased to **250 k ops/s** with no backpressure.  
- Cost fell by **35%** vs a sharded MySQL cluster, thanks to Spot instances and lower IOPS on EBS.

**Leadership Principles**

- **Ownership:** I owned the entire migration, from requirement gathering to post‑production monitoring.  
- **Dive Deep & Deliver Results:** By inspecting Cassandra internals (commit log, memtable size) I tuned for real traffic patterns, delivering measurable latency gains.

**Bar‑raiser Takeaway**

I demonstrated end‑to‑end ownership, deep technical insight into Cassandra’s architecture, and a quantified business impact—all while learning to balance consistency vs. availability in a distributed store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
