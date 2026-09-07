---
qid: ing_f443a4e295__faang__local
question: 'Explain: of dynamo so yeah cool let''s move — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 564
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:25-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of the *“Amazon DynamoDB Under the Hood”* talk from AWS re:Invent 2018 (session DAT321).  
Assumptions: we’re describing DynamoDB’s architecture and scaling strategy, not the API surface; focus on how it achieves high‑throughput, low‑latency at a global scale.

**Approach**  
1. Outline DynamoDB’s core concepts (partition keys, consistent reads, tables).  
2. Explain the storage layer: SSD‑backed key–value store + distributed hash‑based partitioning.  
3. Discuss the replication & fault tolerance model (multiple AZs, quorum writes).  
4. Highlight performance tricks: in‑memory cache, request routing, adaptive capacity.

**Depth**  
- **Data model**: Each item is a map of attributes; primary key = partition key (+ sort key).  
- **Partitioning**: Hash of the partition key → 10 TB “shard” space. When hot, DynamoDB automatically splits a shard (auto‑partition) and rebalances traffic.  
- **Storage**: Uses an LSM‑tree on SSDs; writes are first logged to a commit log then flushed to sorted runs, enabling fast point reads.  
- **Replication**: Every write is replicated to ≥3 AZs; read capacity can be configured for strongly consistent (majority) or eventually consistent (single‑AZ).  
- **Capacity**: Provisioned mode lets you set RCUs/WCU; on‑demand auto‑scales. Adaptive capacity monitors hot partitions and temporarily boosts throughput without manual change.  
- **Consistency & TTL**: DynamoDB guarantees linearizability for single‑item operations, with optional conditional writes. Time‑to‑live attributes automatically delete items after expiration.

**Edge Cases**  
- Hot spot keys causing throttling → automatic partition split mitigates but may introduce a brief latency spike.  
- Large items (>400 KB) trigger internal chunking; large scans can incur high read capacity usage.  
- Cross‑region replication (global tables) adds additional latency for writes.

**Optimize & Communicate**  
To improve throughput further, one could add an in‑memory cache layer or use DynamoDB Accelerator (DAX). When explaining to interviewers, emphasize that DynamoDB’s “under the hood” design—hash‑based sharding, SSD‑backed LSM tree, multi‑AZ replication, and adaptive capacity—collectively deliver horizontal scalability while hiding complexity from developers. This narrative shows clear reasoning, depth, and awareness of trade‑offs, matching FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
