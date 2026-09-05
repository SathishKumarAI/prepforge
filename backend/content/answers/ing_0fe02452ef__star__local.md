---
qid: ing_0fe02452ef__star__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 358
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:07-05:00'
sources: []
---

**Situation** – At my last company we were building a financial platform that had to record every transaction in real‑time, support audit trails, and enforce strict consistency across regions. Our existing relational stack couldn’t keep up with the 10k ops/sec peak without sharding headaches.

**Task** – I was tasked with selecting a ledger‑friendly database solution, justifying its use over other options, and designing an architecture that would satisfy compliance, latency, and scalability requirements.

**Action** – I scoped 15 candidate technologies: PostgreSQL (with MVCC), CockroachDB, TiDB, Spanner, DynamoDB, Cassandra, MongoDB with change streams, Couchbase, Bigtable, HBase, Redis‑Streams, Kafka Streams, Flink State Backend, Apache Ignite, and a custom B+Tree on SSD. For each I evaluated ACID guarantees, write‑ahead logging, timestamp ordering, and distributed consensus (Paxos/RAFT). I built a lightweight benchmark that simulated 10k concurrent writes with 99th‑percentile latency targets. The results showed CockroachDB’s multi‑region replication and serializable isolation met our needs while keeping code complexity low; it also offered a SQL interface for auditors.

**Result** – We migrated to CockroachDB, cutting transaction latency from 350 ms to under 30 ms at peak load, and reduced operational overhead by 40% compared with the sharded PostgreSQL approach. I learned that a thorough trade‑off matrix—combining consistency guarantees, scaling patterns, and compliance tooling—is essential when choosing a ledger database for mission‑critical financial systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
