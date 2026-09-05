---
qid: ing_de8688d0a4__star__local
question: 'Explain: Data Replication — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 372
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:51-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time analytics platform that ingested sensor streams from thousands of IoT devices. The SLA required 99.9% uptime and sub‑second query latency, but our single data center kept hitting outage windows when hardware failed or network partitions occurred.

**Task**  
I had to design a replication strategy that ensured high availability without sacrificing performance or introducing stale reads for the analytics dashboards.

**Action**  
I chose asynchronous multi‑region replication with Apache Kafka as the backbone. Each region ran a local ZooKeeper cluster and Kafka brokers; we used compacted topics for sensor snapshots and a log compaction retention policy of 48 hrs to keep recent state lightweight. For read consistency, I implemented a “read‑your‑writes” guarantee by routing writes to the leader in the primary region and exposing a secondary region with a low‑latency read replica that served queries after a configurable lag window (≤ 5 s). To detect split brain scenarios, we used Raft consensus on metadata and a health‑check service that automatically promoted a standby broker if the primary failed. We also added exponential backoff retries for producers to handle transient network glitches.

**Result**  
After deployment, our system achieved 99.98% availability over a six‑month period, with average query latency dropping from 350 ms to 210 ms. The replication lag stayed below 3 s during peak load, and we saw a 40 % reduction in incident response time for hardware failures. I learned that balancing consistency, latency, and operational complexity requires careful trade‑offs and a clear definition of acceptable staleness for the business use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
