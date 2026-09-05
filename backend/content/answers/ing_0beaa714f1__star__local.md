---
qid: ing_0beaa714f1__star__local
question: 'Explain: And when you store data in Amazon — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 336
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:29-05:00'
sources: []
---

**Situation:** In late 2020 I led a startup’s migration of its user analytics pipeline to the cloud. Our monolithic backend was hitting latency spikes during peak traffic, and we needed a flexible store for event data that could scale horizontally without locking us into a relational schema.

**Task:** I had to pick an AWS NoSQL database that could ingest millions of events per day, support real‑time queries on user segments, and integrate with downstream ML models in SageMaker—all while keeping operational overhead low.

**Action:** I compared DynamoDB, Amazon DocumentDB (MongoDB compatible), and Amazon Keyspaces (Cassandra). After profiling our access patterns—mostly single‑item reads by event ID, occasional range scans over time windows—I evaluated each service’s pricing model, consistency guarantees, and tooling. DynamoDB’s provisioned capacity with on‑demand mode fit our bursty traffic, its native integration with Lambda and Kinesis made the ingestion pipeline painless, and its PartiQL support let us run SQL‑like queries for exploratory analysis. I also leveraged DynamoDB Streams to trigger downstream ML training jobs.

**Result:** The switch cut read latency from 350 ms to under 20 ms on average, handled a 4× traffic spike without provisioning changes, and reduced ops cost by ~30% compared to DocumentDB. I learned that choosing the right NoSQL service hinges on workload patterns, integration needs, and operational simplicity rather than raw performance alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
