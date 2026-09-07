---
qid: ing_16b4fb86a7__aws__local
question: 'Explain: LSM-Tree (Log-Structured Merge Tree) — Database-Internals/DataStructures/LSMTree.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 487
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:02-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to redesign the event‑store for a real‑time analytics platform that ingested 10 M events/sec. The existing B+Tree storage hit write‑throughput limits and caused 30 % latency spikes during peak hours.  

**Action**  
I chose an **LSM‑Tree** architecture because it batches writes into in‑memory memtables, flushes them as immutable SSTables on S3, and merges them asynchronously—perfect for high‑write workloads. I designed the following stack:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| In‑memory write buffer | **Amazon ElastiCache (Redis)** | Low‑latency memtable storage with eviction policies. |
| Immutable SSTable store | **Amazon S3** + **S3 Glacier Deep Archive** | Cost‑effective, highly available object store for long‑term retention. |
| Merge & compaction engine | **AWS Fargate** + **Kinesis Data Streams** | Scalable compute that triggers background merges on size thresholds. |
| Query layer | **Amazon Athena / Redshift Spectrum** | SQL access over SSTables without moving data. |

I implemented a *tiered merge* strategy: first‑level compactions happen every 5 min, deeper ones hourly, keeping read amplification below 3 I/O ops per query.  

**Result**  
Write latency dropped from 350 ms to **45 ms** (≈88 % improvement), throughput increased to **12 M events/sec**, and storage costs fell by **35 %** due to S3 tiering. The solution also satisfied *Customer Obsession* by delivering near‑real‑time insights, and *Ownership* by handling both write path and background compaction.  

**Learnings**  
I learned that tuning memtable size and compaction thresholds is critical—early iterations had 5 % data loss due to premature merges, which I fixed by adding a replay log in DynamoDB. This iterative approach exemplifies *Dive Deep* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
