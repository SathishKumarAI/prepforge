---
qid: ing_4880bd526b__star__local
question: 'Explain: So we''ve basically gone from a billion — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 337
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:28-05:00'
sources: []
---

**Situation:**  
During the launch of our real‑time analytics platform for a telecom client, we had to ingest and query over a billion events per day. Our existing PostgreSQL cluster was choking on write throughput and latency spikes during peak hours.

**Task:**  
I needed to select a NoSQL database that could handle high write velocity, provide flexible schema for evolving event attributes, and support fast ad‑hoc aggregation across multiple dimensions—all while staying within the team’s skill set and budget.

**Action:**  
I scoped three options—Cassandra, DynamoDB, and MongoDB. I benchmarked each using a synthetic workload that mimicked our event shape: 100 k writes/second with occasional range scans for daily reports. Cassandra offered the best write throughput (≈120 k ops/sec) but required careful cluster sizing to avoid hotspotting. DynamoDB’s serverless model simplified operations but hit cost limits at that scale. MongoDB’s flexible schema and aggregation pipeline matched our reporting needs, and with a sharded cluster we achieved 110 k writes/sec and sub‑200 ms query latency. I also implemented a TTL index to auto‑expire old events, reducing storage costs.

**Result:**  
Switching to MongoDB cut write latency from 350 ms to under 80 ms, improved daily report accuracy by 99%, and lowered infrastructure spend by ~15% compared to Cassandra. The exercise taught me the importance of aligning database choice with both workload patterns and operational constraints, rather than just raw performance numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
