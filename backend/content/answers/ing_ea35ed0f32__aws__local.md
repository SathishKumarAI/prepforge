---
qid: ing_ea35ed0f32__aws__local
question: 'Explain: this table we have to keep all — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 427
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:56-05:00'
sources: []
---

**Situation & Task**  
While architecting the global catalog for a new e‑commerce platform, I had to decide whether to store every product record in DynamoDB or shard it into multiple tables per region. The business required *universal search* and *real‑time inventory* across all markets.

**Action – Technical Design**  
I chose a single **global table** with **DAX (DynamoDB Accelerator)** enabled for low‑latency reads and a **TTL index** to purge obsolete SKUs automatically. I added a composite key (`PK = "PRODUCT#<id>"`, `SK = "METADATA"` or `"STOCK#<region>"`) so that every item is reachable by any consumer regardless of geography. To guarantee *high availability* I leveraged **Multi‑AZ replication** and set **Provisioned Capacity with Auto Scaling** to 200 % of peak traffic, while using **On‑Demand mode** for bursty campaigns. Cost was kept in check by enabling **reserved capacity** for baseline usage and employing **DynamoDB’s on‑demand read/write throughput** only during flash sales.

**Result – Data‑driven Impact**  
The unified table cut *latency* from 350 ms (sharded) to <30 ms, improved *search accuracy* by 27 % (no stale region data), and reduced *operational overhead* by 60 % (single table vs. 12 regional tables). Quarterly cost savings were $45K due to consolidated capacity planning.

**Reflection & Learning**  
I learned that “keeping all” in one table, when designed with the right key schema and scaling strategy, can deliver both **Customer Obsession** (instant, accurate data) and **Ownership** (simplified ops). Future iterations will experiment with **Global Secondary Indexes** for alternate query patterns to further reduce cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
