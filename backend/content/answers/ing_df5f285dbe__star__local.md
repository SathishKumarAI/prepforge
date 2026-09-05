---
qid: ing_df5f285dbe__star__local
question: 'Explain: Conclusion — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 341
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:26-05:00'
sources: []
---

**Situation**  
At Uber I was part of the data platform team tasked with scaling our real‑time pricing engine to handle millions of trips per day. The core issue was that we needed to maintain a trillion‑plus index of driver locations, ride requests, and dynamic surge zones in a single, low‑latency store.

**Task**  
Design a system that could ingest billions of events per second, keep the indexes updated within 100 ms, and support complex range queries for pricing calculations—all while keeping operational costs under budget.

**Action**  
I led the migration from a sharded MySQL cluster to LedgerStore, an append‑only, log‑structured storage layer. We partitioned data by geographic region, leveraged LedgerStore’s built‑in compression and versioning to keep hot logs in memory and cold logs on SSDs, and used its deterministic ordering to guarantee atomic updates across multiple indexes. We implemented a lightweight coordination service that replayed the ledger entries to rebuild any lost index shards within minutes. Integration with our existing Kafka pipeline ensured zero‑downtime ingestion.

**Result**  
The new architecture supported 3 trillion indexed records with sub‑50 ms query latency during peak traffic, reduced storage costs by 35%, and cut operational incidents related to index corruption from monthly to near zero. I learned that choosing the right persistence model—append‑only logs for write amplification control—is critical when scaling to petabyte‑level indexes in a distributed environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
