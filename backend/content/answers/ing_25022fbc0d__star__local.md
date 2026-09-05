---
qid: ing_25022fbc0d__star__local
question: 'Explain: Database Design Tips | Choosing the Best Database in a System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:56-05:00'
sources: []
---

**Situation**  
During my last product launch, our analytics team needed to store real‑time clickstream data for a mobile app with millions of daily users. The existing PostgreSQL cluster was choking on write throughput, and latency kept creeping above 300 ms during peak hours.

**Task**  
I had to design a database layer that could ingest >10k events per second, support fast aggregation queries for dashboards, and remain cost‑effective within our $20K/month budget.

**Action**  
First I profiled the workload: high write volume, low read latency for aggregates, occasional ad‑hoc scans. I compared three options—PostgreSQL (single node), Amazon Aurora MySQL, and a time‑series database (TimescaleDB). I evaluated horizontal scalability, query performance on roll‑ups, and vendor lock‑in costs. After running benchmark tests, I chose TimescaleDB on an EC2 cluster with 4 vCPU, 32 GB RAM nodes. I partitioned tables by month, enabled hypertable compression for older data, and used continuous aggregates to precompute daily summaries. For high‑velocity ingestion, I set up a Kafka producer that batch‑writes via COPY, reducing transaction overhead.

**Result**  
Write throughput increased from 2k/s to 12k/s with average latency dropping to <80 ms. Dashboard refresh times improved by 70%. The total monthly cost stayed under $18K. I learned that matching the data access pattern (write‑heavy vs read‑heavy) and leveraging native time‑series features can dramatically outperform generic relational setups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
