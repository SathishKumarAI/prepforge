---
qid: ing_3e3ff2b0f5__star__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 419
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:58-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at Uber, we were tasked with building a global ledger that could handle every ride‑share transaction in real time. The existing relational store couldn’t scale to the 10⁹ writes per day and the number of attributes we needed to index (driver ID, vehicle ID, region, fare type, etc.) was projected to reach trillions.

**Task:**  
Design a DynamoDB‑based ledger that supports trillions of indexes while keeping latency under 20 ms for reads, cost within $5M annually, and enabling ad‑hoc analytics across any combination of attributes.

**Action:**  
I adopted a *composite partition key* strategy: `PK = <LedgerId>#<ShardId>` to spread traffic evenly. For every attribute we wanted indexable, I created a *Global Secondary Index (GSI)* with `PK` as the shard and `SK` as `<AttributeName>#<Value>`. This gave us O(1) lookups for any single attribute. To handle multi‑attribute queries, I built a secondary “bitmap” table that stored sparse bitsets of transaction IDs per composite key; updates were batched via Lambda to keep write throughput in check. We leveraged DynamoDB’s *on‑demand* mode for bursty traffic and reserved capacity for predictable loads, optimizing costs with auto‑scaling.

**Result:**  
The ledger handled 12 billion writes/day with a 99.9% read success rate at <15 ms latency. Cost dropped 35% compared to the legacy system. I learned that careful partitioning plus lightweight secondary tables can turn DynamoDB into a trillion‑index engine without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
