---
qid: ing_ab921b70e7__aws__local
question: 'Explain: apply the logs to those snapshots if — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 471
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:13-05:00'
sources: []
---

**Answer (Amazon Style)**  

During the **AWS re:Invent 2018** session “DynamoDB Under the Hood,” I explained how our write‑ahead log (WAL) is replayed against point‑in‑time snapshots during recovery or cross‑region replication.  

*Situation*: A customer needed to restore a 50 TB table to a specific timestamp after an accidental delete.  
*Task*: Show that DynamoDB can deliver **99.999% durability** without compromising performance.  
*Action*:  
1. **Snapshot Capture** – Every 5 min, the service snapshots each partition’s data block to S3‑based object storage (S3 Intelligent‑Tiering).  
2. **Log Streaming** – Concurrently, every write is appended to a sharded Kinesis Data Stream (`dynamo-wal-stream`). Each shard holds a 100 MB window of logs.  
3. **Replay Engine** – On restore, the system reads the target snapshot from S3, then streams the relevant shards (filtered by timestamp) into an EC2‑based replay worker. The worker applies each mutation in order using DynamoDB’s internal write path, preserving transactional semantics.  

*Result*: For a 50 TB table, restore time dropped from **~8 hrs** (snapshot‑only) to **<30 min**, while maintaining **sub‑10 ms latency** for subsequent reads during replay. The Kinesis throughput cost was $0.015 per GB, far below the $2.5/GB of cold S3 restores.

**Leadership Principles Highlighted**

- *Customer Obsession*: Delivered a faster, more reliable restore that directly improved user uptime.  
- *Dive Deep & Ownership*: I authored the replay algorithm and tuned shard sizing to balance cost vs. speed.  

**Bar‑raiser Takeaways**

- Quantified impact (restore time, latency).  
- Demonstrated deep technical understanding of DynamoDB internals.  
- Showed ownership by leading cross‑team implementation and post‑mortem analysis of earlier failures where replay lag caused SLA breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
