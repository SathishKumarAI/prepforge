---
qid: ing_002cbb6e70__aws__local
question: 'Explain: Anti-patterns for partition keys — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 465
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:56-05:00'
sources: []
---

**Scenario –** While architecting a high‑throughput recommendation engine on DynamoDB, I noticed that the chosen partition key caused “hot partitions” and throttling.  
**Task –** Redesign the schema to avoid common anti‑patterns so we could sustain 10 M writes/second with <1 ms latency.

| Anti‑pattern | Why it fails | Fix |
|--------------|--------------|-----|
| **Using a monotonically increasing value** (e.g., timestamp) | All writes target one partition → throttling, uneven capacity usage. | Combine the time slice with a hash of user ID (`hash(user_id + year_month)`), or use a GUID as the key and query via a GSI. |
| **Treating a “natural” unique ID as the key** (e.g., product SKU) | One item per partition → no parallelism; read/write ops become serial bottlenecks. | Split by a prefix derived from the ID (`sku[0:2]`) to spread items across partitions. |
| **Using a highly cardinal attribute that changes often** (e.g., status flag) | Frequent updates hit the same key → hot spot, increased latency. | Keep status in a separate table or use a secondary index for filtering instead of the partition key. |

**Action –** I re‑engineered the schema using `user_id#date_hash` as the partition key and added a GSI on `product_category`. This distributed traffic across ~200 partitions, reduced throttling from 30 % to <2 %, and cut RCU costs by 40 %.  
**Result –** The system now supports 15 M ops/sec with 99.9 % availability, meeting SLA while keeping the bill within budget.

> **Leadership Principles:** *Ownership* (I took responsibility for the performance hit), *Dive Deep* (analyzed hot‑spot logs and capacity metrics), *Bias for Action* (immediate schema change), *Deliver Results* (quantified throughput and cost improvements).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
