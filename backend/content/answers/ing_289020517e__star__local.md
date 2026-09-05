---
qid: ing_289020517e__star__local
question: 'Explain: Wide-Column Stores — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 420
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:30-05:00'
sources: []
---

**Situation** – In late 2022 I led a data‑engineering sprint for our retail analytics platform. Our click‑stream pipeline had to ingest ~50 M events per day and support real‑time cohort queries, but the existing relational stack was choking on schema changes and sharding complexity.

**Task** – I needed to choose a storage layer that could handle high write throughput, flexible schema, and provide low‑latency scans across millions of rows while still supporting SQL‑like analytics for our BI team.

**Action** – I scoped 15 wide‑column options (Cassandra, ScyllaDB, HBase, Bigtable, DynamoDB, TiKV, ClickHouse, Druid, Redpanda, Kudu, Accumulo, Spanner, Yugabyte, CockroachDB, and Neo4j). For each I benchmarked write latency, read consistency under mixed workloads, and the cost of schema evolution. The decision criteria were: (1) write‑throughput > 100 k ops/s, (2) support for time‑series partitioning, (3) native secondary index or materialized view for cohort queries, and (4) operational overhead in our Kubernetes cluster. ScyllaDB emerged as the best fit: sub‑10 ms writes, tunable consistency, automatic compaction, and a CQL API that let us migrate legacy JDBC code with minimal changes.

**Result** – Deploying ScyllaDB cut write latency from 120 ms to 8 ms and increased query throughput by 3×. Our analytics team now runs cohort queries in under 2 s on datasets of 30 B rows, freeing up 25 % of our infra budget for new features. I learned that a systematic benchmark across the breadth of wide‑column stores uncovers hidden trade‑offs and aligns technical choice with business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
