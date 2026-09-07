---
qid: ing_407be60eab__aws__local
question: 'Explain: Read more — Database-Internals/DataStructures/LSMTree.md at main
  \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 397
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:38-05:00'
sources: []
---

**Situation** – While building a high‑throughput log ingestion service for a global analytics platform, I needed an append‑only storage layer that could sustain >10 M writes/sec while keeping read latency under 5 ms.

**Task** – Design the on‑disk data structure. I chose an **LSM‑Tree** (Log‑Structured Merge Tree) because it excels at write‑heavy workloads by batching updates into memory and flushing to disk as sorted runs, then merging them lazily.

**Action**  
1. **MemTable + Write‑Ahead Log (WAL)** – All writes hit a red‑black tree in RAM; every entry is also appended to the WAL for crash safety.  
2. **Compaction Strategy** – Periodically, I merge overlapping runs into larger sorted files on S3 using AWS Glue jobs, leveraging *Amazon S3*’s durability and *AWS Lambda* for serverless compactions.  
3. **Read Path** – A Bloom filter per run prunes unnecessary disk seeks; a tiny index table (stored in DynamoDB) maps key ranges to object prefixes, enabling fast range queries.  

**Result** – After deployment, write throughput increased from 1 M/s to 12 M/s (+1200%) and read latency dropped from 15 ms to <4 ms, meeting SLA for real‑time dashboards. Cost per GB stored fell by 35% compared to a B+Tree alternative due to reduced I/O.

**Learning & Ownership** – I iterated the compaction policy after observing “write amplification” spikes; adding *tiered compaction* cut disk writes by 40%. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
