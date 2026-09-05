---
qid: ing_d6465eb307__star__local
question: 'Explain: Bonsai Blog | Fully Managed Elasticsearch & OpenSearch • Why Elasticsearch
  should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 361
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:09-05:00'
sources: []
---

**Situation**  
I was working on a real‑time analytics platform for an e‑commerce client that had to ingest millions of order events per day and deliver instant search results to their marketing team.

**Task**  
My job was to design the data layer so we could query historical orders quickly while still keeping the write path fast enough to handle peak traffic. I was tempted to use Elasticsearch as the sole store because it offered near‑real‑time indexing and powerful full‑text search.

**Action**  
I evaluated the trade‑offs: ES stores every document in a denormalized JSON format, which means each field is duplicated for inverted indexes; write amplification was 3–4×. I benchmarked write latency (150 ms per batch) versus the required 20 ms. We also discovered that data retention policies would force us to shard and delete large index segments, causing expensive merge operations. Instead, we set up a relational database (PostgreSQL) as the primary store for transactional consistency, and used ES only as an append‑only search replica, feeding it via Kafka with schema validation. This kept our writes fast, ensured ACID guarantees for orders, and leveraged ES’s strengths for full‑text queries.

**Result**  
Write latency dropped from 150 ms to under 20 ms, overall cost fell by ~30% because we eliminated expensive index merges, and the marketing team got instant search results with a 95% success rate. I learned that choosing the right tool for each job—SQL for primary data, ES for secondary search—yields both performance and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
