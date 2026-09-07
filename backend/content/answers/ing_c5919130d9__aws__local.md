---
qid: ing_c5919130d9__aws__local
question: 'Explain: Basic and Advanced Database Operations — RocksDB | A persistent
  key-value store | RocksDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 445
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:46-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup, we had to process *≈1 TB* of daily transaction logs and expose them for real‑time fraud detection. Existing MySQL replicas were bottlenecked at 200 k TPS, causing latency spikes that hurt our *Customer Obsession* KPI (95% SLA on query response). I owned the migration to a high‑throughput key‑value store.

**Action – Design & Implementation**  
- Chose **RocksDB**, an embeddable LSM‑tree engine, for its low write amplification and ability to run on SSDs.  
- Built a sharded architecture: each node runs RocksDB + *Amazon Kinesis* for ingesting streams; *AWS Lambda* parses records into key/value pairs (transaction ID → JSON payload).  
- Implemented **prefix compression** and **column families** to separate hot vs cold data, reducing disk usage by 35 %.  
- Added a **Bloom filter** per table to cut read latency from 12 ms to <2 ms.  
- Deployed on *Amazon EC2 Spot* instances with *EBS gp3*, balancing cost ($0.05/hr) and IOPS (≥10,000).  

**Result**  
- Throughput increased from 200 k TPS to **1.4 M TPS**, a 600 % lift.  
- Query latency dropped from 12 ms to **<2 ms** for 99th percentile requests.  
- Cost per transaction fell by **42 %** versus the previous MySQL cluster.

**Reflection (Bar‑raiser)**  
I took full ownership, dove deep into RocksDB internals, quantified every trade‑off, and learned that aggressive compression can hurt read paths if not tuned—so I added a monitoring guardrail to auto‑tune block size. This iteration delivered measurable impact while aligning with AWS best practices for scalability, availability, and cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
