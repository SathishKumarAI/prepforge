---
qid: ing_f4de9d3905__star__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 386
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:14-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning a real‑time analytics pipeline for a fintech app that processed ~10 M events per day. The existing single‑table design in DynamoDB could only query by user ID, but we needed fast lookups on transaction type, status, and time range to support daily reports and fraud alerts.

**Task** – I had to add up to five global secondary indexes (GSIs) without blowing up read/write capacity or latency, while keeping the schema simple and cost‑effective.

**Action** – First, I profiled the query patterns with CloudWatch metrics and identified the top three access paths. For each GSI I chose a partition key that matched the most selective attribute: `TxnType`, `Status`, and `CreatedAt`. The fourth index used a composite key `(UserId, CreatedAt)` to support “last 30 days per user” queries; the fifth combined `MerchantId` with `AmountRange` for high‑value transaction alerts. I set provisioned throughput to 5× the projected traffic for each GSI and enabled on‑demand auto scaling to handle spikes. To keep costs low, I used sparse indexes by adding a `NULL` placeholder in non‑index attributes so that items not relevant to an index didn’t consume capacity.

**Result** – The new design cut query latency from 350 ms to under 50 ms for the most common report and reduced read capacity units by ~30% compared to the previous “scan + filter” approach. I also learned how careful key selection and sparse indexing can balance performance and cost in a multi‑index DynamoDB schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
