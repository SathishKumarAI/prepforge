---
qid: ing_8400891761__think__local
question: 'Explain: Example — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 443
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
*First, confirm what “shards” refers to (Elasticsearch indices) and why sizing matters—performance, storage, query latency. Assume a typical production cluster with several GB of data and mixed read/write workloads.*

**2️⃣ Adopt a mental model: “Shard‑Sizing ≈ Capacity + Workload + Fault‑Tolerance”**  
Break it into three pillars:
- **Capacity:** total size of documents (bytes) × replication factor → raw storage needed.  
- **Workload:** number of requests per second, average query cost, indexing rate → dictates how many shards can be serviced concurrently.  
- **Fault‑Tolerance & Rebalance:** ensure enough primary shards to allow elastic rebalancing without over‑fragmentation.

**3️⃣ Step‑by‑step reasoning**  
1. Estimate total data volume (e.g., 10 GB).  
2. Choose replication factor (r = 2 → 20 GB storage).  
3. Decide shard size: common sweet spot is 50–200 MB per primary shard; so 20 GB / 100 MB ≈ 200 shards.  
4. Evaluate query/ingest load: if high write rate, increase shard count to spread index segments; if heavy full‑text search, reduce shard count to avoid too many small segments.  
5. Iterate: monitor JVM GC, disk I/O, and adjust.

**4️⃣ Avoid common traps**  
- Don’t let “more shards = better” – over‑fragmentation hurts cache reuse.  
- Ignore index lifecycle; older data may need fewer shards.  
- Forget replication’s storage cost.

**5️⃣ Sanity‑check & communicate**  
Explain the trade‑off: *“We’re sizing to keep each primary shard around 100 MB, which balances disk I/O and query parallelism while leaving headroom for future growth.”* Then ask the stakeholder if their expected write rate or search latency differs, adjusting numbers accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
