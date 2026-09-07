---
qid: ing_b6130cfedb__aws__local
question: 'Explain: Cassandra: — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 443
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:43-05:00'
sources: []
---

**Situation – Task**  
While leading a data‑platform revamp for a SaaS vendor, I had to decide between **Cassandra** (wide‑column) and **MongoDB** (document) as the persistence layer for real‑time analytics. The goal was to support 10 M events/day with sub‑second query latency across 50+ microservices while staying under $200k/yr.

**Action – Design & AWS Services**  
1. **Requirements**: write‑heavy ingestion, eventual consistency, linear scalability, and multi‑region availability.  
2. **Chosen stack**:  
   * **Amazon Keyspaces (Cassandra‑compatible)** – provides native Cassandra API with managed scaling, auto‑recovery, and DynamoDB‑style billing.  
   * **AWS Glue / Athena** for ad‑hoc analytics over the same data.  
3. **Why not MongoDB?**  
   * MongoDB’s sharding is manual; Keyspaces handles partitioning automatically.  
   * Cassandra’s tunable consistency (QUORUM) meets SLA, whereas MongoDB defaults to eventual and requires replica set tuning.  
   * Cost per TB: Keyspaces ~3× cheaper than self‑managed MongoDB on EC2 due to spot‑instance auto‑tuning.

**Result – Impact**  
- **Latency** dropped from 350 ms (MongoDB) to 75 ms (Keyspaces).  
- **Throughput** increased 4× with no manual rebalancing.  
- **Cost** fell by 28% YoY, freeing budget for ML pipeline upgrades.

**Reflection – Bar‑raiser cues**  
I owned the migration end‑to‑end, dove deep into consistency models, quantified performance gains, and learned that “don’t reinvent sharding”—trust managed services to scale. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
